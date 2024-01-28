import React, { useState } from "react";
import Header from "./assets/comps/Header";
import AddCourse from "./assets/comps/AddCourse";
import CourseList from "./assets/comps/CourseList";
import Footer from "./assets/comps/Footer";
import ShowCg from "./assets/comps/ShowCg";
import "./App.css";

function App() {
  document.title = "EWU Cgpa Calculator";

  const [courselist, setCourseList] = useState([]);
  const [coursecode, setCourseCode] = useState("");
  const [coursecredit, setCourseCredit] = useState("3");
  const [coursegrade, setCoursegrade] = useState("F_OLD");
  const [currentcourse, setCurrentCourse] = useState({});

  return (
    <>
      <Header />
      <div className="main">
        <ShowCg courselist={courselist} setCourseList={setCourseList} />
        <AddCourse
          courselist={courselist}
          setCourseList={setCourseList}
          coursecode={coursecode}
          setCourseCode={setCourseCode}
          coursecredit={coursecredit}
          setCourseCredit={setCourseCredit}
          coursegrade={coursegrade}
          setCoursegrade={setCoursegrade}
          currentcourse={currentcourse}
          setCurrentCourse={setCurrentCourse}
        />
        <CourseList 
        courselist={courselist} 
        setCourseList={setCourseList}
        coursecode={coursecode}
          setCourseCode={setCourseCode}
          coursecredit={coursecredit}
          setCourseCredit={setCourseCredit}
          coursegrade={coursegrade}
          setCoursegrade={setCoursegrade}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
