// src/pages/ProfilePage.jsx
import React, { useContext } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Components/Loading/Loading";

const Profile = () => {

    const { user } = useContext(AuthContext)


    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen  flex flex-col items-center py-10 px-4">
            <div className="w-full  lg:w-8/12 bg-base-100 rounded-2xl shadow-lg p-8 space-y-6">
                {/* Avatar */}
                <div className="flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold border-4 border-secondary shadow-md">
                        <img src={user.photoURL} alt="" className="w-30 h-30 rounded-full" />

                    </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-primary">{user.displayName}</h2>

                </div>

                {/* Contact */}
                <div className="text-base-content space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <FaEnvelope className="text-accent" />
                        <p className="text-center">{user.email}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Profile;
