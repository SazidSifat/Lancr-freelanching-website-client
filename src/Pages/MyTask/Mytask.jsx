import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import SingleTask from '../../Components/SingleTask/SingleTask';


const Mytask = () => {

    const [myData, setMyData] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/my-task/${user.email}`)
            .then(res => res.json())
            .then(data => setMyData(data))
    }, [user.email])




    return (

        <></>

    );
};

export default Mytask;