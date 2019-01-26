var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        res.send(error)
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body)
      .then((data) => {
        console.log('its posted!', data);
        res.json('its posted!')
      })
      .catch((err) => {
        res.send(err)
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get()
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        res.send(error)
      })
    }, // a function which handles a get request for all users
    post: function (req, res) {
      models.users.post(req.body)
      .then((data) => {
        console.log('its posted! (user)', req.body);
        res.json('its posted! (user)')
      })
      .catch((err) => {
        res.send(err)
      })
    }  // a function which handles posting a user(?) to the database
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      models.rooms.get()
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        res.send(error)
      })
    }, // a function which handles a get request for all rooms
    post: function (req, res) {
      models.rooms.post(req.body)
      .then((data) => {
        console.log('its posted! (room)', data);
        res.json('its posted! (room)')
      })
      .catch((err) => {
        res.send(err)
      })
    }  // a function which handles posting a rooms(?) to the database
  }
};

