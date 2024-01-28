import React, { useEffect, useState } from "react";
import "./ShowCg.css";

function ShowCg({courselist,setcourselist}) {

  const[cgpa,setcgpa]=useState(0)
  const[totalredit,settotalcredit]=useState(0)
  const[totalcourse,settotalcourse]=useState(0)

  useEffect(() => {
    let tm=0;
    let crd=0;
    let up=0;
    for(let i=0;i<courselist.length;i++){
      const course=courselist[i];
        tm+=1;
        crd+=parseFloat(course.credit);
        up+=(parseFloat(course.credit)*course.grade_value);

        // console.log(typeof(course.grade_value))
     }
     console.log(crd);

     let cg_temp=(up/crd);

     console.log(cg_temp);

     if (Number.isNaN(cg_temp)) {
      
      cg_temp = 0;
    }

    cg_temp=(cg_temp).toFixed(2)

     console.log(cg_temp);
     settotalcourse(tm);
     settotalcredit(crd);
     setcgpa(cg_temp);
  }, [courselist]);

  

  return (
    <div className="addtask flex justify-center gap-20 shadow-xs text-gray-50 inset shadow-sm border-2 text-gray-900">
      <div className="w-[250px] border-2 rounded-md ">
        <div className="m-2">
          <p>CGPA</p>
          <h1 className="text-4xl font-bold">{cgpa}</h1>
        </div>
      </div>

      <div className="w-[250px] border-2 rounded-md ">
        <div className="m-2">
          <p>Credit Completed</p>
          <h1 className="text-4xl font-bold">{totalredit}</h1>
        </div>
      </div>

      <div className="w-[250px] border-2 rounded-md ">
        <div className="m-2">
          <p>Total Course</p>
          <h1 className="text-4xl font-bold">{totalcourse}</h1>
        </div>
      </div>
    </div>
  );
}

export default ShowCg;
