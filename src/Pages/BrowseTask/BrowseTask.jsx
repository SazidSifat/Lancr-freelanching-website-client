import React from 'react';
import { useLoaderData } from 'react-router';
import Task from '../../Components/Task/Task';
import { div } from 'framer-motion/client';

const BrowseTask = () => {
    const alltask = useLoaderData()

    console.log(alltask);

    return (
        <div>
            <h1 className='text-3xl py-6 text-center font-bold'>All Tasks<span className='text-primary'>.</span> </h1>


            <div className='container mx-auto grid grid-cols-4 gap-6 pb-10  rounded p-6'>
                {
                    alltask.map(singleTask => <Task singleTask={singleTask} />)

                }
            </div>

        </div>



    );
};

export default BrowseTask;