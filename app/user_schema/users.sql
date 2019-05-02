CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  email VARCHAR(30) NULL,
  password VARCHAR(30) NULL,
  img_file VARCHAR(30) NULL,
  q1 INT NULL,
  q2 INT NULL,
  q3 INT NULL,
  q4 INT NULL,
  q5 INT NULL,
  q6 INT NULL,
  q7 INT NULL,
  q8 INT NULL,
  q9 INT NULL,
  q10 INT NULL,
  PRIMARY KEY(id)
);

INSERT INTO user (first_name, last_name, email, password, img_file, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
VALUES("test_first_name", "test_last_name", "testPass123", "profilepic.jpg", 1, 2, 3, 4, 5, 1, 2, 3, 4, 5);