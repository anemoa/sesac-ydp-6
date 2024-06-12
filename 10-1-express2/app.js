const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log('3030 실행');
})