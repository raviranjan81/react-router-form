import React, { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import { AiFillBank } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { PiAddressBookBold } from "react-icons/pi";
import '../../components/style.css';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
const navStyle = {
  position: 'fixed',
  top: scrollPosition > 300 ?  '-4.4rem' :0,
  width: '100%',
  backgroundColor: '#FAFFFE',
  zIndex: 1,
  transition: 'top 0.3s ease-in-out',
};

  return (
    <div className="flex shadow-md h-14 p-2 items-center justify-between" style={navStyle}>
      <h3 className="text-3xl font-mono font-bold px-4 rounded-lg items-center flex pb-1 bg-slate-300 text-gray-950">Ravi </h3>
      <div className="NavLink">
        <ul className="flex gap-4 ">
          <span className="flex items-center gap-1">
            <AiFillBank />
            <li>
              
              <NavLink to="/" >Home</NavLink>
            </li>
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineUser />
            <li>
              <NavLink to="/about"> About</NavLink>
            </li>
          </span>
          <span className="flex items-center gap-1">
            <AiOutlinePhone />
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </span>
          <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/formik">Formil Form</NavLink>
            </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex gap-4 ">
          <span className="flex items-center gap-1">
            <CiShoppingCart />
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </span>
          <span className="flex items-center gap-1">
            <PiAddressBookBold />
            <li>
              <NavLink to="/account"> Acount</NavLink>
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Header;
