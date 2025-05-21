import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { user } = useContext(AuthContext);

    return user ? children : <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;