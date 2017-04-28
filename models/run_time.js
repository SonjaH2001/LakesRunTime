var mongoose = require('mongoose');//require mongoose schema

// represents a lake and run time
var lakeSchema = new mongoose.Schema({
    lake_name: String,  //name of the lake
    course_description: String, //difficulty level of course
    course_distance: Number,    //distance around the lake
    run_date: Date, //date the lake was run
    run_time: number    //duration of lake run
});

var Lake = mongoose.model('Lake', lakeSchema);//object and structure

module.exports = Lake;//other files can see it