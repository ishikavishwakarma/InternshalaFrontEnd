import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asynccurrentEmploye,
  asyncreadSingleJob,
} from "../store/Actions/employeActions";
import { Link, useParams } from "react-router-dom";
import ExtraNav from "./ExtraNav";
import "react-toastify/dist/ReactToastify.css";
import { asyncapplyjob } from "../store/Actions/studentActions";
import { ToastContainer, toast } from "react-toastify";

const SingleJob = () => {
  const { id } = useParams();

  const { job } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const applyHandle=()=>{
    dispatch(asyncapplyjob(id));
    toast("Applied");
  }
  const { student } = useSelector((state) => state.student);
  useEffect(() => {
    dispatch(asynccurrentEmploye()); // Fetch loggedinuser data for student when component mounts
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(asyncreadSingleJob(id)); // Dispatching action with the ID
        // Update loading state after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch, id]);
  return (
    job && (
      <div className="bg-zinc-900 h-fit  w-full">
        <ExtraNav />
       
        {/* <h1>{job._id}</h1> */}
        <div className="div h-fit pb-[3vw] pt-[1vw] w-full  flex justify-center">
          <div className="div h-fit w-[65vw] rounded py-[2vw] px-[2vw] bg-zinc-200 ">
            <div className="head">
              <h1 className="text-3xl text-center">{job.title}</h1>
              <h3 className="pt-4 text-xl">{job.title}</h3>
              <h3 className=" text-sm">{job.organizationName}</h3>
              <p className="-pt-1 text-base">{job.description}</p>
            </div>
            <div className=" flex items-center gap-2 pt-[1.5vw] work">
              <i
                className={
                  job.jobType == "Work from home"
                    ? " text-lg ri-home-4-line"
                    : "ri-building-line text-lg "
                }
              />
              <h3 className="text-lg font-[600]">{job.jobType}</h3>
            </div>
            <div className="center pt-2 flex gap-[10vw]">
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
                  <h3 className="text-base font-[600]">DURATION</h3>
                </div>
                <h3 className="px-1">{job.duration}</h3>
              </div>
              <div className="extra2">
                <div className=" flex items-center gap-2 pt-[1vw] work">
                  <i className=" text-base ri-calendar-line" />
                  <h3 className="text-base font-[600]">Stipend</h3>
                </div>
                <h3 className="px-1"> ₹{job.salary}/months</h3>
              </div>
            </div>
            <div className="center2 pt-[1.5vw]">
              <h3 className="text-base font-[600]">Responsibility</h3>
              {job.description ? (
                job.description
              ) : (
                <p>
                  Lore ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                  voluptatum id error animi sequi eaque exercitationem dolores.
                  Sit nam, tempore, ipsam possimus accusantium eveniet ea
                  facilis quia totam, tempora id. Ut fugiat dolores, at cum
                  illum laborum,voluptatem dolore? Excepturi officiis ipsum
                  asperiores pariatur harum iusto eaque facere accusamus.
                  Cupiditate eveniet sit voluptatum eaque voluptatem doloremque
                  quasi, adipisci eius vel. Sapiente suscipit doloremque dolorem
                  optio harum!
                </p>
              )}
            </div>
            <div className="center3 pt-[1.5vw] ">
              <h3 className="text-base font-[600]">Skills Required</h3>
              <p>{job.skill}</p>
            </div>
            <div className="center3 pt-[1.5vw] ">
              <h3 className="text-base font-[600]">Number of Openings</h3>
              <p>{job.opening}</p>
            </div>
            {job.perks && (
              <div className="center3 pt-[1.5vw] ">
                <h3 className="text-base font-[600]">Perks</h3>
                <p>{job.perks}</p>
              </div>
            )}
            {job.preferences && (
              <div className="center3 pt-[1.5vw] ">
                <h3 className="text-base font-[600]">Preferences</h3>
                <p>{job.preferences}</p>
              </div>
            )} 
            <div className=" flex items-center justify-center center3 pt-[2vw] ">
              {student && (
                <button onClick={applyHandle}  className="py-2 px-12 rounded bg-zinc-400">
                  Apply Now
                </button>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  );
};

export default SingleJob;
