const UserModel = require('../models/User.model')

const getAllUser = async (req, res) => {
  try {
    const allUser = await UserModel.find({})
    res.status(200).json({ allUser})
  } catch (error) {
    res.status(500).json({ error})
  }

}

const addUser = async (req, res) => {
  try {
    const user = new UserModel({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender
    })
    const result = await user.save()
    res.status(200).json({ result})
  } catch (error) {
    res.status(500).json({ error})
  }
}

const getUser = async (req, res) => {
  try {
    const data = await UserModel.findById(req.params.userId)
    res.status(200).json({ data})
  } catch (error) {
    res.status(500).json({ error})
  }
}

const updateUser = async (req, res) => {
  try {
    const id = req.params.userId
    const updatedData = req.body
    const result = await UserModel.findByIdAndUpdate( id, updatedData)
    res.status(200).json({ result})
  } catch (error) {
    res.status(500).json({ error})
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.userId
    const data = await UserModel.findByIdAndDelete( id)
    res.status(200).send(` User name ${data.username} has been deleted...`)
  } catch (error) {
    res.status(500).json({ error})
  }
}
module.exports = { getAllUser, addUser, getUser, updateUser, deleteUser };
