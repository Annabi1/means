const express = require("express")
const User = require("../model/User")
const app=express()
const router=express.Router()
const user=require("../model/User")
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs')

//login

router.post('/login',(req,res,next)=>
{
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
      .then(u => {
          if (!u) {
            return res.send({
              success:false,
              message:'account not found ',

            });
          }
          loadedUser = u;
          return bcrypt.compare(password, loadedUser.password)
      })
      .then(isEqual => {
          if (!isEqual) {
            return res.send({
              success:false,
              message:'wrong password ',

            });
          }
        const one_week=604800;
        const token =jwt.sign({loadedUser},process.env.SECRET,{expiresIn:one_week})

          return res.send({
            success:true,
            message:'success login ',
            loadedUser,
            token: token

          });



      })
      .catch(err => {
          console.log(err);
          next();
      })})


//register
router.post('/register',(req,res,next)=>
{User.find({ email: req.body.email })
.exec()
.then(user => {
  if (user.length >= 1) {
    return res.send({
      success:false,
      message:'existed ',

    });
  } else {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.send({
          message:err,

        });
      } else {
        const user = new User({
         name:req.body.name,
          email: req.body.email,
          password: hash
        });
        user
          .save()
          .then(result => {
            console.log(result);
            return res.send({
              success:true,
              message:'account created',

            });
          })
          .catch(err => {
            console.log(err);
            return res.send({
              message:err,

            });
          });
      }
    });
  }
});
});

module.exports = router
