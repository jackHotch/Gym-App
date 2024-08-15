const mysql = require("mysql2");
const fs = require("fs");
const { parse } = require("csv-parse");

let rows = []

fs.createReadStream("weight.csv")
    .pipe(parse({ delimiter: ",", from_line: 2}))
    .on("data", function (row) {
        let newRow = []

        newRow.push(row[1])
        newRow.push(row[2])
        rows.push(newRow)
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

    for (let i = 0; i < rows.length; i++) {
        con.query("insert into `weight` (`weight`, `date`) values (?, ?)", rows[i], (err, results, field) => {
            if (err) { 
                console.log("Unable to insert item at row ", i + 1); 
                return console.log(err); 
            }
        })
    }
    console.log('All done')
}