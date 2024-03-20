/**
 * 1. npx sequelize init으로 시퀄라이즈 구조 생성
 * 2. config/config.js 수정
 * 3. model/index.js config 설정 수정
 */
const db = require('./models');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.get('/', (req, res) => {
  res.send('/');
});

app.listen(port, () => {
  console.log(`started...${port}`);
});
