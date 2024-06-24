use codingon;

create table visitor(
	id int primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

desc visitor;

-- 데이터 추가
insert into visitor values
	(null, '홍길동', '내가 옴'),
    (null, '이찬혁', '으라차차');

select * from visitor;

drop table visitor;