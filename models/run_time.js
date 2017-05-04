var mongoose = require('mongoose');//require mongoose schema

// represents a lake and run time
var lakeSchema = new mongoose.Schema({
    name: String,  //name of the lake
    description: String, //difficulty level of course
    distance: Number,    //distance around the lake
    run_date: Date, //date the lake was run
    run_time: Number    //duration of lake run
});

var Lake = mongoose.model('Lake', lakeSchema);//object and structure

module.exports = Lake;//other files can see it