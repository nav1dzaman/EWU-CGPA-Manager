import React from "react";

function CourseCard({course,setCourseList,handledelete}) {

  return (
    <div className="h-[114px] w-[200px] border-2 p-2 flex">
      <div className="w-[150px] ">
        <p className="font-bold text-xl">{course.code}</p>
        <p>Credit: {course.credit}</p>
        <p>Grade: {course.grade_show}</p>
       
        
      </div>
      <div className="flex flex-wrap justify-center m-2 w-[70px]">
      <button onClick={()=>{handledelete(course.id)}} className="border-0 rounded-sm bg-red-300 p-1 cursor-pointer  ">Delete</button>
      <button className="border-0 rounded-sm bg-green-400 p-1 cursor-pointer my-[16px]">Modify</button>
      </div>
    </div>
  );
}

export default CourseCard;
