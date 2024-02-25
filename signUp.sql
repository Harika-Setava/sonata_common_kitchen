
create table signUp(username varchar(50), email varchar(50), password varchar(50), confirmPassword varchar(50));
select * from signUp;
insert into signUp
(username, email, password, confirmPassword)
values
("Harika", "setava@gmail.com", "1234", "1234");
create database employee;
create table employee1(
id int(3) not null,
first_name varchar(20) default null,
last_name varchar(20) default null,
user_name varchar(250) default null,
password varchar(20) default null,
address varchar(45) default null,
contact varchar(45) default null,
primary key(id))
engine=InnoDB default charset=utf8mb4 collate=utf8mb4_0900_ai_ci;
select * from employee1;