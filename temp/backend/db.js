const db = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "myDb",
    'port': 3307,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "myDb",
    'port': 3306,
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "myDb",
    'port': 3306,
    "host": "localhost",
    "dialect": "mysql"
  }
}

module.exports = db;