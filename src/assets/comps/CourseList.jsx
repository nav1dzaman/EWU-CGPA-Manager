import React from 'react'
import CourseCard from './CourseCard'


function CourseList({courselist,setCourseList}) {

  
  function handledelete(id){
    console.log(id)
    setCourseList(courselist.filter( crs=> crs.id !== id))
  }

  return (

    <div>
      <h2 className='text-xl font-bold text-center p-4'>Course List</h2>
     <span className='flex flex-wrap justify-center max-w-[1000px] mx-[100px] gap-4 '>
           
     {courselist.map((crs)=>(
       <CourseCard key={crs.id} course={crs} setCourseList={setCourseList} handledelete={handledelete}/>
     ))}
    
     </span>
    </div>


    
  
  )
}

export default CourseList