import React from "react";
import './MainContainer.css'

import { FaListAlt, FaClipboardCheck, FaPoll } from 'react-icons/fa';



const SideBar = () => {
    return (
        <aside id="sidebar">
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <img src="./favicon.png" alt="My Icon" />
                        <span>Toolkit for Educators</span>
                    </div>

                </div>

                <ul class="sidebar-list">
                    <li class="sidebar-list-item">
                        <a href="#" target="_blank">
                            <FaListAlt /> Rubrics
                        </a>
                    </li>

                    <li class="sidebar-list-item">
                        <a href="#" target="_blank">
                            <FaClipboardCheck /> Assessment
                        </a>
                    </li>

                    <li class="sidebar-list-item">
                        <a href="#" target="_blank">
                            <FaPoll /> Result
                        </a>
                    </li>
    
                </ul>
        </aside>

    );
};

export default SideBar;