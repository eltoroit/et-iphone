const express = require('express')
const app = express()
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://{HOST}:${port}`)
})