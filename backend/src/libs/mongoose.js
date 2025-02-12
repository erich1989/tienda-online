const mongoose = require('mongoose');

const user = process.env.USER_DB_MONGO;
const password = process.env.PASSWORD_DB_MONGO;
const dbname = process.env.NAME_CONTAINER_DB_MONGO;

// const uri = `mongodb+srv://erickmartinezsoto:${password}@cluster0.qn7dqnb.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// const uri = `mongodb+srv://${dbname}:${password}@cluster0.jdxtg.mongodb.net/`;
const uri = `mongodb+srv://${user}:${password}@cluster0.jdxtg.mongodb.net/${dbname}?retryWrites=true&w=majority`;


mongoose.Promise = global.Promise;

async function connectionMg() {
  await mongoose.connect(uri);
  console.log('Mongo db connection correctly established')
}

module.exports = connectionMg;