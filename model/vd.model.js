const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
    stt:Number,
    ques: String,
    point: Number
});
const vds = mongoose.model("vd", exerciseSchema);
module.exports = vds;