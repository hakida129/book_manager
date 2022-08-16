const express = require('express')
const router = express.Router()
const { getAllBook, addBook, getOneBook, updateBook, deleteBook} = require('../controllers/Book.controller')

router.get('/', getAllBook)
router.post('/addBook', addBook)
router.get('/:bookId', getOneBook)
router.patch('/:bookId', updateBook)
router.delete('/:bookId', deleteBook)

module.exports = router
