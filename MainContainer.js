import React from "react";

import './MainContainer.css'
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import { FaListAlt, FaClipboardCheck, FaPoll } from 'react-icons/fa';
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, AreaChart, Area } from 'recharts';

const barChartData = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 15 },
    // Add more data points as needed
  ];

  const areaChartData = [
    { month: 'Jan', sales: 100 },
    { month: 'Feb', sales: 200 },
    { month: 'Mar', sales: 150 },
    // Add more data points as needed
  ];

const MainContainer = () => {
    return (
        <main class="dashboard-main-container">
          <div className="dashboard-header">
            <div className="main-title">
                <p class="font-weight-bold">DASHBOARD</p>
            </div>
            <div className="add-new-button">
                <button>Create new</button>

            </div>

          </div>
        

        <div class="main-cards">

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">TOTAL RUBRICS</p>
                <FaListAlt/>
               
            </div>
            <span class="text-primary font-weight-bold">12</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">TOTAL SUBJECTS</p>
                <FaBookOpen/>
            </div>
            <span class="text-primary font-weight-bold">3</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">TOTAL STAFF</p>
                <FaChalkboardTeacher/>
            </div>
            <span class="text-primary font-weight-bold">35</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">TOTAL STUDENTS</p>
              <FaUserGraduate/>
            </div>
            <span class="text-primary font-weight-bold">56</span>
          </div>

        </div>

        <div class="charts">

          <div class="charts-card">
            <p class="chart-title">Dummy Graph</p>
            <BarChart width={400} height={300} data={barChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#3d8778" />
            </BarChart>
          </div>

          <div class="charts-card">
            <p class="chart-title">Dummy Graph</p>
            <AreaChart width={400} height={300} data={areaChartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Area type="monotone" dataKey="sales" fill="#3d8778" />
            </AreaChart>
          </div>

        </div>
      </main>
    );
};

export default MainContainer;