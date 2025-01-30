// src/context/ThemeContext.tsx
import React, { useState, useEffect, createContext, useContext } from 'react';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: false,
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
       setIsDarkMode(systemDarkMode);
    }, []);

    const toggleTheme = () => {
         setIsDarkMode((prev) => !prev);
    };


    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);


    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};