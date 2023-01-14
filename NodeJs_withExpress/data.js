const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/data');
const productSchema = new mongoose.Schema({
    id:Number,
    is_boosted:String,
    title:String,
    place_of_origin:String,
    dimensions:String,
    medium_display:String,
    updated_at:String,
    timestamp:String

});

module.exports=mongoose.model('details',productSchema)