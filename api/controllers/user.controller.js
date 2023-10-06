const httpStatus = require('http-status')
const ApiResponse = require('../shared/ApiResponse')
const ApiError = require('../shared/ApiError')

let users = [
  {
    id: 1,
    firstname: 'Deepak',
    lastname: 'Bawa'
  },
  {
    id: 2,
    firstname: 'Kamal',
    lastname: 'Kishore'
  },
  {
    id: 3,
    firstname: 'Gagandeep',
    lastname: 'Bawa'
  }
]

const getUsers = async (req, res) => {
  try {
    setTimeout(() => {
      console.log("Delayed for 3 second.");
      res.send(new ApiResponse(
        httpStatus.OK,
        'get Users',
        users
      ))
    }, 3000);
  } catch (ex) {
    res.send(new ApiError(httpStatus.BAD_REQUEST, appErrors(ex)))
  }
}

const getUserById = async (req, res) => {
  try {
    const user = users.filter((user) => user.id == req.params.id)
    if(user.length < 1) {
      res.send(new ApiResponse(
        httpStatus.OK,
        'Invalid user id',
        user
      ))
    } else {
      res.send(new ApiResponse(
        httpStatus.OK,
        'get User By Id',
        user[0]
      ))
    }
  } catch (ex) {
    res.send(new ApiError(httpStatus.BAD_REQUEST, appErrors(ex)))
  }
}

const insertUser = async (req, res) => {
  try {
    const arrLength = users.length
    let newUserId
    if(arrLength > -1) {
      let lastIndx = arrLength - 1
      let lastId = users[lastIndx].id
      newUserId = lastId + 1
    } else {
      newUserId = 1
    }
    const user = {
      id: newUserId,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }
    users.push(user)
    res.send(new ApiResponse(
      httpStatus.OK,
      'User inserted',
      user
    ))
  } catch (ex) {
    res.send(new ApiError(httpStatus.BAD_REQUEST, appErrors(ex)))
  }
}

const updateUser = async (req, res) => {
  try {
    const userIndx = users.findIndex( x => x.id == req.params.id )
    let user = {}
    if(userIndx == -1) {
      res.send(new ApiResponse(
        httpStatus.OK,
        'Invalid user id',
        user
      ))
    } else {
      users[userIndx] = {
        id: req.params.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname
      }
      res.send(new ApiResponse(
        httpStatus.OK,
        'User Updated',
        users[userIndx]
      ))
    }
  } catch (ex) {
    res.send(new ApiError(httpStatus.BAD_REQUEST, appErrors(ex)))
  }
}

const deleteUser = async (req, res) => {
  try {
    const userIndx = users.findIndex( x => x.id == req.params.id )
    users.splice(userIndx, 1)
    res.send(new ApiResponse(
      httpStatus.OK,
      'User Deleted'
    ))
  } catch (ex) {
    res.send(new ApiError(httpStatus.BAD_REQUEST, appErrors(ex)))
  }
}

module.exports = {
  getUsers,
  getUserById,
  insertUser,
  updateUser,
  deleteUser
}
