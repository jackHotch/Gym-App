const mysql = require("mysql2");
const fs = require("fs");
const { parse } = require("csv-parse");

let rows = []

fs.createReadStream("strong.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    let newRow = []

    let date = row[0].substring(0, 10)
    let startTime = row[0].substring(11, 19)

    newRow.push(date)
    newRow.push(startTime)
    newRow.push(row[1])
    newRow.push(row[2])
    newRow.push(row[3])

    newRow.push(parseInt(row[4]))
    newRow.push(parseFloat(row[5]))
    newRow.push(parseInt(row[6]))
    newRow.push(parseInt(row[7]))
    newRow.push(parseInt(row[8]))
    newRow.push(row[9])
    newRow.push(row[10])
    if (row[11])
        row[11] = parseFloat(row[11])
    newRow.push(row[11])
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
        con.query("insert into `workouts` (`Date`, `Start Time`, `Workout Number`, `Duration`, `Exercise Name`, `Set Order`, `Weight`, `Reps`, `Distance`, `Seconds`, `Notes`, `Workout Notes`, `RPE`) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", rows[i], (err, results, field) => {
            if (err) { 
                console.log("Unable to insert item at row ", i + 1); 
                return console.log(err); 
            }
        })
    }
    console.log("all done")
}






/*const csvtojson = require('csvtojson'); 
const mysql = require("mysql2"); 

let con = mysql.createConnection({ 
    host: '127.0.0.1', 
    user: 'root', 
    password: '12345', 
    database: 'gym_app', 
});

con.connect((err) => { 
    if (err) return console.error( 
            'error: ' + err.message); 
    })


const filename = 'strong.csv'

csvtojson().fromFile(filename).then(source => {
    for (var i = 0; i < source.length; i++) {
        var Date = source[i]["Date"],
            WorkoutName = source[i]["Workout Name"],
            Duration = source[i]["Duration"],
            ExerciseName = source[i]["Exercise Name"],
            SetOrder = source[i]["Set Order"],
            Weight = source[i]["Weight"],
            Reps = source[i]["Reps"],
            Distance = source[i]["Distance"],
            Seconds = source[i]["Seconds"],
            Notes = source[i]["Notes"],
            WorkoutNotes = source[i]["Workout Notes"],
            RPE = source[i]["RPE"]

        var insertStatement = `INSERT INTO workouts (Date, Workout Name, Duration, Exercise Name, Set Order, Weight, Reps, Distance, Seconds, Notes, Workout Notes, RPE) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        var items = [Date, WorkoutName, Duration, ExerciseName, SetOrder, Weight, Reps, Distance, Seconds, Notes, WorkoutNotes, RPE]

        con.query(insertStatement, items, (err, results, fields) => {
            if (err) {
                console.log("Unable to insert item at row ", i + 1)
                return console.log(err)
            }
        })
    }
    console.log("All items stored into database succesfully")

})*/