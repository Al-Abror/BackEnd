const  Webinar = require('../models')

class WebinarController {

  static async getWebinar(req, res) {
    try {
      const webinarData = await Webinar.findAll({raw : true})
      return res.status(200).json(webinarData)
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async getWebinarById(req, res) {
    try {
      const webinarData = await Webinar.findOne({
        where: {
          id: req.params.id
        },
        raw : true
      }).then(result => {
        res.status(200).json(webinarData)
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async postWebinar(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const newWebinar = await req.body;
      Webinar.create(newWebinar)
      .then(result => {
        res.status(201).json({
          message : "webinar created",
          result
        })
    })    
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async updateWebinar(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const webinarId = req.params.id
      const updateWebinar = req.body
      Webinar.update(updateWebinar, {
        where : {
          id : webinarId
        }
      }).then(result => {
        res.status(201).json({
          message : "webinar updated",
          result
        })
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async deleteWebinar(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const webinarId = req.params.id
      Webinar.destroy({
        where: {
          id : webinarId
        }
      }).then(result => {
        res.status(201).json({
          message : "webinar deleted",
          result
        })
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = WebinarController