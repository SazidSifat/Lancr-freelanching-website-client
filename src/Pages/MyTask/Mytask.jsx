import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const Mytask = () => {

    const [myData, setMyData] = useState([])

    const { user } = useContext(AuthContext)

    fetch(`http://localhost:3000/my-task/${user.email}`)
        .then(res => res.json())
        .then(data => setMyData(data))






    return (

        myData.map(data => <p key={data._id}>{data.userName}</p>)


    );
};

export default Mytask;