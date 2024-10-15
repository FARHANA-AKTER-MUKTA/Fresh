import React from "react";
import Container from "../Layer/Container";
import { Link } from "react-router-dom";
import logo from "../../Public/logo.png"
import NavLi from "../Layer/NavLi";

const Navbar = () => {
  return (
    <div className=" bg-BannerColor pt-[57px] pb-[117px]">
      <Container className=' flex justify-between items-center' >
        <div className="">
        <Link>
        <img src={logo} alt={logo} />
        </Link>
        </div>
        <div className="menu"> 
          <ul className="flex gap-[60px]">
            <NavLi to='/' nabLiText ='Men'/>
            <NavLi to='' nabLiText ='Women'/>
            <NavLi to='/' nabLiText ='Kids'/>
            <NavLi to='/' nabLiText ='Collection'/>
            <NavLi to='/' nabLiText ='Trends'/>
          </ul>      
          </div>
        <div className="btn flex gap-[10px]"> 
          <Link to='/login'  className="py-[10px] px-7 bg-BtnColor  rounded-[10 px ] text-[#050505 ] font-semibold text-2xl 
          border border-transparent hover:bg-transparent hover:border-[##FDBB57] duration-300 transition-all
          "> Login
           </Link>
          <Link  to=''  className="py-[10px] px-7 bg-BtnColor  rounded-[10 px ] text-[#050505 ] font-semibold text-2xl 
          border border-transparent hover:bg-transparent hover:border-[##FDBB57] duration-300 transition-all
          "> Sign up
           </Link>
        </div>
       

      </Container>
    
    </div>
  );
};

export default Navbar;
