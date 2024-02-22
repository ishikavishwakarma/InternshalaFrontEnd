import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { asynccurrentEmploye, asyncreadSingleIntern } from '../store/Actions/employeActions';
import ExtraNav from './ExtraNav';
import Footer from './Footer';

const SingleInternships = () => {
    const { id } = useParams();

    const {internsh} = useSelector(
        (state) => state.employee
      );
    const {student} = useSelector(
        (state) => state.student
      );
   
      const dispatch = useDispatch();

     
      useEffect(() => {
        const fetchData = async () => {
          try {
            await dispatch(asyncreadSingleIntern(id)); // Dispatching action with the ID
          // Update loading state after data is fetched
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, [dispatch, id]);
  return internsh && (
    <div className='bg-zinc-900 h-fit  w-full' >
    <ExtraNav/>
        {/* <h1>{internsh._id}</h1> */}
        <div className="div h-[100vh] pt-[1vw] w-full  flex justify-center">
                  <div className="div h-fit w-[65vw] rounded py-[2vw] px-[2vw] bg-zinc-200 ">
                    <div className="head">
                    <h1 className='text-3xl text-center'>{internsh.title}</h1>
                    <h3  className='pt-4 text-xl'>{internsh.title}</h3>
                    <h3  className=' text-sm'>{internsh.organizationName}</h3>
                    <p  className='-pt-1 text-base'>{internsh.profile}</p>
                    </div>
                    <div className=" flex items-center gap-2 pt-[2vw] work">
                <i className={
                  internsh.internshipType =="Work from home"?
                    " text-lg ri-home-4-line"
               :
                    "ri-building-line text-lg "
                  
                }/>
                <h3 className="text-lg font-[600]">{internsh.internshipType}</h3>
                </div>
                <div className="center pt-4 flex gap-[10vw]">

                <div className="extra2">
                <div className=" flex items-center gap-2 pt-[1vw] work">
                <i className=" text-base ri-play-circle-line"/>
                <h3 className="text-base font-[600]">START DATE</h3>
                </div>
                <h3 className="px-1">{internsh.from}</h3>
                  </div>

                  <div className="extra2">
                <div className=" flex items-center gap-2 pt-[1vw] work">
                <i className=" text-base ri-calendar-line"/>
                <h3 className="text-base font-[600]">DURATION</h3>
                </div>
                <h3 className="px-1">{internsh.duration}</h3>
                  </div>
                  <div className="extra2">
                <div className=" flex items-center gap-2 pt-[1vw] work">
                <i className=" text-base ri-calendar-line"/>
                <h3 className="text-base font-[600]">Stipend</h3>
                </div>
                <h3 className="px-1"> ₹{internsh.amount}/months</h3>
                  </div>
                </div>
                <div className="center2 pt-[2vw]">
                  <h3 className='text-base font-[600]'>Responsibility</h3>
                { internsh.responsibility ? internsh.responsibility : <p>Lore ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptatum id error animi sequi eaque exercitationem dolores. Sit nam, tempore, ipsam possimus accusantium eveniet ea facilis quia totam, tempora id.
                  Ut fugiat dolores, at cum illum laborum,voluptatem dolore? Excepturi officiis ipsum asperiores pariatur harum iusto eaque facere accusamus. Cupiditate eveniet sit voluptatum eaque voluptatem doloremque quasi, adipisci eius vel. Sapiente suscipit doloremque dolorem optio harum!</p>}
                </div>
                <div className="center3 pt-[2vw] ">
                  <h3 className='text-base font-[600]'>Skills Required</h3>
                  <p>{internsh.skill}</p>
                </div>
                <div className="center3 pt-[2vw] ">
                  <h3 className='text-base font-[600]'>Number of Openings</h3>
                  <p>{internsh.opening}</p>
                </div>
              {internsh.perks&&  <div className="center3 pt-[2vw] ">
                  <h3 className='text-base font-[600]'>Perks</h3>
                  <p>{internsh.perks}</p>
                </div>}
                <div className=" flex items-center justify-center center3 pt-[2vw] ">
              { student&& <Link className='py-2 px-12 rounded bg-zinc-400'>Apply Now</Link>}
                </div>
                  </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleInternships