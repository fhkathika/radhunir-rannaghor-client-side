import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const history=useHistory()
  const location=useLocation()
  const redirect_url=location.state?.from || '/home'
    const {signInUsingGoogle}=useAuth()
    const handlesignInUsingGoogle=()=>{
        signInUsingGoogle()
        .then(result =>{
         history.push(redirect_url)
      })
    }

    return (
        <div>
          <button onClick={handlesignInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;