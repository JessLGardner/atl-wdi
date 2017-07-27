//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create your donut schema:
const DonutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

//export your donut with module.exports()
const DonutModel = mongoose.model("Donut", DonutSchema);

// module.exports = DonutSchema;



// var DonutModel = mongoose.model("Donut", DonutSchema);

module.exports = DonutModel;