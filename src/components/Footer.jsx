import React from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants";

const Footer = () => {
  return (
    <footer className='navColor py-3 border-t-2 border-white'>
    <div className='w-full container px-4 mx-auto text-sm'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex items-center flex-shrink-0 mb-4 lg:mb-0'>
                <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                <span className='text-xl tracking-tight'>Evaryskin</span>
            </div>
            <ul className="flex flex-col lg:flex-row lg:ml-14 lg:space-x-12 space-y-4 lg:space-y-0 mb-4 lg:mb-0">
                {navItems.map((item, index) => (
                    <li key={index} className="relative">
                        <a className="underlineText" href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center contactColor border">
                <a href="#Contact" className="py-2 px-3">Contact</a>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer