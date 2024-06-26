const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');
const { sequelize } = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router);
app.use('/players', playerRouter);
app.use('/teams', teamRouter);

sequelize
    // force: true; 서버 실행때 마다 테이블을 재 생성
    // force: false; 서버 실행시 테이블이 없으면 생성
    .sync({ force: false })
    .then( () => {
        app.listen(PORT, () => {
            console.log(`Database 연결 성공!`);
            console.log(`서버 접속! ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });