const { User } = require('../models')

class UserController {
  static async registerUser(req, res) {
    try {
      const newUser = await req.body;
      User.create(newUser)
      .then(result => {
        res.status(201).json({
          message : "Register success",
          result
        })
    })    
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async updateUser(req, res) {
    try {
      const userId = req.params.id
      const updateUser = req.body
      User.update(updateUser, {
        where : {
          id : userId
        }
      }).then(result => {
        res.status(201).json({
          message : "user updated",
          result
        })
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = UserController