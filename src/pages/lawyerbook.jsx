import React, { useEffect, useState } from "react";
import axios from "axios";
import LawyerCard from "./lawyercard";

const Lawyerbook = () => {

  const [lawyer, setlawyer] = useState([]);
 


  async function curr() {
    const data = await axios.get(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/alllawyers`
          : `/api/alllawyers`
      }`
    );
    //  console.log(data.data.lawyer);
  setlawyer(data.data.lawyer)
  }
  useEffect(() => {
    curr();
  }, []);

  //  console.log(lawyer);
  return (
    <>
      {lawyer.map((prop,index) => (
        <LawyerCard
        key={index}
        id={prop.
          _id
          }
          name={prop.name}
          field={prop.practiceAreas}
          experience={prop.yearofExperience}
          lawfirm={prop.lawFirm}
          contact={prop.contactNo}
          email={prop.email}
          officeaddress={prop.officeAddress}
        ></LawyerCard>
      ))}
    </>
  );
};

export default Lawyerbook;
