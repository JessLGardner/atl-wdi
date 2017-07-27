//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create your donut schema:
const DonutSchema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    quantity: Number
});

//export your donut with module.exports()
module.exports = DonutSchema;