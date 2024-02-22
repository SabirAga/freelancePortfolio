import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../DarkmodeContext';

<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
></link>



export const NavBar = () => {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const {isDark, toggleDark} = useDarkMode()
   

    const openMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navs = [
        { to: '/projects', label: 'Projects' },
        { to: '/skills', label: 'Skills' },
        { to: '/contacts', label: 'Contacts' },
    ];

    const containerClass = `flex items-center dark:text-yellow text-white font-poppins pt-[17px] pb-[15px] border-b-2 border-[#26292D] bg-[#171718]`
    return (
        <div className={containerClass}>
            <p className="w-2/4 gap-1 pl-14 lg:pl-[115px] md:pl-28 text-2xl text-nowrap">
            <Link to='/'>
                <span className="font-bold">Freelance </span>portfolio
            </Link>
            </p>
            <ul className="hidden md:flex justify-end w-2/4 space-x-10 pr-14 lg:pr-[115px] md:pr-28">
                {navs.map((nav) => {
                    const isActive = pathname === nav.to;
                    return (
                        <li key={nav.to} className={isActive ? 'border-b-2 border-[#5C62EC]' : ''}>
                            <Link to={nav.to}>{nav.label}</Link>
                        </li>
                    );
                })}
            </ul>
            <div className="absolute right-0 text-right pr-10 md:hidden">
                <button
                    onClick={openMenu}
                    className="text-2xl focus:outline-none ">{!isMobileMenuOpen ? '☰' : '×'}
                </button>
                {isMobileMenuOpen && (
                    <ul className="absolute right-0 bg-[#171718] text-white text-center py-2">
                        {navs.map((nav) => (
                            <li key={nav.to}>
                                <Link
                                    to={nav.to}
                                    className={`block px-4 py-2 ${pathname === nav.to ? 'text-[#5C62EC]' : ''
                                        }`}
                                >
                                    {nav.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className='fixed w-16 h-16 right-16 bottom-16 bg-neutral-800 dark:bg-white rounded-full text-white dark:text-black font-semibold' onClick={toggleDark}>{isDark ? '☀️' : '🌙 '}</button>
        
        </div>
    );
};

