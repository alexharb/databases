var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      /*
      status is 200
      have response, which is all messages(stringified)
      we don't care about the path
      */
      var messages = models.messages.get();
      res.json(messages);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.json('posted messages!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.json('hell0 from get users');
    }, // a function which handles a get request for all users
    post: function (req, res) {
      res.json('posted users!');
    }  // a function which handles posting a user(?) to the database
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      res.json('hell0 from get rooms');
    }, // a function which handles a get request for all rooms
    post: function (req, res) {
      res.json('posted rooms!');
    }  // a function which handles posting a rooms(?) to the database
  }
};

