import React from 'react';

import Login from './login/pages/Login';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PrivateRoutes from './action/PrivateRoutes';
import {toast,ToastContainer} from 'react-toastify';

import Dashboard from './dashboard/pages/Dashboard';
import Signup from './signup/pages/Signup';
import RubricsContainer from './rubrics/RubricsContainer';
import ViewRubrics from './rubrics/ViewRubrics';

const App = () => {
  return (<Router>
    <Routes>
      
      <Route path="/" exact element={<Login />}/>

      <Route path="/signup" element = {<Signup/>}/>


      <Route element={<PrivateRoutes/>}>
        <Route path="/dashboard" exact element = {<Dashboard/>}/>
        <Route path="/rubrics" exact element = {<RubricsContainer/>}/>
        <Route path="/rubrics/view" exact element = {<ViewRubrics/>}/>

      </Route>

    </Routes>

  </Router>
  );

};

export default App;
