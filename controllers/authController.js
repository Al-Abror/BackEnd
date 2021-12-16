const accessTokenSecret = 'youraccesstokensecret';

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
}

module.exports = AuthController