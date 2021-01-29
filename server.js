const express = require('express');
const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    let dttm = new Date().toJSON().replace("T", " ").replace(/-/g, "").split(".")[0];
    res.render('pages/index', {
        dttm,
        color: getRandomColor()
    });
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://${HOST}:${PORT}`);
})


function getRandomColor() {
    let RED = 128 + Math.floor(Math.random() * Math.floor(128));
    let GREEN = 128 + Math.floor(Math.random() * Math.floor(128));
    let BLUE = 128 + Math.floor(Math.random() * Math.floor(128));
    return `rgb(${RED}, ${GREEN}, ${BLUE})`;
}