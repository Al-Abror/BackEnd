const { Artikel } = require('../models')

class ArtikelController {

  static async getArtikel(req, res) {
    try {
      const artikelData = await Artikel.findAll()
      return res.status(200).json(artikelData)
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async getArtikelById(req, res) {
    try {
      const artikelData = await Artikel.findOne({
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.status(200).json(artikelData)
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async postArtikel(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const newArtikel = await req.body;
      Artikel.create(newArtikel)
      .then(result => {
        res.status(201).json({
          message : "artikel created",
          result
        })
    })    
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async updateArtikel(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const artikelId = req.params.id
      const updateArtikel = req.body
      Artikel.update(updateArtikel, {
        where : {
          id : artikelId
        }
      }).then(result => {
        res.status(201).json({
          message : "artikel updated",
          result
        })
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async deleteArtikel(req, res) {
    try {
      const {role} = req.user
      if (role !== 'admin') {
        return res.sendStatus(403);
      }
      const artikelId = req.params.id
      Artikel.destroy({
        where: {
          id : artikelId
        }
      }).then(result => {
        res.status(201).json({
          message : "artikel deleted",
          result
        })
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = ArtikelController