import React from 'react';
import PrivateLayout from '../layouts/PrivateLayout';
import { Route } from 'react-router-dom';

const LoginLayoutRoute = ({comonent: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render={matchProps => (
            <PrivateLayout>
                <Component {...matchProps} />
            </PrivateLayout>
        )}
    />
    )
};

export default LoginLayoutRoute;