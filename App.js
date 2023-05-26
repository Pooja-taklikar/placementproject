import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './assets/css/style.css';
import './assets/css/font-awesome.min.css';
import './assets/css/line-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";
import './assets/css/select2.min.css';
import "./assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css";
import "./assets/css/bootstrap-datetimepicker.min.css";
import './assets/css/style.css';
import Navbar from './components/Navbar';
// import Home1 from './pages/Home1';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home2 from './pages/Home2';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// import Home1 from './pages/users';
import About from './pages/About';
// import Users from './pages/users';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthContext';
import Users from './pages/users';
import Student_gallery from './pages/Student_gallery';
function App() {
  return (
   <>
     <AuthProvider>
   <Router>

   <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/home1" element={
          <PrivateRoute>
            <Users/>
          </PrivateRoute>} />
          <Route exact path="/" element={<Home2/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/contact" element={<Contact/>} />
          {/* <Route exact path="/job_portal">
            <Job_portal/>
            </Route> */}
          <Route exact path="/Stu_gallery" element={<Student_gallery/>}/>
            
          
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Registration/>} />
        </Routes>
   </Router>
          </AuthProvider>
    
     {/* <Navbar/> */}
     {/* <Home1/> */}
     {/* <Users/> */}
     {/* <Login/>          */}
     {/* <Registration/> */}
     {/* <Footer/> */}
     {/* <Home2/> */}
     {/* <About/> */}
     
   </>
  );
}

export default App;
