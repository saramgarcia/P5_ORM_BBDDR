const config = {};

// Database info
config.database  = {
    host:     'localhost',
    password: process.env.MYSQL_PASS,
    username: process.env.MYSQL_USER,
    database: 'orm_bbdd',
    dialect:  'mysql',
    port:     3306
};

module.exports = config;