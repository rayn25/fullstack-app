const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 4000;
const HOST = "0.0.0.0";

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, world111!');
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.use(express.static(path.join(__dirname, '../uploads')))

app.listen(port, () => {
    console.log(`${port}번에서 실행이 되었습니다.`)
});




