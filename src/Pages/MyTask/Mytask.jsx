import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import SingleTask from '../../Components/SingleTask/SingleTask';
import Swal from 'sweetalert2';
import { MdUpdate } from 'react-icons/md';
import { Fade } from 'react-awesome-reveal';


const Mytask = () => {

    const [myData, setMyData] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://freelance-task-marketplace-server-tau.vercel.app/my-task/${user.email}`)
            .then(res => res.json())
            .then(data => setMyData(data))
    }, [user.email, myData])


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Not be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1F6F65",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://freelance-task-marketplace-server-tau.vercel.app/delete/${id}`, {
                    method: "DELETE"
                }).then((res => res.json()))
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Task has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }
    return (

        <>
            <Fade>
                <div className='py-10'>
                    <h1 className='text-3xl font-bold text-center  '>My Task</h1>
                    <p className='text-center font-semibold'><i>"Manage Your Tasks — Track, Edit, and Stay in Control."</i></p>
                </div>

                <table className='container mx-auto mb-10 rounded table-fixed shadow-lg'>

                    <thead className='p-4'>
                        <tr className='bg-primary  text-primary-content rounded'>
                            <th className='py-3 border border-base-300 '>Title</th>
                            <th className='py-3 border border-base-300 '>Category</th>
                            <th className='py-3 border border-base-300 '>Budget</th>
                            <th className='py-3 border border-base-300 '>Deadline</th>
                            <th className='py-3 border border-base-300 '>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myData.map(singleData => <SingleTask handleDelete={handleDelete} key={setMyData._id} singleData={singleData} />)
                        }

                    </tbody>
                </table>
            </Fade>


        </>

    );
};

export default Mytask;