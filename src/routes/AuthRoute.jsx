import React, { Component } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import { Route } from 'react-router-dom';

const AuthRoute = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render={matchProps => (
            <AuthLayout>
                <Component {...matchProps} />
            </AuthLayout>
        )}
    />
    )
};

export default AuthRoute;