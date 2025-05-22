import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
    const task =  useLoaderData()
    console.log( task );
    return (
        <div>
            
        </div>
    );
};

export default TaskDetails;