const mysql = require('mysql');
const config = require('./sqlConfig');

function connectDb() {
    var connectDb = mysql.createConnection(config);
};

module.exports = {
    connectDb: connectDb,
}
