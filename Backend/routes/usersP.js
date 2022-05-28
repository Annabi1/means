const express = require('express');
const router = express.Router();
const Task = require('../model/UserP');
auth=require("../middleware/auth")
const _ = require('lodash');
router.post("/create",auth,(req,res,next)=>
{
const user = new Task({
  fullName: req.body.fullName,
  remarques: req.body.remarques,
  cin: req.body.cin,
  adress: req.body.adress,
  contact: req.body.contact,
  owner:req.body.owner
});
user.save((err, task) => {
  if (err) {
    // throw err;
    return res.send({
      success: false,
      message: 'Error while saving, pelase try again'
    });
  }

  return res.send({
    success: true,
    message: 'User Saved',
    task
  });

});
})
router.get('/list',(req, res, next) => {
  Task.find((err, users)=>{
if(err)
{
  return res.send({
    success: false,
   message:"any"
  });
}
return res.status(200).json(users);
})
});
//Delete Task
router.delete('/remove/:id',auth, (req, res, next) => {

  //TODO: Validate if the the task belongs to the person deleting it (check owner)

  const userId = req.params.id;
  Task.remove({ _id: userId }, (err) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Failed to delete the user'
        });
      }

      return res.send({
        success: true,
        message: 'User deleted'
      });
  });
});
router.put('/updateP',(req, res, next) => {
  Task.findOneAndUpdate({ id: req.params._id }, req.body, { new: true})
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'User not found' }))})

module.exports = router;
