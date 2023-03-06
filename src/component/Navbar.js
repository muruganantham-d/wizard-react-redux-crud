import React from 'react';
import {useSelector  } from "react-redux";

const NavBar = () => {

  const {tasksList} = useSelector((state) => state.tasks)
  return (
    <> 
    <h1 className='text-center my-4 text-primary'>Project Management</h1>
    <p className='text-center lead'>{`Currently ${tasksList.length} task(s) pendind`}</p>
    </>
  )
}

export default NavBar