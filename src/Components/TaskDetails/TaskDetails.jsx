import { motion } from 'framer-motion';
import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
    const task = useLoaderData()
    console.log(task);
    return (
        <div className='container mx-auto p-10 bg-base-200 mt-10 rounded pb-20 space-y-3'>
            <div className='py-3 border-b border-base-300'>
                <h1 className='text-4xl font-bold'>{task.title}.</h1>
                <p className='text-lg text-gray-500'>Task By : <span>{task.userName}</span></p>
            </div>
            <div className='py-3 space-y-3 border-b border-base-300'>
                <h1 className='text-lg font-bold'>Task Deadline: {task.deadline}</h1>
                <div>
                    <p className='text-lg font-bold'>Description:</p>
                    <p className='lg:w-2/3'>{task.description}</p>
                </div>
            </div>
            <div className='py-3 space-y-3'>
                <p className='text-xl font-semibold'>Budget: $<span>{task.budget}</span></p>
                <motion.button  whileHover={{scale:1.05}} whileTap={{scale:.96}}
                 className='px-10 py-3 rounded bg-secondary font-bold cursor-pointer'>Bid Now</motion.button>

            </div>

        </div>
    );
};

export default TaskDetails;