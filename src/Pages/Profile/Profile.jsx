// src/pages/ProfilePage.jsx
import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Components/Loading/Loading";

const Profile = () => {

    const { user } = useContext(AuthContext)
    const [myData, setMyData] = useState([])
    const [alldata, setAllData] = useState([])




    useEffect(() => {
        document.title = 'My task'

        fetch(`http://localhost:3000/my-task/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyData(data))


        fetch(`http://localhost:3000/all-task`)
            .then(res => res.json())
            .then(data => setAllData(data))




    }, [user?.email, myData])


    if (!user) {
        return <Loading />
    }

    return (
        <div className="flex items-center justify-center ">
            <div className="w-full">
                <div className=" w-full  flex flex-col items-center py-10 px-4">
                    <div className="w-full  lg:w-8/12 bg-base-100 rounded-2xl shadow-lg p-8 space-y-6">
                        <div className="flex justify-center">
                            <div className="w-32 h-32 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold border-4 border-secondary shadow-md">
                                <img src={user.photoURL} alt="" className="w-30 h-30 rounded-full" />

                            </div>
                        </div>
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-primary">{user.displayName}</h2>

                        </div>
                        <div className="text-base-content space-y-2">
                            <div className="flex items-center justify-center gap-2">
                                <FaEnvelope className="text-accent" />
                                <p className="text-center">{user?.email}</p>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="w-full  grid grid-cols-1  lg:grid-cols-2  gap-6 mx-auto p-5  lg:w-8/12  ">

                    <div className="bg-primary flex-1 text-primary-content rounded-2xl shadow-lg py-8 px-20 space-y-3">
                        <p className="text-xl font-bold"> Total Tasks</p>
                        <p className="space-x-2"><span className="text-6xl font-bold">{alldata.length}</span><span className="text-2xl font-bold ">Tasks</span></p>

                    </div>
                    <div className="bg-[#ff8904] text-white rounded-2xl shadow-lg py-8 px-20 space-y-3">
                        <p className="text-xl font-bold"> My Added Tasks</p>
                        <p className="space-x-2"><span className="text-6xl font-bold">{myData.length}</span><span className="text-2xl font-bold ">Tasks</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
