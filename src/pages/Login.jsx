import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SwitchModeButton from './../components/SwitchModeButton';
import Check_Login from '../api/Login/LogInController';

const LoginInput = styled(TextField)({
  width: '20vw'
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isFormValid = () => {
    return email !== '';
  };

  const btnCreate = () => {
    const postBody = { Email: email };
    Check_Login(postBody, navigate);
    
  };

  const handleSignUp = () => {
    navigate(`/SignUp`);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <SwitchModeButton style={{ position: 'absolute', top: '20px', right: '20px' }} />

      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" sx={{ display: 'block' }}>Welcome back</Typography>
        <Typography sx={{ display: 'block', marginBottom: '50px' }}>Discover and explore more games</Typography>
      </Box>

      <Box sx={{
        width: '25vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        padding: '50px',
        marginLeft: '30px',
        borderLeft: '1px solid #8080802b'
      }}>
        <Typography variant='h3' sx={{ textDecoration: 'underline' }}>Login</Typography>

        <LoginInput id="email" label="Enter Your Email" value={email} onChange={handleEmailChange} />

        <Button variant='contained' color="primary" onClick={btnCreate} disabled={!isFormValid()}>
          Login
        </Button>

        <Typography variant='p'>forgot password?</Typography>
        <Typography variant='p'>Don't have an account? 
          <a href='#' onClick={handleSignUp}>Sign up</a>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
