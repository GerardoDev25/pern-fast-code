CREATE DATABASE taskdb

CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title varchar (255) unique,
  descriptin varchar(255)
)