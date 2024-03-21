import React from "react";
import './MainContainer.css'
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import { FaListAlt, FaClipboardCheck, FaPoll } from 'react-icons/fa';
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher ,FaSignOutAlt} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { BarChart, Bar, XAxis, YAxis, AreaChart, Area } from 'recharts';
const Header = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();
   
    const {auth} = useSelector((state) => ({...state}));

    const logout = () =>{
        dispatch({
            type:'LOGOUT',
            payload:null,
        });
        window.localStorage.removeItem('auth');
        navigate('/');

    }

    return (
        <header class="header">
                <div class="menu-icon" onclick="openSidebar()">
                <FaBars/>
                </div>
                <div class="header-left">
                <FaSearch/>
                </div>
                <div class="header-right">
                <FaUser/>
                {auth && (<a onClick={logout} className="logout-button"><FaSignOutAlt/></a>)}
                
                </div>

            </header>
    );
};

export default Header;