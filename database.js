const mysql = require("mysql");
const config = require("./config").database;

var db;

function DatabaseConnection() {
    if (!db) {
        db = mysql.createConnection(config);
        db.connect( (error) => {
            if (error) {
                throw error;
            }
            console.log("MySQL Connection Created");
        })
    }
    return db
}

module.exports = DatabaseConnection();