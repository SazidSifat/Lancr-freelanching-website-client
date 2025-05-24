import React, { useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const SingleTask = ({ singleData, handleDelete }) => {
    const [bid, setBid] = useState(false)

    return (
        <>
            <tr className=' rounded text-center '>
                <td className='p-3 border border-base-300 '>{singleData.title}</td>
                <td className='p-3 border border-base-300 '>{singleData.category}</td>
                <td className='p-3 border border-base-300 '>${singleData.budget}</td>
                <td className='p-3 border border-base-300 '>{singleData.deadline}</td>
                <td className='p-3 border border-base-300 '>
                    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-2'>
                        <Link to={`/update-task/${singleData._id}`}>
                            <button className='p-1 bg-secondary rounded cursor-pointer'>
                                <BiEdit size={20} className='text-secondary-content' />
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(singleData._id)} className='p-1 bg-red-400  rounded cursor-pointer'>
                            <MdDelete size={20} color=' white' />
                        </button>
                        <button onClick={() => setBid(!bid)} className='px-3 py-1 font-bold bg-primary text-primary-content rounded cursor-pointer'>
                            Bid
                        </button>

                        {
                            bid ? <p className='font-bold'>Bids:{singleData.countBids ? singleData.countBids : 0}</p> : ""
                        }
                    </div>
                </td>
            </tr>




        </>

    );
};

export default SingleTask;