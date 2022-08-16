const express = require('express')
const router = express.Router()
const { getAllUser, addUser, getUser, updateUser, deleteUser} = require('../controllers/User.controller')

router.get('/', getAllUser)
router.post('/addUser', addUser)
router.get('/:userId', getUser)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)

module.exports = router