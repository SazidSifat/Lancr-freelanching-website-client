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
        document.title = 'My task'

        fetch(`http://localhost:3000/my-task/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyData(data))
    }, [user?.email, myData])


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

                fetch(`http://localhost:3000/delete/${id}`, {
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

        <div className="px-4 sm:px-6 lg:px-10">
            <Fade>
                <div className="py-3 lg:py-10">
                    <h1 className="text-3xl font-bold text-center">My Task</h1>
                    <p className="text-center font-semibold italic">
                        "Manage Your Tasks — Track, Edit, and Stay in Control."
                    </p>
                </div>


                <div className="overflow-x-auto mb-10 shadow-lg rounded-lg">
                    <table className="min-w-full table-auto border border-base-300 text-sm md:text-base">
                        <thead className="bg-primary text-primary-content">
                            <tr>
                                <th className="py-3 px-4 border border-base-300 text-left">Title</th>
                                <th className="py-3 px-4 border border-base-300 text-left">Category</th>
                                <th className="py-3 px-4 border border-base-300 text-left">Budget</th>
                                <th className="py-3 px-4 border border-base-300 text-left">Deadline</th>
                                <th className="py-3 px-4 border border-base-300 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myData.map((singleData) => (
                                <SingleTask
                                    handleDelete={handleDelete}
                                    key={singleData._id}
                                    singleData={singleData}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </Fade>
        </div>


    );
};

export default Mytask;