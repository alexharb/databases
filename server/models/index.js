var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log(db.connection);
      // connection.connect();
      // connection.end();
      return 'im a baby'
    }, // a function which produces all the messages
    post: function () {
      connection.connect();

      connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      connection.connect();

      connection.end();
    },  // a function which produces all the users
    post: function () {
      connection.connect();

      connection.end();
    }  // a function which can be used to insert a user into the database
  },

  rooms: {
    get: function () {
      connection.connect();

      connection.end();
    }, // a function which produces all the rooms
    post: function () {
      connection.connect();

      connection.end();
    } // a function which can be used to insert a room into the database
  },
};

