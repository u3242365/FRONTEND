import React from "react";

import './Dashboard.css'
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MainContainer from "../components/MainContainer";


const Dashboard = () => {
    return (
      <div className="grid-container">
        <Header/>
        <SideBar/>
        <MainContainer/>
            
      </div>
    );
  };
  
  export default Dashboard;