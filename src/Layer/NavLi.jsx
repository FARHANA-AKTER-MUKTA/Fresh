import React from 'react'
import { Link } from 'react-router-dom'

const NavLi = ({className, nabLiText, to}) => {
  return (
    <li>
        <Link to ={to} className={`text-2xl font-semibold text-black ${className}`}>
        {nabLiText}
        </Link>
    </li>
  )
}

export default NavLi
