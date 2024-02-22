import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "../components/headerComps/NavBar";
import { Footer } from "../components/Footer";
import { useDarkMode } from "../components/DarkmodeContext";
import { useEffect } from "react";


export const RootLayout = () => {
const {pathname}= useLocation()
    const {isDark} = useDarkMode();
    useEffect(() => {

        window.scrollTo(0, 0);
      }, [pathname]);

    return (
        <div className={isDark ? 'dark': ''}>
            <NavBar />
            <main className="dark:bg-stone-500">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
} 