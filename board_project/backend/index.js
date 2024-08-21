import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "user_ex",
  password: "1234",
  port: "3306",
  database: "db_ex",
});

db.connect((err) => {
  console.log("db 연결 성공!!");
  console.log("err", err);
});

app.listen(8000, () => {
  console.log("서버 시작!");
});

app.post("/board/save", async (req, res) => {
  const { boardTitle, boardWriter, boardPass, boardContents } = req.body.board;
  console.log(boardTitle, boardWriter, boardPass, boardContents);
  const sql = "insert into board_table(boardTitle, boardWriter, boardPass, boardContents) values(?,?,?,?)";
  await db.query(sql, [boardTitle, boardWriter, boardPass, boardContents], (err, results, fields) => {
    console.log("err", err);
    console.log("results", results);
    console.log("fields", fields);
  });
  res.status(200).send("작성완료");
});

app.get("/board/list", async (req, res) => {
  const sql = "select * from board_table";
  await db.query(sql, (err, results, fields) => {
    console.log("results", results);
    res.status(200).json(results);
  });
});

app.get("/board/:id", async (req, res) => {
  const { id } = req.params;
  const hitSql = "update board_table set boardHits=boardHits+1 where id=?";
  await db.query(hitSql, [id], (err, rows, fields) => {});
  const sql = "select * from board_table where id=?";
  let board = [];
  await db.query(sql, [id], (err, results, fields) => {
    console.log("results", results);
    board = results;
    res.status(200).json(board);
  });
});

app.get("/board/update/:id", async (req, res) => {
  const { id } = req.params;
  const sql = "select * from board_table where id=?";
  let board = [];
  await db.query(sql, [id], (err, results, fields) => {
    console.log("results", results);
    board = results;
    res.status(200).json(board);
  });
});

app.put("/board/update/:id", async (req, res) => {
  const { id, boardTitle, boardContents } = req.body.board;
  const sql = "update board_table set boardTitle=?, boardContents=? where id=?";
  await db.query(sql, [boardTitle, boardContents, id], (err, results, fields) => {});
  res.status(200).send("수정완료");
});

app.delete("/board/:id", async (req, res) => {
  const { id } = req.params;
  const sql = "delete from board_table where id=?";
  await db.query(sql, [id], (err, results, fields) => {});
  res.status(200).send("삭제완료");
});
