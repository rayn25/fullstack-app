const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('연결 완료');
    })
    .catch((err) => {
        console.error(err);
    });

app.get('/', (req, res, next) => {
   setImmediate(() => {next(new Error("에러 테스트"))});
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})



// 에러 처리기
app.use((error, req, res, next) => {
    res.status(error.stats || 500);
    res.send(error.message || "에러 발생");
})

app.use('/users', require('./routes/users'));

app.use(express.static(path.join(__dirname, '../uploads')))

app.listen(port, () => {
    console.log(`${port}번에서 실행이 되었습니다.`)
});




