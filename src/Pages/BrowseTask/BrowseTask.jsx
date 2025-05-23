import React from 'react';
import { useLoaderData } from 'react-router';
import Task from '../../Components/Task/Task';
import { Fade, Zoom } from 'react-awesome-reveal';


const BrowseTask = () => {
    const alltask = useLoaderData()

    console.log(alltask);

    return (
        <Fade>
            <div>
                <h1 className='text-3xl py-6 text-center font-bold'>All Tasks<span className='text-primary'>.</span> </h1>


                
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