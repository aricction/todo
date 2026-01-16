"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const[isDark, setIsDark] = useState(false);

    useEffect(()=> {
        if(isDark){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggleDarkMode = ()=> {
    setIsDark((prev)=> !prev);
  }

  return (
    <ThemeContext.Provider value={{isDark, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);