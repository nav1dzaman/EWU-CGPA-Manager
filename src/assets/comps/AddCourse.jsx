import React, { useState } from "react";
import "./AddCourse.css";

function AddCourse({
  courselist,
  setCourseList,
  coursecode,
  setCourseCode,
  coursecredit,
  setCourseCredit,
  coursegrade,
  setCoursegrade,
  currentcourse, 
  setCurrentCourse
}) {
  function handlereset() {
    setCourseCode("");
  }

  const handlesubmit = (event) => {
    event.preventDefault();

    coursecode = coursecode.slice(0, 8);
    const [first, second] = coursegrade.split(",");
    const sheet = {
      id: Math.floor(Math.random() * 100000),
      code: coursecode,
      credit: coursecredit,
      grade_stock: coursegrade,
      grade_value: parseFloat(second),
      grade_show: first,
    };

    setCourseList([...courselist, sheet]);
    // console.log(courselist)

    // console.log(coursecode)
    console.log(typeof sheet.credit);
    // console.log(typeof(second))
  };

  return (
    <div className="addtask ">
      <form onSubmit={handlesubmit}>
        <label className="text-sm" htmlFor="coursecode">
          Course:
        </label>
        <input
          type="text"
          onChange={(e) => {
            setCourseCode(e.target.value);
          }}
          name="coursecode"
          id="coursecode"
          placeholder="Course Code"
          autoComplete="off"
          value={coursecode}
        />

        <label htmlFor="coursecredit">Credit:</label>
        <select
          className="border-2"
          onChange={(e) => {
            setCourseCredit(e.target.value);
          }}
          value={coursecredit}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4.5">4.5</option>
        </select>

        <label htmlFor="coursegrade">Grade:</label>
        <select
          className="border-2"
          onChange={(e) => {
            setCoursegrade(e.target.value);
          }}
          value={coursegrade}
        >
          <option value="F_NEW,0.00">F NEW</option>
          <option value="D_NEW,2.00">D NEW</option>
          <option value="C_NEW,2.25">C NEW</option>
          <option value="C+_NEW,2.50">C+ NEW</option>
          <option value="B-_NEW,2.75">B- NEW</option>
          <option value="B_NEW,3.00">B NEW</option>
          <option value="B+_NEW,3.25">B+ NEW</option>
          <option value="A-_NEW,3.50">A- NEW</option>
          <option value="A_NEW,3.75">A NEW</option>
          <option value="A+_NEW,4.00">A+ NEW</option>
          <option value="F_OLD,0.00">F OLD</option>
          <option value="D_OLD,1.00">D OLD</option>
          <option value="D+_OLD,1.30">D+ OLD</option>
          <option value="C-_OLD,1.70">C- OLD</option>
          <option value="C_OLD,2.00">C OLD</option>
          <option value="C+_OLD,2.30">C+ OLD</option>
          <option value="B-_OLD,2.70">B- OLD</option>
          <option value="B_OLD,3.00">B OLD</option>
          <option value="B+_OLD,3.30">B+ OLD</option>
          <option value="A-_OLD,3.70">A- OLD</option>
          <option value="A_OLD,4.00">A OLD</option>
          <option value="A+_OLD,4.00">A+ OLD</option>
        </select>
        <button type="submit" className="bg-blue-400 p-2 rounded-md">
          Add
        </button>
        <span
          onClick={handlereset}
          className="bg-red-100 rounded-md p-2 ml-2 cursor-pointer"
        >
          Reset
        </span>
      </form>
    </div>
  );
}

export default AddCourse;
