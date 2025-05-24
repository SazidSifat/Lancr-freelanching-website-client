import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../../Context/AuthContext';
import { data, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTask = () => {

    const task = useLoaderData()

    const { _id, title, category, budget, deadline, userName, userEmail, description } = task

    const handleUpdatetask = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const form = Object.fromEntries(formData.entries())

        fetch(`https://freelance-task-marketplace-server-tau.vercel.app/update-my-task/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount === 0) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "No Change Made ",
                    showConfirmButton: false,
                    timer: 1500
                });
                return
            }

            if (data.modifiedCount === 1) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Task Updated Successfully ",
                    showConfirmButton: false,
                    timer: 1500
                });

            }


        })


    }

    return (
        <Fade>
            <div className='p-3 md:p-10 bg-base-200'>
                <div className='container mx-auto space-y-4 md:space-y-10'>
                    <h1 className=' text-3xl md:text-4xl font-bold text-center'>
                        Update this Task<span className='text-primary'>.</span>
                    </h1>

                    <div className='flex shadow-2xl items-center justify-center px-4 md:px-8 py-4 md:py-5 lg:py-10 bg-base-100 rounded lg:w-9/12 mx-auto'>
                        <form onSubmit={handleUpdatetask} className=' w-full space-y-6'>


                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='font-medium p-1'>Task Title</label>
                                    <input name='title' type="text" defaultValue={title} placeholder='Enter task title' className='border bg-base-200 w-full border-base-300 py-3 text-base-content px-4 rounded' />
                                </div>


                                <div>
                                    <label className='font-medium p-1'>Category</label>
                                    <select name='category' defaultValue={category} className='border bg-base-200 w-full border-base-300 py-3 text-base-content px-4 rounded'>
                                        <option value="" disabled >Select category</option>
                                        <option value="Web-development">Web Development</option>
                                        <option value="Development & IT">Development & IT</option>
                                        <option value="Creative & Design">Creative & Design</option>
                                        <option value="Video & Music">Video And Music</option>
                                        <option value="Art & Design">Art & Design</option>
                                        <option value="Writing">Writing</option>
                                        <option value="marketing">Marketing</option>


                                    </select>
                                </div>

                                <div>
                                    <label className='font-medium p-1'>Deadline</label>
                                    <input name='deadline' defaultValue={deadline} id="deadline" type="date" className='border bg-base-200 w-full border-base-300 py-3 text-base-content px-4 rounded' />
                                </div>


                                <div>
                                    <label htmlFor="budget" className='font-medium p-1'>Budget ($)</label>
                                    <input name='budget' type="number" defaultValue={budget} placeholder='Enter budget' className='border bg-base-200 w-full border-base-300 py-3 text-base-content px-4 rounded' />
                                </div>

                                <div>
                                    <label className='font-medium p-1'>User Name</label>
                                    <input name='userName' type="text" value={userName} readOnly className='border bg-base-200 w-full border-base-300 py-3 text-base-content px-4 rounded text-gray-600'
                                    />
                                </div>

                                <div>
                                    <label className='font-medium p-1'>User Email</label>
                                    <input name='userEmail' type="email" defaultValue={userEmail} readOnly className='border bg-base-200 w-full border-base-300 py-3 text-base-content px-4 rounded  text-gray-600'
                                    />
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <label className='font-medium p-1'>Description</label>
                                <textarea name='description' defaultValue={description} placeholder='What needs to be done?' className='border bg-base-200  border-base-300 py-3 text-base-content px-4 rounded w-full' rows="4"></textarea>
                            </div>
                            <div className='col-span-2'>
                                <button type="submit" className='bg-secondary text-black font-bold cursor-pointer  py-3 px-6 rounded w-full'>
                                    Update Task
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default UpdateTask;