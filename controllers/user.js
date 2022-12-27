export const myProfile = (req, res, next) => {
  console.log(req.user)
    res.status(200).json({
      success: true,
      user: req.user,
    
    });
  };


  export const logout = (req, res, next) => {
    req.session.destroy((err) => {
      if (err) return next(err);
      res.status(200).json({
        message: "Logged Out",
      });
    });
  };