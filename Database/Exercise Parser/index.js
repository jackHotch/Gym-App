const mysql = require("mysql2");
const fs = require("fs");
const { parse } = require("csv-parse");

const rows = new Set()

fs.createReadStream("strong.csv")
    .pipe(parse({ delimiter: ",", from_line: 2}))
    .on("data", function (row) {
        
        rows.add(row[3])
    })
    .on("error", function (error) {
        console.log(error.message);
      })
      .on("end", function () {
        insertIntoMySql(rows)
        console.log("finished parsing");
      });


function insertIntoMySql(rows) {
    let con = mysql.createConnection({ 
        host: '127.0.0.1', 
        user: 'root', 
        password: '12345', 
        database: 'gym_app', 
    });

    for (const name of rows) {
        con.query("insert into `exercises` (`name`) values (?)", [name], (err, results, field) => {
            if (err) { 
                console.log("Unable to insert item at row "); 
                return console.log(err); 
            }
        })
    }
    console.log('All done')
}