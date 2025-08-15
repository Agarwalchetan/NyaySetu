const { alllawyers } = require("../controllers/alllawyer");
const { lawyerclient } = require("../controllers/lawyerclient");
const { lawyerdetails } = require("../controllers/lawyerdetails");
const { lawyer } = require("../controllers/lawyersignup");
const { lawyerlogin } = require("../controllers/lawyserlogin");
const {  userlogin } = require("../controllers/userlogin");
const { user } = require("../controllers/usersignup");


const express = require("express");
const route = express.Router();

route.post("/usersignup",user)
route.post("/lawyersignup",lawyer)
route.post("/userlogin",userlogin)
route.post("/lawyerlogin",lawyerlogin)
route.post("/lawyerdetails",lawyerdetails)
route.post("/lawyerclient",lawyerclient)
route.get("/alllawyers",alllawyers)
module.exports=route;
