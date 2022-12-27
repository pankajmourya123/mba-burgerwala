import express from "express";
import passport from "passport";
import {
 
  logout,
  myProfile
} from "../controllers/user.js";

const router = express.Router();
router.get(
    "/googlelogin",
    passport.authenticate("google", {
      scope: ["profile"],
    })
  );    // yeh wala request hote hi ggogle pe redirect ho 

  //yeh wala jab google se login ho jaye toh konse route pe rdirect hona chahiye
  router.get(
    "/login",
    passport.authenticate("google"),
    (req,res,next)=>{
    res.send("logged in")
    }
  );

  router.get("/me", myProfile );
  router.get("/logout", logout );
  
export default router;