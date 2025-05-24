import { motion } from 'framer-motion';
import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router';

const Task = ({ singleTask }) => {
    return (
        <Zoom>
            <motion.div whileHover={{ scale: 1.05 }}
                className='p-6 border border-base-300 rounded bg-base-200 shadow-lg space-y-3 h-full flex flex-col justify-between'>
                <div className='py-4 border-b border-base-300 space-y-3'>
                    <span className='text-base-content px-2 py-1 bg-base-100 rounded-lg '>{singleTask.category}</span>
                    <h1 className='text-2xl font-bold text-base-content pt-2 '>{singleTask.title}</h1>
                    <p className='text-base-content font-bold'>Deadline: <span>{singleTask.deadline}</span></p>
                </div>
                <div className='flex items-center justify-between py-2'>
                    <p className='text-sm'><span>{singleTask.userName}</span></p>
                    <p className='text-lg'>Starting at : $<span>{singleTask.budget}</span> </p>
                </div>
                <motion.div whileTap={{ scale: .96 }}>
                    <Link to={`/task-details/${singleTask._id}`}><button className='py-3 bg-primary cursor-pointer w-full rounded text-white'>See Details</button></Link>
                </motion.div>
            </motion.div>
        </Zoom>
    );
};

export default Task;