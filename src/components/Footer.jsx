import React from "react";

const Footer = () => {
  return (
    <div className=" px-[6vw] bg-black pt-[8vw] h-[100vh] w-full  ">
      <div className="box flex gap-1  h-[50vh] w-full">
        <div className="section rounded  h-full w-[13vw] ">
          <h1 className="text-lg font-[500] pb-3 text-white">
            Internships by places
          </h1>
          <p className="text-base font-[450] leading-7 text-white">
            Internship in India <br />
            Internship in Delhi <br />
            Internship in Bangalore <br />
            Internship in Hyderabad <br />
            Internship in Mumbai <br />
            Internship in Chennai <br />
            Internship in Gurgaon <br />
            Internship in Kolkata <br />
            Virtual internship <br />
            View all internships <br />
          </p>
        </div>
        <div className="section rounded  pl-14 h-full w-[20vw] ">
          <h1 className="text-lg font-[500] pb-3 text-white">
            Internship by Stream
          </h1>
          <p className="text-base font-[450] leading-7 text-white">
            Computer Science Internship <br />
            Electronics Internship
            <br />
            Mechanical Internship
            <br />
            Civil Internship <br />
            Marketing Internship <br />
            Chemical Internship
            <br />
            Finance Internship
            <br />
            Summer Research Fellowship <br />
            Campus Ambassador Program <br />
            View all internships <br />
          </p>
        </div>
        <div className="section rounded  pl-16 h-full w-[18vw] ">
          <h1 className="text-lg font-[500] pb-3 text-white">Jobs by Places</h1>
          <p className="text-base font-[450] leading-7 text-white">
            Jobs in Delhi
            <br />
            Jobs in Mumbai
            <br />
            Jobs in Bangalore <br />
            Jobs in Jaipur <br />
            Jobs in Kolkata
            <br />
            Jobs in Hyderabad
            <br />
            Jobs in Pune <br />
            Jobs in Chennai <br />
            Jobs in Lucknow
            <br />
            View all jobs <br />
          </p>
        </div>
        <div className="section rounded pl-2  h-full w-[18vw] ">
          <h1 className="text-lg font-[500] pb-3 text-white">Jobs by Stream</h1>
          <p className="text-base font-[450] leading-7 text-white">
            Marketing jobs <br />
            Content writing jobs <br />
            Web development jobs <br />
            Sales jobs <br />
            Finance jobs
            <br />
            Digital Marketing jobs <br />
            Computer Science jobs <br />
            Graphic Design jobs
            <br />
            Data Science jobs <br />
            View all jobs
            <br />
          </p>
        </div>
        <div className="section rounded -ml-10 h-full w-[28vw] ">
          <h1 className="text-lg font-[500] pb-3 text-white">
            Placement Guarantee Courses
          </h1>
          <p className="text-base font-[450] leading-7 text-white">
            Full Stack Development course with placement <br />
            Data Science course with placement <br />
            Human Resource Management course with placement <br />
            Digital Marketing course with placement <br />
            Product Management course with placement <br />
            UI/UX Design course with placement <br />
            Electric Vehicle course with placement <br />
          </p>
          <h2 className=" pt-10 text-xl text-white">
            Certification Courses OFFER
          </h2>
        </div>
      </div>
      <hr className="-ml-[6vw] w-[98.9vw]"></hr>
      <div className="box flex gap-[5vw] pt-10 h-[24vh] w-full">
        <div className="section rounded  h-full w-[15vw] ">
          <p className="text-white leading-7">
            About us <br />
            We're hiring <br />
            Hire interns for your company <br />
            Post a Job <br />
          </p>
        </div>
        <div className="section rounded  h-full w-[15vw] ">
          <p className="text-white leading-7">
            Team Diary <br />
            Blog <br />
            Our Services <br />
          </p>
        </div>
        <div className="section rounded  h-full w-[15vw] ">
          <p className="text-white leading-7">
            Terms & Conditions
            <br />
            Privacy <br />
            Contact us <br />
          </p>
        </div>
        <div className="section rounded  h-full w-[15vw] ">
          <p className="text-white leading-7">
            Sitemap <br />
            College TPO registration <br />
            List of Companies <br />
          </p>
        </div>
      </div>
      <button className="border border-white text-white px-14 rounded py-1 text-lg"> Get App</button>
    </div>
  );
};

export default Footer;
