/**
 * 1. npx sequelize init으로 시퀄라이즈 구조 생성
 * 2. config/config.js 수정
 * 3. model/index.js config 설정 수정
 */
const db = require('./models');
const User = require('./models/user');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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

app.get('/user', async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.name } });
  res.send({ result: user });
});

app.post('/user', async (req, res, next) => {
  try {
    const user = await User.create({
      username: req.body.username,
      age: req.body.age,
      addr: req.body.addr,
    });

    res.send(user);
  } catch (error) {
    console.log(error);
    next();
  }
});

app.listen(port, () => {
  console.log(`started...${port}`);
});
