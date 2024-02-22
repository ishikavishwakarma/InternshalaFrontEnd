import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "../components/Home";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import Signin from "../components/Signin";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentStudent } from "../store/Actions/studentActions";
import Interships from "../components/Interships";
import Jobs from "../components/Jobs";
import EmployeSignup from "../components/EmployeSignup";
import { asynccurrentEmploye } from "../store/Actions/employeActions";
import EmployeProfile from "../components/EmployeProfile";
import EmployeLogin from "../components/EmployeLogin";
import ResumeComponent from "../components/ResumeComponent";
import EditStudentProfile from "../components/EditStudentProfile";
import EditEmploye from "../components/EditEmploye";
import SingleJob from "../components/SingleJob";
import SingleInternships from "../components/SingleInternships";
import ForgotStudent from "../components/ForgotStudent";
import StudentPassword from "../components/StudentPassword";

const Routing = () => {
  const { isAuth, student } = useSelector((state) => state.student);
  const { isAuths, employe } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  return  (
    <div>
      <Routes>
        
      <Route path="/" element={!isAuth && !isAuths && <Home/> || isAuth && <Profile/> || isAuths && <EmployeProfile/>}  />
  {/* <Route path="/" element={!isAuths ? <Home /> : <EmployeProfile />}  /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Profile/>} /> */}
        <Route path="/employe/internship/read" element={<Interships />} />
        <Route path="/employe/job/read" element={<Jobs />} />
        <Route path="/student/signup" element={<Signup />} />
        <Route path="/employe/signup" element={<EmployeSignup />} />
        <Route path="student/signin" element={<Signin />} />
        <Route path="/employe/signin" element={<EmployeLogin />} />
        <Route path="/resume" element={<ResumeComponent />} />
        <Route path="/student/update/:student_id" element={<EditStudentProfile />} />
        <Route path="/employe/update/:employe_id" element={<EditEmploye />} />
        <Route path="/employe/job/read/:id" element={<SingleJob />} />
        <Route path="/employe/internship/read/:id" element={<SingleInternships />} />
        <Route path="/student/forgot" element={<ForgotStudent />} />
        <Route path="/student/forget-link/:id" element={<StudentPassword />} />
      </Routes>
    </div>
  )
};

export default Routing;
