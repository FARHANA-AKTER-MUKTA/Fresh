import React from 'react'
import { Outlet } from 'react-router-dom'



const Root = () => {
  return (
    <div>
     <Outlet/>
    {/* <Singup/> */}
      {/* <p>Footer</p> */}
    </div>
  )
}

export default Root
