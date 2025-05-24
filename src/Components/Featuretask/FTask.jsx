import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Fade, Zoom } from "react-awesome-reveal";


const FTask = ({ singleTask }) => {
    return (
        <Link to={`/task-details/${singleTask._id}`}>
            <Zoom cascade fraction={0.5}>
                <motion.div whileHover={{ scale: 1.05 }}
                    className='p-6 border border-base-300 rounded  bg-base-200 shadow-lg space-y-3'>
                    <div className='py-4 border-b border-base-300 space-y-3'>
                        <span className='text-base-content px-2 py-1 bg-base-200 rounded-lg '>{singleTask.category}</span>
                        <h1 className='text-2xl text-base-content font-bold pt-2 hover:text-primary hover:underline'>{singleTask.title}</h1>
                        <p className='text-base-content font-bold'>Deadline: <span>{singleTask.deadline}</span></p>
                    </div>
                    <div className='flex items-center justify-between py-2'>
                        <p className='text-sm'><span>{singleTask.userName}</span></p>
                        <p className='text-lg'>Starting at : $<span>{singleTask.budget}</span> </p>
                    </div>
                </motion.div>
            </Zoom>
        </Link>
    );
};

export default FTask;