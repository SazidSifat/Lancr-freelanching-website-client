import React, { useEffect, useState } from 'react';
import { WiDaySunny } from "react-icons/wi";
import { PiMoonStarsDuotone } from "react-icons/pi";
import { Rotate } from 'react-awesome-reveal';
import { motion, AnimatePresence } from 'framer-motion';

const Theme = () => {
    const [theme, setTheme] = useState("light")


    useEffect(() => {
        const prev = localStorage.getItem("theme") || "light";
        setTheme(prev)
        document.documentElement.setAttribute("data-theme", prev)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
        localStorage.setItem("theme", newTheme)

    }

    return (
        <div className='flex items-center justify-center cursor-pointer'>
            <button className='px-6 cursor-pointer' onClick={toggleTheme}>{theme === "light" ? <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <WiDaySunny size={29} />
            </motion.div>
                : <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <PiMoonStarsDuotone size={25} />
                </motion.div>}</button>
        </div>
    );
};

export default Theme;