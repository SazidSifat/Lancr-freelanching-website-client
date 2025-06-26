import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';
import Error from '../../Pages/Error/Error';
import Swal from 'sweetalert2';

const TaskDetails = () => {

    
    const task = useLoaderData()
    
    const [bid, setBid] = useState(task.countBids)


    let bids = task.countBids || 0;
    



    const bidsCount = () => {
        bids++
        fetch(`http://localhost:3000/all-task/${task._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ countBids: bids })
        })
            .then((res) => res.json())
            .then(data => {
                if (data.matchedCount === 1) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You have successfully bided to this task .",
                        showConfirmButton: false,
                        timer: 1500

                    });
                    setBid(bid + 1)
                }
            })

    }


    return (
        <Fade>
            <div className='p-3 md:p-10'>
                <div className='container mx-auto  bg-base-200 mb-10 rounded p-6 md:p-10  shadow-lg'>
                    <div className='py-3 border-b border-base-300'>

                        <p className='py-3 flex items-center justify-center mb-3'><span className=' p-2 rounded place-content-center font-bold bg-base-100 text-base-content text-center'>You Bid for <span className='text-primary'>{bid ? bid : 0}</span> Opportunaties</span></p>

                        <h1 className='text-3xl md:text-4xl font-bold'>{task.title}.</h1>
                        <p className='py-4 '><span className='text-base-content rounded-lg bg-base-100  p-2'>{task.category}</span></p>
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
                        <motion.button onClick={bidsCount} whileHover={{ scale: 1.05 }} whileTap={{ scale: .96 }}
                            className='px-10 text-black py-3 rounded bg-secondary font-bold cursor-pointer'>Bid Now</motion.button>
                    </div>

                </div>
            </div>
        </Fade>
    );
};

export default TaskDetails;