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

    useEffect(() => {
        let handler = (e) => {
            if (!closeMenu?.current?.contains(e.target)) {
                setMobileDrawerOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <nav className={`sticky top-0 py-3 navColor z-50 ${mobileDrawerOpen ? '' : 'border border-b-2'}`}>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">Evaryskin</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative">
                                <a className="underlineText" href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center contactColor border">
                        <a href="#" className="py-2 px-3">Contact</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                <div
                    ref={closeMenu}
                    className={`fixed -top-5 right-1/2 p-8 flex flex-col justify-center items-center lg:hidden mainNav navColor z-20 
                    transform ${mobileDrawerOpen ? 'translate-x-1/2 translate-y-1/2 opacity-100' : 'translate-x-full opacity-0'} 
                    transition-all duration-300 ease-in-out`}
                    style={{ height: "60vh", width: "80vw" }}  // Altezza e larghezza ridotte
                >
                    <ul className="w-full text-center space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative">
                                <a className="underlineText" href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 my-3 contactColor border">
                        <a href="#" className="py-2 px-3">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
