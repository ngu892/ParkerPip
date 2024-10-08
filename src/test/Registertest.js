// User_Register.js
class UserRegister {
  constructor() {
    this.users = [];
  }

  register(user) {
    if (!user.name || !user.email) {
      throw new Error('Invalid user');
    }
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }
}

module.exports = UserRegister;

// Registertest.js
const chai = require('chai');
const expect = chai.expect;
const UserRegister = require('../User_Register'); // 상대 경로 수정

describe('UserRegister', function() {
  let userRegister;

  beforeEach(function() {
    userRegister = new UserRegister();
  });

  it('should register a user successfully', function() {
    const user = { name: 'John Doe', email: 'john@example.com' };
    const result = userRegister.register(user);
    expect(result).to.equal(user);
    expect(userRegister.getUsers()).to.include(user);
  });

  it('should throw an error if user is invalid', function() {
    const invalidUser = { name: '', email: '' };
    expect(() => userRegister.register(invalidUser)).to.throw('Invalid user');
  });

  it('should return all registered users', function() {
    const user1 = { name: 'John Doe', email: 'john@example.com' };
    const user2 = { name: 'Jane Doe', email: 'jane@example.com' };
    userRegister.register(user1);
    userRegister.register(user2);
    const users = userRegister.getUsers();
    expect(users).to.have.lengthOf(2);
    expect(users).to.include(user1);
    expect(users).to.include(user2);
  });
});