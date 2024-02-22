import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncStudentjob } from '../store/Actions/studentActions';
import { motion,useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const ReadAllJob = () => {
    const { job} = useSelector((state) => state.student);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0.2, 1], ["10%", "-65%"]);
      const dispatch = useDispatch();
      useEffect(() => {
          // dispatch(asyncreadInternship());
          dispatch(asyncStudentjob());
       
        }, []);
  return (
    <div className='h-[300vh]'>
        <div className="div h-[8.5vh] fixed bg-white w-full"></div>
        <div className="img h-[100vh] pt-[7vh]  pl-[4vw] w-full bg-black ">
              <div className=" mt-[16vh]  flex flex-col items-start  head">
                <h1 className="  text-white pb-3 text-7xl font-[700]">
                  Discover Your Dream Job
                </h1>
                <h1 className="  text-zinc-600 text-5xl font-[600]">
                  Unlock Jobs Success with Us!
                </h1>

                <h3 className="  text-white text-start w-[30vw] pt-[3vw] text-xl font-[100]">
                  Embark on your professional journey by seamlessly applying for
                  transformative jobs with our expert guidance and curated
                  resources.
                </h3>
                <h3 className="  text-white px-4 py-1 rounded-lg mt-[4vw] text-2xl border font-[100]">
                  Your Growth Partner
                </h3>
              </div>
              <div className="image1 flex justify-end items-center px-[6vw] -mt-[15vw]">
                <div
                  data-framer-background-image-wrapper="true"
                  className="img2 h-[50vh] w-[56vh] "
                >
                  <img
                    src="https://framerusercontent.com/images/uojAWLm1FnK0nG6eUDQvr0L7SIo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div  className=" div">
    <section ref={targetRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 flex h-screen duration-200 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
        
          
          
                {job &&
                  job.map((internship) => (
                    <div
                      key={internship._id}
                      className="card card group relative  h-[21vw] flex flex-col px-[1.5vw] py-[1.5vw] rounded-lg w-[28vw] bg-zinc-100 "
                    >
                      <div className="head ">
                        <h1 className="text-2xl font-[500]">
                          {internship.title}
                        </h1>
                        <h3 className="text-sm font-[400]">
                          {internship.organizationName}
                        </h3>
                      </div>
                      <div className=" flex items-center gap-2 pt-[1vw] work">
                        <i
                          className={
                            internship.jobType == "Work from home"
                              ? " text-base ri-home-4-line"
                              : "ri-building-line text-lg "
                          }
                        />
                        <h3 className="text-lg font-[600]">
                          {internship.jobType}
                        </h3>
                      </div>
                      <div className="extra pt-3 flex  flex-wrap gap-10">
                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className=" text-base ri-play-circle-line" />
                            <h3 className="text-base font-[600]">START DATE</h3>
                          </div>
                          <h3 className="px-1">Immediately</h3>
                        </div>
                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className=" text-base ri-calendar-line" />
                            <h3 className="text-base font-[600]">PERKS</h3>
                          </div>
                          <h3 className="px-1">{internship.perks}</h3>
                        </div>
                      </div>
                      <div className="extra  flex -mt-1  flex-wrap gap-16">
                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className="text-base ri-wallet-3-line" />
                            <h3 className="text-base font-[600]">STIPEND</h3>
                          </div>
                          <h3 className="px-1">₹{internship.salary}/month</h3>
                        </div>
                      </div>
                   
                    </div>
                  ))}
             
   
        </motion.div>
      </div>
    </section>
    </div>
    
    </div>
  )
}

export default ReadAllJob