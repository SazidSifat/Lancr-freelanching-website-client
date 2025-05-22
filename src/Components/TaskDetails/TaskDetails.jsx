import { motion } from 'framer-motion';
import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
    const task = useLoaderData()
    console.log(task);
    return (
        <div className='p-10'>
            <div className='container mx-auto  bg-base-200 mb-10 rounded p-20  shadow-lg'>
                <div className='py-3 border-b border-base-300'>
                    <h1 className='text-4xl font-bold'>{task.title}.</h1>
                    <p className='text-lg text-gray-500'>Task By : <span>{task.userName}</span></p>
                    <p className='text-lg text-gray-500'>Email : <span>{task.userEmail}</span></p>

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
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .96 }}
                        className='px-10 py-3 rounded bg-secondary font-bold cursor-pointer'>Bid Now</motion.button>

                </div>

            </div>
        </div>
    );
};

export default TaskDetails;