var db = require('../db');

module.exports = {

  messages: {
    get: function () {
      return new Promise((resolve, reject) => {
        db.connection.query('SELECT * FROM messages', (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        })
      })
    }, // a function which produces all the messages
    post: function (message) {
      return new Promise((resolve, reject) => {
        var queryString = `INSERT INTO messages (id, txt, user, roomName) VALUES(${message.id}, '${message.txt}', ${message.user}, ${message.roomName})`;
        db.connection.query(queryString, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        })
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

      return new Promise((resolve, reject) => {
        db.connection.query('SELECT * FROM users', (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        })
        
      })
      
    },  // a function which produces all the users
    post: function (user) {
      return new Promise((resolve, reject) => {
        var queryString = `INSERT INTO users (id, userName) VALUES(${user.id}, '${user.userName}')`;
        db.connection.query(queryString, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        })
      })
      
      // 
    }  // a function which can be used to insert a user into the database
  },

  rooms: {
    get: function () {
      
      return new Promise((resolve, reject) => {
        db.connection.query('SELECT * FROM rooms', (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        })
        
      })
      
      // 
    }, // a function which produces all the rooms
    post: function (room) {
      return new Promise((resolve, reject) => {
        var queryString = `INSERT INTO rooms (id, roomName) VALUES(${room.id}, '${room.roomName}')`;
        db.connection.query(queryString, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        })
      })
      
      // 
    } // a function which can be used to insert a room into the database
  },
};

