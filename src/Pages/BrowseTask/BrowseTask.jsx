import React from 'react';
import { useLoaderData } from 'react-router';
import Task from '../../Components/Task/Task';
import { Fade, Zoom } from 'react-awesome-reveal';


const BrowseTask = () => {
    const alltask = useLoaderData()

    console.log(alltask);

    return (
        <Fade>
            <div className='bg-base-200'>
                <div className='py-6'>
                    <h1 className='text-3xl  text-center font-bold'>All Tasks<span className='text-primary'>.</span> </h1>
                    <p className='text-center font-semibold'><i>"Explore Tasks, Discover Opportunities — Your Next Bid Awaits."</i></p>
                </div>




                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10  rounded p-6'>
                    {
                        Array.isArray(alltask) && alltask.map(singleTask => <Task key={singleTask._id} singleTask={singleTask} />)

                    }
                </div>


            </div>

        </Fade>


    );
};

export default BrowseTask;