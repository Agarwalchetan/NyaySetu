const Lawyer = require("../models/lawyer");
module.exports.lawyerdetails = async (req, res) => {


  try {
    const {
        email,
        registrationNumber,
        yearofExperience,
        contactNo,
        officeAddress,
        lawFirm,
        currentPosition,
        practiceAreas,
        Education,
      } = req.body; // Get data from frontend
console.log(   email,
    registrationNumber,
    yearofExperience,
    contactNo,
    officeAddress,
    lawFirm,
    currentPosition,
    practiceAreas,
    Education,);

    const updatedUser = await Lawyer.findOneAndUpdate(
       { email}, // User ID from URL
        { registrationNumber,
        yearofExperience,
        contactNo,
        officeAddress,
        lawFirm,
        currentPosition,
        practiceAreas,
        Education,}, // Fields to update
        { new: true, runValidators: true } // Return updated user, run validation
    );
    console.log(updatedUser);
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found",status:false });
    }
 

    return res.json({ message: "Deatils updated ",status:true }); // Send updated user data
} catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Error updating user", error });
}


};
