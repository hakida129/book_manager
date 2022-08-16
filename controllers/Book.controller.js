const BookModel = require('../models/Book.model')

const getAllBook = async (req, res) => {
  try {
    const allBook = await BookModel.find({})
    res.status(200).json({ allBook})
  } catch (error) {
    res.status(500).json({ error})
  }
}

const addBook = async (req, res) => {
  try {
    const book = new BookModel({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price
    })
    const result = await book.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error})
  }
}

const getOneBook = async (req, res) => {
  try {
    const id = req.params.bookId
    const book = await BookModel.findById( id)
    res.status(200).json({ book})
  } catch (error) {
    res.status(500).json({ error})
  }
}

const updateBook = async (req, res) => {
  try {
    const id = req.params.bookId
    const updateData = req.body
    const result = await BookModel.findByIdAndUpdate(id, updateData)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error})
  }
}


const deleteBook = async (req, res) => {
  try {
    const id = req.params.bookId
    const data = await BookModel.findByIdAndDelete(id)
    res.status(200).send(`Book name ${data.title} has been deleted`)
  } catch (error) {
    res.status(500).json({ error})
  }
}

module.exports = { getAllBook, addBook, getOneBook, updateBook, deleteBook}
