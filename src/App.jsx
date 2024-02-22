import React, { useEffect } from 'react'
import Routing from './utils/Routing'
import Nav from './components/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { asynccurrentStudent } from './store/Actions/studentActions';
import { asynccurrentEmploye } from './store/Actions/employeActions';
import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
const locomotiveScroll = new LocomotiveScroll();
const { student, isAuth} = useSelector((state)=>state.student)
const { employe, isAuths} = useSelector((state)=>state.employee)
 
  const dispatch = useDispatch();
  

  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(asynccurrentStudent());
  //   }
  //   if (isAuths) {
  //     dispatch(asynccurrentEmploye());
  //   }
  // }, [dispatch, isAuth, isAuths]);
  
useEffect(()=>{
    dispatch(asynccurrentStudent());
    // dispatch(asynccurrentEmploye());

},[])
return (
    <div className='bg-transparent'>

        <Routing />
       
    </div>
)
}

export default App