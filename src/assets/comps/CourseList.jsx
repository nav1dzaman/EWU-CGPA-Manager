import React from 'react'
import CourseCard from './CourseCard'


function CourseList({courselist,setCourseList,coursecode,setCourseCode,coursecredit,setCourseCredit,coursegrade,setCoursegrade}) {

  
  function handledelete(id){
    // console.log(id)
    setCourseList(courselist.filter( crs=> crs.id !== id))
  }
  function handleedit(id){
    const selected=courselist.find((course)=>course.id === id);
    console.log(selected);
    // setCourseCode(selected.coursecode);
    //  setCourseCredit(selected.coursecredit);
    //  setCoursegrade(selected.grade_stock)

  }

  return (

    <div>
      <h2 className='text-xl font-bold text-center p-4'>Course List</h2>
     <span className='flex flex-wrap justify-center max-w-[1000px] mx-[100px] gap-4 '>
           
     {courselist.map((crs)=>(
       <CourseCard key={crs.id} course={crs} setCourseList={setCourseList} handledelete={handledelete} handleedit={handleedit}/>
     ))}
    
     </span>
    </div>


    
  
  )
}

export default CourseList