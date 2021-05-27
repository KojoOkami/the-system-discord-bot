const rawData = require('./data/users.json');
const fs = require('fs');

class UserManager {

  users;

  constructor() {
    this.users = {};
    setInterval(this.saveUsers, 900000)
  }

  loadUsers = () => {
    Object.keys(rawData).forEach((userID) => {
      this.users[userID] = new User(userID, rawData[userID]);
    });
  }

  saveUsers = () => {
    let rawUsers = {}
    Object.keys(this.users).forEach(userID => {
      rawUsers[userID] = this.users[userID].print();
    });
    fs.writeFileSync('../data/users.json', JSON.stringify(rawUsers))
  }

}

class User {

  id;
  name;
  influence;

  constructor(id, rawUser) {
    this.id = id;
    this.name = rawUser.name;
    this.influence = rawUser.influence;
  }

  setName = (name) => {
    this.name = name;
  }

  getName = () => {
    return this.name
  }

  setInfluence = (influence) => {
    this.influence = influence;
  }

  getInfluence = () => {
    return this.influence;
  }

  print = () => {
    return {
      name: this.name,
      influence: this.influence
    }
  }
}

module.exports = UserManager;