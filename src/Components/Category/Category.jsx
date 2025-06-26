import React from 'react';
import {
    FaGlobe, FaCode, FaPaintBrush, FaMusic, FaPencilRuler,
    FaPenNib, FaBullhorn, FaTasks, FaShieldAlt, FaTools,
    FaChartLine, FaCube, FaCloud, FaMobileAlt, FaGamepad,
    FaObjectGroup, FaLanguage, FaShoppingCart, FaHeadset
} from "react-icons/fa";

import { motion } from 'framer-motion';
import { Fade, Zoom } from 'react-awesome-reveal';


const categories = [
    { value: "Web-development", label: "Web Development", icon: "FaGlobe" },
    { value: "Development-IT", label: "Development & IT", icon: "FaCode" },
    { value: "Creative-Design", label: "Creative & Design", icon: "FaPaintBrush" },
    { value: "Video-Music", label: "Video & Music", icon: "FaMusic" },
    { value: "Art-Design", label: "Art & Design", icon: "FaPencilRuler" },
    { value: "Writing", label: "Writing", icon: "FaPenNib" },
    { value: "Marketing", label: "Marketing", icon: "FaBullhorn" },
    { value: "Project-Planning", label: "Project & Planning", icon: "FaTasks" },
    { value: "Cybersecurity", label: "Cybersecurity", icon: "FaShieldAlt" },
    { value: "Software-Maintenance", label: "Software Maintenance", icon: "FaTools" },
    { value: "Data-Science-AI", label: "Data Science & AI", icon: "FaChartLine" },
    { value: "Blockchain-Web3", label: "Blockchain & Web3", icon: "FaCube" },
    { value: "Cloud-Computing", label: "Cloud Computing", icon: "FaCloud" },
    { value: "Mobile-App-Development", label: "Mobile App ", icon: "FaMobileAlt" },
    { value: "Game-Development", label: "Game Development", icon: "FaGamepad" },
    { value: "UI-UX-Design", label: "UI/UX Design", icon: "FaObjectGroup" },
    { value: "Translation-Languages", label: "Translation & Languages", icon: "FaLanguage" },
    { value: "Ecommerce-Dropshipping", label: "E-commerce ", icon: "FaShoppingCart" },

];

const Category = () => {
    const iconMap = {
        FaGlobe, FaCode, FaPaintBrush, FaMusic, FaPencilRuler,
        FaPenNib, FaBullhorn, FaTasks, FaShieldAlt, FaTools,
        FaChartLine, FaCube, FaCloud, FaMobileAlt, FaGamepad,
        FaObjectGroup, FaLanguage, FaShoppingCart, FaHeadset
    };
    return (
        <div className='bg-base-300'>
            <div className='container mx-auto pb-10  '>
                <h2 className='  text-4xl py-6 text-center  font-bold'>Top Categories.</h2>

                <Fade duration={1500}>
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-3 md:px-0 '>
                        {

                            categories.map(cat => {
                                const Icon = iconMap[cat.icon];
                                return (
                                    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: .96 }} key={cat.value} className='bg-base-200 h-[124px] rounded-lg flex flex-col gap-3 shadow items-center justify-center p-6 hover:text-primary '>
                                        <Icon size={40} className='duration-150 ' />
                                        <span className='font-bold '>{cat.label}</span>
                                    </motion.div>
                                );
                            })

                        }
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default Category;