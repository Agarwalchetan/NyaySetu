import React,{useEffect,useState} from 'react';
import { Users } from 'lucide-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LawyerCard from "./lawyercard";
const FindLawyer = () => {




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






  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <Users className="mx-auto h-12 w-12 text-indigo-600" />
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Find a Lawyer
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Connect with verified legal experts for personalized consultations
        </p>
      </div>
      {/* Placeholder for lawyer listing */}
      {/* <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-600">Lawyer directory coming soon...</p>
      </div> */}



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










    </div>
  );
};

export default FindLawyer;