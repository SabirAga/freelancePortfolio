import { createContext, useState, useContext } from "react";

const DarkModeContext = createContext()

export const DarkModeProvider = ({children})=>{
    const [isDark, setIsDark] = useState(false)

    const toggleDark=()=>{
        setIsDark(!isDark)
    }

    return (
        <DarkModeContext.Provider value ={{isDark, toggleDark}}>
            {children}
        </DarkModeContext.Provider>
        )
    }

    export const useDarkMode = () => {
        return useContext(DarkModeContext);
      };


    // <button className='fixed w-16 h-16 right-16 bottom-16 bg-neutral-800 dark:bg-white rounded-full text-white dark:text-black font-semibold' onClick={toggleDark}>{isDark ? '☀️' : '🌙 '}</button>