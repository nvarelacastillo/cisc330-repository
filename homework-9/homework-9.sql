CREATE DATABASE `homework_9`;

CREATE TABLE `library`
(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(254) NOT NULL,
    primary key (`id`)
);

CREATE TABLE `books`
(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(254) NOT NULL,
    primary key (`id`)
);

CREATE TABLE `libraryBook`
(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `libraryID` int(11) NOT NULL,
    `bookID` int(11) NOT NULL,
    primary key (`id`)
);

insert into library (name)
values ('Nicole');

insert into library (name)
values ('Sarah');

insert into books (name)
values ('Pride and Prejudice');

insert into books (name)
values ('Emma');

insert into libraryBook (libraryID, bookID)
values (1,1);

insert into libraryBook (libraryID, bookID)
values (2,2);

select * from library where id=1;

select * from books where name like '%Emma%';

select * from books order by name;

SELECT
    books.name AS bookName,
    library.name AS libraryName
FROM
    libraryBook
        JOIN
    books ON libraryBook.bookID = books.id
        JOIN
    library ON libraryBook.libraryID = library.id;

update books SET name = 'Persuasion' where id=1;

delete from books where id = 1;
