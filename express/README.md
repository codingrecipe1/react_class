## 실습에 사용된 쿼리문

```sql
create database db_ex;
create user user_ex@localhost identified by '1234';
grant all privileges on db_ex.* to user_ex@localhost;

ALTER USER user_ex@localhost IDENTIFIED WITH mysql_native_password BY '1234';
FLUSH PRIVILEGES;

drop table if exists nations_table;
create table nations_table(
	id bigint auto_increment primary key,
    name varchar(20),
    capital varchar(20),
    population int
    );

insert into nations_table(name, capital, population) values("대한민국", "서울", 51200000);
insert into nations_table(name, capital, population) values("프랑스", "파리", 67750000);
insert into nations_table(name, capital, population) values("호주", "캔버라", 25690000);
```
