import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...restOfProps }) => {

    return (
        <Route {...restOfProps} render={() => {
            if (localStorage.getItem('token')) {
                return <Component />;
            }
            console.log('redirecting to login');
            return <Redirect to='login' />
        }} />
    )
};

export default PrivateRoute;