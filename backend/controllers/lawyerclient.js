const Lawyerclients = require("../models/lawyerclients");

module.exports.lawyerclient = async (req, res) => {
  try {
    const { lawyer,client,caseType,date,status } =
      req.body;
    const data = await Lawyerclients.create({
      lawyer,client,caseType,date,status
    });
    if(!data) return res.json({ status: false, message:"Request fails"});
    return res.json({ status: true, data});
  } catch (error) {
    console.log(error);
    
    return res.json({ error: error, status: false });
  }
};


