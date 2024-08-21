import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "user_ex",
    password: "1234",
    port: "3306",
    database: "db_ex"
});

db.connect(err => {
    console.log("db 연결 성공!!");
    console.log("err", err);
});

app.listen(8000, () => {
    console.log("서버 시작!");
});

app.get("/", () => {
    console.log("기본주소 요청");
});

app.get("/hello", () => {
    console.log("hello 주소 요청");
});

app.get("/qs", (req) => {
    console.log(req.query);
    const { p1, p2 } = req.query;
    console.log(`p1: ${p1}, p2: ${p2}`);
});

app.get("/:id", (req) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);    
});

app.post("/hello", () => {
    console.log("/hello post 요청");
});

app.post("/post-req", (req) => {
    console.log(req);
    console.log(req.body.name);
    const { name, age } = req.body;
    console.log(`name: ${name}, age: ${age}`);
});

app.get("/nations/list", (req, res) => {
    const sql = "select * from nations_table";
    db.query(sql, (err, results, fields) => {
        console.log("err", err);
        console.log("results", results);
        console.log("fields", fields);
        res.json(results);
    });
});

app.get("/nations/:id", (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const sql = "select * from nations_table where id=?";
    db.query(sql, [id], (err, results, fields) => {
        console.log("err", err);
        console.log("results", results);
        if(results.length == 0) {
            // 조회 결과 없음. 
            res.status(404).send("요청하신 데이터를 찾을 수 없습니다.");
        } else {
            // 조회 결과 있음. 
            res.status(200).json(results);
        }
    });
});

app.post("/nations/save", async (req) => {
    const { name, capital, population } = req.body;
    console.log(`name: ${name}, capital: ${capital}, population: ${population}`);
    const sql = "insert into nations_table(name, capital, population) values(?,?,?)";
    await db.query(sql, [name, capital, population], (err, results, fields) => {
        console.log("err", err);
        console.log("results", results);
        console.log("fields", fields);
    });
});

app.put("/nations/:id", (req, res) => {
    const { id, name, capital, population } = req.body;
    console.log(`id: ${id}, name: ${name}, capital: ${capital}, population: ${population}`);
    const sql = "update nations_table set population=? where id=?";
    db.query(sql, [population, id], (err, results, fields) => {
        console.log("err", err);
        console.log("results", results);
        console.log("fields", fields);
        res.status(200);
    });
});

app.delete("/nations/:id", (req, res) => {
    const id = req.params.id;
    const sql = "delete from nations_table where id=?";
    db.query(sql, [id], (err, results, fields) => {
        console.log("err", err);
        console.log("results", results);
        console.log("fields", fields);

    });
});