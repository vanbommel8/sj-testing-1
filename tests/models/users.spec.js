const chai = require('chai');
const expect = chai.expect;
const User = require('../../models/users');

describe('User.save', () => {
  /* before('Delete all users from DB test', async () => {
    await User.remove({});
  }); */

  after('Delete all users from DB test', async () => {
    await User.remove({});
  });

  it('Create new User Document', async () => {
    const newUser = {
      name: 'Fabrizio',
      surname: 'Bianchi',
      age: 22,
      email: 'fabrizio@gmail.com',
    };
    const user = await User.create(newUser);
    expect(user).has.property('name', newUser.name);
    expect(user).has.property('surname', newUser.surname);
    expect(user).has.property('age', newUser.age);
    expect(user).has.property('email', newUser.email);
    expect(user).has.property('_id');
  });
});
