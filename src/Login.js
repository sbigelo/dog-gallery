import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './refreshToken';

const clientId = '696908995235-ao2l0oj9d8espfkfm45aucej8jno3ur8.apps.googleusercontent.com'

function Login() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
}

const onFailure = (res) => {
     console.log('Login failed: res:', res);
     alert(
        `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
};

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                ux_mode='redirect'
                redirectUri='http://localhost:3000/dogs'
            />
        </div>
    )

}

export default Login