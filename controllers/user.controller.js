const { User } = require('../models')

class UserController {
  static async registerUser(req, res) {
    try {
      const userData = await req.body;
      const newUser = new User(userData)
      await newUser.save()
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
      const { role } = req.user
      switch(role) {
        case 'user':
          const opt = {
            new : true
          }
          await User.findOneAndUpdate(req.params.id, req.body, opt)
          res.status(201).json({
            message : "user updated"
          })
          break;
        case 'admin':
          res.sendStatus(403);
          break;
        default:
          res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = UserController