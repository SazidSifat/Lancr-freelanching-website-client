import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { user,  loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />
    }

    return user ? children : <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;