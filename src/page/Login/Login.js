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
        <div style={{border:'1px solid red',height:'500px' }}  >
          <h1>Log In please</h1>
          <button style={{backgroundColor:'goldenrod'}} className='m-5 p-3' onClick={handlesignInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;