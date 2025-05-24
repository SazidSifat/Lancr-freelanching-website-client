import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';


//category
const categories = [
    { value: "Web-development", label: "Web Development" },
    { value: "Development-IT", label: "Development & IT" },
    { value: "Creative-Design", label: "Creative & Design" },
    { value: "Video-Music", label: "Video & Music" },
    { value: "Art-Design", label: "Art & Design" },
    { value: "Writing", label: "Writing" },
    { value: "Marketing", label: "Marketing" },
    { value: "Project-Planning", label: "Project & Planning" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Software-Maintenance", label: "Software Maintenance" },
    { value: "Data-Science-AI", label: "Data Science & AI" },
    { value: "Blockchain-Web3", label: "Blockchain & Web3" },
    { value: "Cloud-Computing", label: "Cloud Computing" },
    { value: "Mobile-App-Development", label: "Mobile App Development" },
    { value: "Game-Development", label: "Game Development" },
    { value: "UI-UX-Design", label: "UI/UX Design" },
    { value: "Translation-Languages", label: "Translation & Languages" },
    { value: "Ecommerce-Dropshipping", label: "E-commerce & Dropshipping" },
    { value: "Virtual-Assistance", label: "Virtual Assistance" }
];


const AddTask = () => {

    useEffect(() => {
        document.title = "Add Task"

    }, [])


    const { user } = useContext(AuthContext)

    console.log(user.email);
    console.log();


    const handleFormtask = (e) => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())






        //for task
        fetch("https://freelance-task-marketplace-server-tau.vercel.app/addtask", {
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
        <Fade>
            <div className='p-3 md:p-10 bg-base-200'>
                <div className='container mx-auto space-y-4 md:space-y-10'>
                    <div>
                        <h1 className=' text-3xl md:text-4xl font-bold text-center'>
                            Add a Task<span className='text-primary'>.</span>

                        </h1>
                        <p className='text-center font-semibold'><i>'Post Your Task, Find the Right Talent — Fast, Simple, Effective.'</i></p>
                    </div>


                    <div className='flex shadow-xl items-center justify-center px-4 md:px-8 py-4 md:py-5 lg:py-10 bg-base-100  rounded lg:w-9/12 mx-auto'>
                        <form onSubmit={handleFormtask} className=' w-full space-y-6'>


                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='font-medium p-1'>Task Title</label>
                                    <input name='title' type="text" placeholder='Enter task title' className='border bg-base-200 w-full border-base-300 py-3 text-base-content px-4 rounded' required />
                                </div>


                                <div>
                                    <label className='font-medium p-1'>Category</label>
                                    <select name='category' className='border text-base-content w-full border-base-300 py-3 bg-base-200 px-4 rounded' required>

                                        {
                                            categories.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option>)
                                        }

                                    </select>
                                </div>

                                <div>
                                    <label className='font-medium p-1'>Deadline</label>
                                    <input name='deadline' id="deadline" type="date" className='border text-base-content w-full bg-base-200 border-base-300 py-3  px-4 rounded' required />
                                </div>


                                <div>
                                    <label htmlFor="budget" className='font-medium p-1'>Budget ($)</label>
                                    <input name='budget' type="number" placeholder='Enter budget' className='border text-base-content w-full border-base-300 py-3 bg-base-200 px-4 rounded' required />
                                </div>

                                <div>
                                    <label className='font-medium p-1'>User Name</label>
                                    <input name='userName' type="text" value={user.displayName} readOnly className='border  w-full required  border-base-300 py-3  px-4 rounded text-gray-600'
                                    />
                                </div>

                                <div>
                                    <label className='font-medium p-1'>User Email</label>
                                    <input name='userEmail' type="email" value={user.email} readOnly className='border w-full border-base-300 py-3  px-4 rounded  text-gray-600' required
                                    />
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <label className='font-medium p-1'>Description</label>
                                <textarea name='description' placeholder='What needs to be done?' className='border text-base-content border-base-300 py-3 bg-base-200 px-4 rounded w-full' required rows="4"></textarea>
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
        </Fade>
    );
};

export default AddTask;
