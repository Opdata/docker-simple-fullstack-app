const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const mysql = require("mysql");
const app = express();

// json 형태로 오는 요청의 본문을 해석해줄수있게 등록
app.use(bodyParser.json());

// 테이블 생성
// db.pool.query(
//   `CREATE TABLE lists (
//   id INTEGER AUTO_INCREMENT,
//   value TEXT,
//   PRIMARY KEY (id)
// )`,
//   (err, results, fileds) => {
//     console.log("results", results);
//   }
// );

app.get("/api/values", function (req, res) {
  db.pool.query(`SELECT * FROM list`, (err, results, fileds) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

app.post("/api/value", function (req, res, next) {
  db.pool.query(
    `INSERT INTO list (value) VALUES("${req.body.value}")`,
    (err, results, fileds) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value: req.body.value });
    }
  );
});

app.listen(5000, () => {
  console.log("Server Running");
});
