import { useEffect, useState } from "react";

export function useTheme(){
    const [theme, setTheme] = useState('light');
    let savedTheme: string;

    function toggleTheme(){ 
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        savedTheme = localStorage.getItem("@theme") || 'light';
        setTheme(savedTheme);
    }, [])

    useEffect(() => {
        localStorage.setItem('@theme', theme)
    }, [theme]);

    return {theme, toggleTheme};
}