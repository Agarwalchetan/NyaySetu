import React,{useEffect} from 'react';
import { Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const FindLawyer = () => {



const navigate=useNavigate();



  async function fun() {
    if (!localStorage.getItem("user")) {
      navigate("/signup");
    } 
  }

  useEffect(() => {
    fun();
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
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-600">Lawyer directory coming soon...</p>
      </div>
    </div>
  );
};

export default FindLawyer;