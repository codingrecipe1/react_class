## 실습에 사용된 쿼리문

```sql
create database db_ex;
create user user_ex@localhost identified by '1234';
grant all privileges on db_ex.* to user_ex@localhost;

ALTER USER user_ex@localhost IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;

drop table if exists board_table;
create table board_table(
	id bigint 			auto_increment primary key,
    boardTitle 			varchar(50),
    boardWriter 		varchar(50),
    boardPass 			varchar(50),
    boardContents 		varchar(500),
    boardHits 			int default 0,
    createdAt 			datetime default now()
    );
```
