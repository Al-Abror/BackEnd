const { User } = require('../models')

class AdminController {

  static async getUsers(req, res) {
    try {
      const { role } = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const userData = await User.findAll({raw : true})
      res.status(200).json(userData)
    } catch (error) {
      res.status(500).json({msg : "internal server error"})  
    }
  }

  static async getUserById(req, res) {
    try {
      const userData = await User.findOne({
        where: {
          id: req.params.id
        },
        raw: true
      }).then(result => {
        res.status(200).json(userData)
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async addUser(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const newUser = await req.body;
      User.create(newUser)
      .then(result => {
        res.status(201).json({
          message : "User added",
          result
        })
    })    
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async updateUser(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
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

  static async deleteUser(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const userId = req.params.id
      User.destroy({
        where: {
          id : userId
        }
      }).then(result => {
        res.status(201).json({
          message : "user deleted",
          result
        })
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = AdminController