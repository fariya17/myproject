const express = require("express");
const router = express.Router();

require("../db/conn");

const Register = require("../models/registerSchema");

router.get("/", async (req, res) => {
  const users = await Register.find();
  res.send(users);
});

router.post("/authenticate", async (req,res)=>{
    const user = await Register.find({email: req.body.email, password: req.body.password});
    if(user.length){
        res.send(user);
    }else{
        res.send();
    }
})

router.post("/", async (req, res) => {
  const { userName, email, password, confirmPassword, mobile, role } = req.body;

  if (!userName || !email || !password || !confirmPassword || !mobile) {
    return res.status(422).json({ error: "Plz fill the field property" });
  }

  try {
    const userExist = await Register.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exists" });
    }

    const user = new Register({
      userName,
      email,
      password,
      confirmPassword,
      mobile,
      role
    });

    await user.save();
    return res.status(201).json({ messege: "Registration successful" });
  } catch (err) {
    console.log(err);
  }

  // console.log(req.body);
  // res.send("PAGE");
});

module.exports = router;
