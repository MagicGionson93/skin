import logo from "../assets/logo.png";
import {navItems} from "../constants";
import {Menu, X} from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const closeMenu = useRef();

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    useEffect(() => 
    {
        let handler = (e) => {
            if(!closeMenu?.current?.contains(e.target)){
                setMobileDrawerOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);

    }, [])

  return (
    <nav className={"sticky top-0 z-50 py-3 openBackground " + (mobileDrawerOpen ? 'none' : 'border border-b-2')} >
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">
                        Evaryskin
                    </span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index} className="relative">
                            <a  className="underlineText" href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center contactColor border ">
                    <a href="#" className="py-2 px-3  ">
                        Contact
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar} >
                        {mobileDrawerOpen ? <X /> : <Menu /> }
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div ref={closeMenu}  className="fixed my-2 right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden openBackground">
                    <ul >
                        {navItems.map((item, index) => (
                            <li key={index} className="py-2 relative text-center">
                                <a className="underlineText" href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 my-3 contactColor border">
                        <a href="#" className=" py-2 px-3">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar