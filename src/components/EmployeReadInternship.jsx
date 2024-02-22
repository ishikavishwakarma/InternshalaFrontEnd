import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  asynccreateInternship,
  asyncreadInternship,
  asyncreadJob,
} from "../store/Actions/employeActions";

const EmployeReadInternship = () => {
  const { employe, isAuths, internships } = useSelector(
    (state) => state.employee
  );
  const [formValues, setFormValues] = useState({
    profile: "",
    skill: "",
    from: "",
    amount: "",
    responsibility: "",
    opening: "",
    duration: "",
    internshipType:"",
    to:"",
    perks:"",
    organizationName:"",
  });

  const { student, isAuth, intern } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(asynccreateInternship(formValues));
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    // dispatch(student)
    // dispatch(asynccreateInternship());
    dispatch(asyncreadInternship());
    !isAuth || (!isAuths && navigate("/employe/internship/read"));
  }, []);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="center ">
        <div className="head  ">
          <div className="img h-[160vh] pt-[2vh] w-full bg-black ">
            <div className=" mt-[16vh]  flex flex-col items-center  head">
              <h1 className="  text-white pb-3 text-5xl font-[700]">
                Create Impactful Internships Now
              </h1>
              <h3 className="  text-white text-center w-[50vw]  text-xl font-[100]">
                Embark on your professional journey by seamlessly applying for
                transformative internships with our expert guidance and curated
                resources.
              </h3>
              <div className="formdiv h-full pt-[8vh] pl-[20vw] w-[40vw] ">
                <form
                  className="flex gap-2 h-full  flex-col"
                  onSubmit={submitHandler}
                >
                  <div className="form__group field">
                    <input
                      className="  form__field border border-slate-600 "
                      // onChange={(e) => setprofile(e.target.value)}
                      onChange={handleChange}
                      value={formValues.profile}
                      type="text"
                      name="profile"
                      placeholder="Profile"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter Profile
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className="  form__field border border-slate-600 "
                      // onChange={(e) => setprofile(e.target.value)}
                      onChange={handleChange}
                      value={formValues.organizationName}
                      type="text"
                      name="organizationName"
                      placeholder="organizationName"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter organizationName
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className="  form__field border border-slate-600 "
                      // onChange={(e) => setskill(e.target.value)}
                      onChange={handleChange}
                      name="skill"
                      value={formValues.skill}
                      type="text"
                      placeholder="Skills"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter Skills
                    </label>
                  </div>

                  <div className="form__group field">
                    <input
                      className=" border  form__field border-slate-600 "
                      // onChange={(e) => setopening(e.target.value)}
                      onChange={handleChange}
                      name="opening"
                      value={formValues.opening}
                      type="Number"
                      placeholder="Opening date"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter Opening
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border  form__field border-slate-600 "
                      // onChange={(e) => setopening(e.target.value)}
                      onChange={handleChange}
                      name="internshipType"
                      value={formValues.internshipType}
                      type="text"
                      placeholder="internshipType"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter InternshipType
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border  form__field border-slate-600 "
                      // onChange={(e) => setamount(e.target.value)}
                      onChange={handleChange}
                      name="amount"
                      value={formValues.amount}
                      type="Number"
                      placeholder="Opening date"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter amount
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border border-slate-600 form__field"
                      // onChange={(e) => setfrom(e.target.value)}
                      onChange={handleChange}
                      name="from"
                      value={formValues.from}
                      type="text"
                      placeholder="City"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter From
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border  form__field border-slate-600 "
                      // onChange={(e) => setopening(e.target.value)}
                      onChange={handleChange}
                      name="to"
                      value={formValues.to}
                      type="text"
                      placeholder="to"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter to
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border border-slate-600 form__field"
                      // onChange={(e) => setresponsibility(e.target.value)}
                      onChange={handleChange}
                      name="responsibility"
                      value={formValues.responsibility}
                      type="text"
                      placeholder="City"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter responsibility
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border border-slate-600 form__field"
                      // onChange={(e) => setresponsibility(e.target.value)}
                      onChange={handleChange}
                      name="perks"
                      value={formValues.perks}
                      type="text"
                      placeholder="perks"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter perks
                    </label>
                  </div>

                  {/* <input onClick={(e)=>setmale(e.target.value)} type="radio" name='gender' value="male" />male
      <input onClick={(e)=>setfemale(e.target.value)} type="radio" name='gender' value="female" />female */}

                  <div className="form__group field">
                    <input
                      className=" form__field border border-slate-600 "
                      // onChange={(e) => setduration(e.target.value)}
                      onChange={handleChange}
                      name="duration"
                      value={formValues.duration}
                      type="text"
                      placeholder="Email"
                    />
                    <label htmlFor="Email" className="form__label">
                      Enter duration
                    </label>
                  </div>

                  <div className="btn flex w-[30vw] mt-[1vw]">
                    <button className="bg-zinc-100 w-full py-1 rounded px-2">
                  Create Internship
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="image1 flex justify-between items-center px-[14vw] -mt-[30vw]">
              <div
                data-framer-background-image-wrapper="true"
                className="img2 h-[40vh] w-[40vh]"
              >
                <img
                  src="https://framerusercontent.com/images/clKoZCgTHyhJ4eICoT1bJiWb91Q.png?scale-down-to=512"
                  alt=""
                />
              </div>
            </div>
          </div>
          { <div className="text  w-full bg-zinc-900 ">
<div className=" ml-[8vw] pt-[3vw] flex flex-col  head">
  <h1 className=" text-white text-7xl font-[600]">INTERNSHIPS..</h1>
  <p className="text-white text-xl">
    Your gateway to internships – connecting aspiring talents with
    opportunities.
  </p>
</div>
<div className=" h-fit pb-[10vw] items-start pt-[10vh] pl-[10vh]  flex flex-wrap gap-10 scroll-0  ">
{internships &&
    internships.map((internship) => (
  <div key={internship._id} className="card h-[21vw] flex flex-col px-[1.5vw] py-[1.5vw] rounded-lg w-[28vw] bg-zinc-100 ">
    <div className="head ">

      <h1 className="text-2xl font-[500]">{internship.title}</h1>
      <h3 className="text-sm font-[400]">{internship.profile}</h3>
    </div>
    <div className=" flex items-center gap-2 pt-[1vw] work">
    <i className={
      internship.internshipType =="Work from home"?
        " text-lg ri-home-4-line"
   :
        "ri-building-line text-lg "

    }/>
    <h3 className="text-lg font-[600]">{internship.internshipType}</h3>
    </div>
    <div className="extra pt-3 flex  flex-wrap gap-16">
      <div className="extra2">
    <div className=" flex items-center gap-2 pt-[1vw] work">
    <i className=" text-base ri-play-circle-line"/>
    <h3 className="text-base font-[600]">START DATE</h3>
    </div>
    <h3 className="px-1">{internship.from}</h3>
      </div>
      <div className="extra2">
    <div className=" flex items-center gap-2 pt-[1vw] work">
    <i className=" text-base ri-calendar-line"/>
    <h3 className="text-base font-[600]">DURATION</h3>
    </div>
    <h3 className="px-1">{internship.duration}</h3>
      </div>

    </div>
    <div className="extra  flex -mt-1  flex-wrap gap-16">
      <div className="extra2">
    <div className=" flex items-center gap-2 pt-[1vw] work">
    <i className="text-base ri-wallet-3-line"/>
    <h3 className="text-base font-[600]">STIPEND</h3>
    </div>
    <h3 className="px-1">₹{internship.amount}/month</h3>
      </div>

    </div>
    <Link to={`/employe/internship/read/${internship._id}`} className='bg-zinc-800 w-fit h-[2vw]  px-[1vw] items-center ml-[15vw] flex rounded text-gray-50' >view Details</Link>
  </div>
  ))}

</div>
{/* {internships &&
    internships.map((internship) => (
      <li key={internship._id}>
        <h1>employe</h1>
        <h3>{internship.profile}</h3>
      </li>
    ))}
*/}
</div> }
        </div>
      </div>
    </>
  );
};

export default EmployeReadInternship;

