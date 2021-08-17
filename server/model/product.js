const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  // author: ObjectId,
  name: { type:String, required: true, max:[60, '最大６０文字までです。']},
  price: Number,
  description:String,
  img:String,
  detail_img:String,
  heading1:String,
  heading2:String,
  heading3:String,
  heading_text1:String,
  heading_text2:String,
  heading_text3:String,
})

module.exports = mongoose.model('Product',ProductSchema)