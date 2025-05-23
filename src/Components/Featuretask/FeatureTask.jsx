import React from 'react';
import SingleTask from '../SingleTask/SingleTask';
import Task from '../Task/Task';
import FTask from './FTask';

const FeatureTask = ({ featureData }) => {
    return (

        <div className='mt-24'>
            <h1 className='text-4xl py-6 text-center font-bold'>Featured Tasks<span className='text-primary'>.</span> </h1>

            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10  rounded p-6'>
                {
                    featureData.map(singleTask => <FTask key={singleTask._id} singleTask={singleTask}></FTask>)
                }
            </div>

        </div>
    );
};

export default FeatureTask;