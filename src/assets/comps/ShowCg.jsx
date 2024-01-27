import React from "react";
import "./ShowCg.css";

function ShowCg() {
  return (
    <div className="addtask flex justify-center gap-20 shadow-xs text-gray-50 inset shadow-sm border-2 text-gray-900">
      <div className="w-[250px] border-2 rounded-md ">
        <div className="m-2">
          <p>CGPA</p>
          <h1 className="text-4xl font-bold">3.9</h1>
        </div>
      </div>

      <div className="w-[250px] border-2 rounded-md ">
        <div className="m-2">
          <p>Credit Completed</p>
          <h1 className="text-4xl font-bold">128</h1>
        </div>
      </div>

      <div className="w-[250px] border-2 rounded-md ">
        <div className="m-2">
          <p>Total Course</p>
          <h1 className="text-4xl font-bold">20</h1>
        </div>
      </div>
    </div>
  );
}

export default ShowCg;
