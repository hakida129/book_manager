const mongoose = require('mongoose')

const BookSchema = mongoose.Schema ({
  title: { type: String, required: true},
  description: { type: String, required: true},
  price: { type: Number, required: true}
})

module.exports = mongoose.model('Book', BookSchema)
