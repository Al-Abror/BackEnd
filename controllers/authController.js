const accessTokenSecret = 'youraccesstokensecret';
const { User } = require('../models')
const jwt = require("jsonwebtoken")

class AuthController {
  static async authenticationJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }
  
  static async loginUser(req, res) {
    try {
      const {email, password} = await req.body;
      const user = User.find(u => u.email === email && u.password === password)
      if(user){
        const token = jwt.sign({email: user.email, role: user.role}, accessTokenSecret)
        res.json({token})
      } else {
        res.send("Username or password incorrect")
      }     
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = AuthController