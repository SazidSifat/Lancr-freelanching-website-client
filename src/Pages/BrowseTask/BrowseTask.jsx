import React from 'react';
import { useLoaderData } from 'react-router';
import Task from '../../Components/Task/Task';

const BrowseTask = () => {
    const alltask = useLoaderData()

    console.log(alltask);


    return (alltask.map(task => <Task task={task} />));
};

export default BrowseTask;