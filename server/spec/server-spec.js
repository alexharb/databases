/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'student',
      password: 'student',
      database: 'chat'
    });
    dbConnection.connect();

    var tablename = "messages"; // TODO fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    
    dbConnection.query('SET FOREIGN_KEY_CHECKS = 0', () => {
      dbConnection.query('truncate ' + tablename, () => {
        dbConnection.query('truncate rooms', () => {
          dbConnection.query('truncate users', () => {
            dbConnection.query('SET FOREIGN_KEY_CHECKS = 1', done)
          })
        });
      });
    })
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: {id: 0, 
        userName: 'Valjean'
      }
    },function () {
      // Post a room to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/rooms',
        json: {
          id: 0, 
          roomName: 'Hello'
        }
      }, function () {
      // Post a message to the node chat server:
        request({
          method: 'POST',
          uri: 'http://127.0.0.1:3000/classes/messages',
          json: {
            id: 0,
            txt: 'In mercy\'s name, three days is all I need.',
            user: 0,
            room: 0
          }
        }, function () {
          // Now if we look in the database, we should find the
          // posted message there.

          // TODO You might have to change this test to get all the data from
          // your message table, since this is schema-dependent.
          var queryString = 'SELECT * FROM messages';
          var queryArgs = [];

          dbConnection.query(queryString, queryArgs, function(err, results) {
            // Should have one result:
            expect(results.length).to.equal(1);

            // TODO If you don't have a column named text, change this test.
            expect(results[0].txt).to.equal('In mercy\'s name, three days is all I need.');

            done();
          });
        });
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    var queryString = 'INSERT INTO users (id, userName) VALUES(?, ?)';
    var queryArgs = ['0', 'Amy'];
    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }
    });
      var queryString = 'INSERT INTO rooms (id, roomName) VALUES(?, ?)';
      var queryArgs = ['0', 'main'];
    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }
    });

    // Let's insert a message into the db
      var queryString = 'INSERT INTO messages (id, txt, user, room) VALUES(?, ?, ?, ?)';
      var queryArgs = ['0', 'Men like you can never change!', '0', '0'];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].txt).to.equal('Men like you can never change!');
        expect(messageLog[0].room).to.equal(0);
        done();
      });
    });
  });
});
