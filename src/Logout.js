import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '696908995235-ao2l0oj9d8espfkfm45aucej8jno3ur8.apps.googleusercontent.com'

function Logout() {
    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
    };
    return ( 
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}
export default Logout