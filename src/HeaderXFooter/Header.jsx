import './Header.css';
import { LuFacebook } from "react-icons/lu";
import { RxTwitterLogo } from "react-icons/rx";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 992);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Top header only on small screens */}
      <div className="hamburger-header">
        <button onClick={toggleSidebar} className="sidebar-toggle">
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`sideStck ${sidebarOpen ? 'active' : ''}`}>
        <h1 className='sidebar-title font-bold' style={{border:'1px solid',margin:'10px 20px'}}>ダイハート</h1> {/* Use a class for specific styling */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </nav>
        <div className='social-icons'> {/* Wrap social icons in a div */}
          <LuFacebook />
          <RxTwitterLogo />
          <TiSocialInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </>
  );
};

export default Header;