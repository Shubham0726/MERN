import NavBar from '../../pages/components/Navbar/Navbar';
import React from 'react';

const AuthLayout = ({children, ...rest}) => {
    return(
        <div className="page-dashboard">
        <NavBar />
        <div className="main">{children}</div>
        </div>
    )
}

export default AuthLayout;