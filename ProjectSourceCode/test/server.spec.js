// ********************** Initialize server **********************************

const server = require('../index.js'); //TODO: Make sure the path to your index.js is correctly added

// ********************** Import Libraries ***********************************

const chai = require('chai'); // Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {assert, expect} = chai;

// ********************** DEFAULT WELCOME TESTCASE ****************************

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', done => {
    chai
      .request(server)
      .get('/welcome')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });
});

// *********************** TODO: WRITE 2 UNIT TESTCASES **************************
describe('Testing Render', () => {
  // Sample test case given to test /test endpoint.
  it('test "/login" route should render with an html response', done => {
    chai
      .request(server)
      .get('/login') // for reference, see lab 8's login route (/login) which renders home.hbs
      .end((err, res) => {
        res.should.have.status(200); // Expecting a success status code
        res.should.be.html; // Expecting a HTML response
        done();
      });
  });
});
describe('Testing Redirect', () => {
  // Sample test case given to test /test endpoint.
  it('\test route should redirect to /login with 302 HTTP status code', done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200); // Expecting a redirect status code
        res.should.redirectTo(/^.*127\.0\.0\.1.*\/login$/); // Expecting a redirect to /login with the mentioned Regex
        done();
      });
  });
});
// ********************************************************************************

// Example Positive Testcase :
// API: /add_user
// Input: {id: 5, name: 'John Doe', dob: '2020-02-20'}
// Expect: res.status == 200 and res.body.message == 'Success'
// Result: This test case should pass and return a status 200 along with a "Success" message.
// Explanation: The testcase will call the /add_user API with the following input
// and expects the API to return a status of 200 along with the "Success" message.

// describe('Testing Add User API', () => {
//   it('positive : /add_user', done => {
//     chai
//       .request(server)
//       .post('/add_user')
//       .send({spotifyuser: "harikakondur", password:"harika"})
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.message).to.equals('Success');
//         done();
//       });
//   });
  
//   it('Negative : /add_user. Checking empty password', done => {
//     chai
//       .request(server)
//       .post('/add_user')
//       .send({spotifyuser: "harikakondur"})
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         expect(res.body.message).to.equals('Invalid input');
//         done();
//       });
//   });
// });