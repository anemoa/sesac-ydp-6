const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 6777;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));

app.use('/imgs', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/public'));

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filesname(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }    
    }),
    limits: {fileSize: 5 * 1024 * 1024}
});


app.post('/gaip', uploadDetail.single('image'), (req, res) =>{
    res.render({ title: req.body.title});
})

app.get('/', (req, res) => {
    res.render('index', {title: '실습'})
})

app.listen(PORT, () => {
    console.log(`${PORT} 접속`);
});