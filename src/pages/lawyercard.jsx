import React from "react";
import style from "./lawyerbook.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const LawyerCard = (props) => {
    const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme:"colored",
  };
  const handleSubmit=async(props)=>{
    const client= JSON.parse(localStorage.getItem("user"))
    if (!client) {
      navigate("/signup")
    }
    console.log(client);
    
const clientId=client._id;
 console.log(clientId);

   
    
    const data  = await axios.post(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/lawyerclient`
          : `/api/lawyerclient`
      }`,
      {
        lawyer:props._id,client:clientId,caseType:props.field,date:Date.now(),status:"Pending"
      }
    );
    console.log(data);
    if (data) {
   toast.success("Request successfully created", toastOptions);
      
    }
    
  }


  return (
  <div className={style.main}>
        <div className={style.card}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sXNRtQJzxdJIaOd9lhnGoN0CpVVw2r7UTQ&s" alt="lawyer"></img>
          <h3>{props.name}</h3>
          <div className={style.container}>
            <div className={style.left}>
              <p>{props.field}</p>
              <p>{props.experience}</p>
              <p>{props.lawfirm}</p>
              </div>
              <div className={style.right}>
                <p>{props.contact}</p>
                <p>{props.email}</p>
                <p>{props.officeaddress}</p>
              </div>
            
          </div>
          <button onClick={()=>handleSubmit(props)}>Book Appointment</button>
        </div>
           <ToastContainer />
      </div>
  );
};

export default LawyerCard;
