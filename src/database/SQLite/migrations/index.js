const sqliteConnection = require("../../SQLite")

const createUsers = require("./createUsers")

async function migrationsrun(){
  const schemas = [
    createUsers
  ].join('')

  sqliteConnection().then(db => db.exec(schemas)).catch(error => console.error(error))
}

module.exports = migrationsrun