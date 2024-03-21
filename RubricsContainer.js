import React from "react";

// import '../dashboard/pages.'
import Header from "../dashboard/components/Header";
import SideBar from "../dashboard/components/SideBar";
import RubricForm from "./RubricForm";
// import MainContainer from "../components/MainContainer";


const RubricsContainer = () => {
    return (
      <div className="grid-container">
        <Header/>
        <SideBar/>
        <RubricForm/>

      </div>
    );
  };
  
  export default RubricsContainer;