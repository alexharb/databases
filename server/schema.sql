DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  userName TEXT NOT NULL
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  roomName TEXT NOT NULL
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY,
  txt TEXT NOT NULL,
  user INTEGER,
  roomName INTEGER,
  FOREIGN KEY(user) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(roomName) REFERENCES rooms(id) ON DELETE CASCADE
);


/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/