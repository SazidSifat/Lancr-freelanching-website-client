import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const AddTask = () => {


    const { user } = useContext(AuthContext)

    console.log(user.email);
    console.log();


    const handleFormtask = (e) => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        fetch("http://localhost:3000/addtask", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Task Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div className='p-3 md:p-10 bg-base-200'>
            <div className='container mx-auto space-y-4 md:space-y-10'>
                <h1 className=' text-3xl md:text-4xl font-bold text-center'>
                    Add a Task<span className='text-primary'>.</span>
                </h1>

                <div className='flex items-center justify-center px-4 md:px-8 py-4 md:py-5 lg:py-10 bg-white rounded lg:w-9/12 mx-auto'>
                    <form onSubmit={handleFormtask} className=' w-full space-y-6'>


                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label className='font-medium p-1'>Task Title</label>
                                <input name='title' type="text" placeholder='Enter task title' className='border w-full border-base-300 py-3 bg-white px-4 rounded' />
                            </div>


                            <div>
                                <label className='font-medium p-1'>Category</label>
                                <select name='category' className='border w-full border-base-300 py-3 bg-white px-4 rounded'>
                                    <option value="" disabled >Select category</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="design">Design</option>
                                    <option value="writing">Writing</option>
                                    <option value="marketing">Marketing</option>

                                </select>
                            </div>

                            <div>
                                <label className='font-medium p-1'>Deadline</label>
                                <input name='deadline' id="deadline" type="date" className='border w-full border-base-300 py-3 bg-white px-4 rounded' />
                            </div>


                            <div>
                                <label htmlFor="budget" className='font-medium p-1'>Budget</label>
                                <input name='budget' type="number" placeholder='Enter budget' className='border w-full border-base-300 py-3 bg-white px-4 rounded' />
                            </div>

                            <div>
                                <label className='font-medium p-1'>User Name</label>
                                <input name='userName' type="text" value={user.displayName} readOnly className='border w-full border-base-300 py-3  px-4 rounded text-gray-600'
                                />
                            </div>

                            <div>
                                <label className='font-medium p-1'>User Email</label>
                                <input name='userEmail' type="email" value={user.email} readOnly className='border w-full border-base-300 py-3  px-4 rounded  text-gray-600'
                                />
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <label className='font-medium p-1'>Description</label>
                            <textarea name='description' placeholder='What needs to be done?' className='border border-base-300 py-3 bg-white px-4 rounded w-full' rows="4"></textarea>
                        </div>
                        <div className='col-span-2'>
                            <button type="submit" className='bg-primary cursor-pointer text-white py-3 px-6 rounded w-full'>
                                Submit Task
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
