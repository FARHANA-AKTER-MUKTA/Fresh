import React, { useState } from 'react'
import Container from '../Layer/Container'

const LogIn = () => {

  let[fn, setFn]= useState()
  let[fnErr, setFnErr]= useState()
  let checkName= (e)=>{
    let fName = e.target.value
    setFn(fName)
    setFnErr("")
    
  }

  // /////////// btn function START///////////

  let  manageName= ()=>{
    if(!fn){
      setFnErr("select name")
    }
  }


// 

  return (
    <div>
      <Container className='max-w-[1868px] bg-BannerColor py-[105px] px-[216px]'>
        <div className="main bg-slate-500 w-[1440px] h-[1061px] mx-auto
       ">





        </div>
           
      </Container>
    </div>
  )
}

export default LogIn
