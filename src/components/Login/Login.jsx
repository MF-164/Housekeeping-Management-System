import React from 'react';
import { Link } from 'react-router-dom'
import './Login.scss'

import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    width: '60%'
})


const Login = () => {
    let user = {
        name: undefined,
        password: undefined
    }
    let navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeName = (e) => {
        const name = e.target.value;

        if ((name.length > 25) || !((name.charAt(name.length - 1) >= 'a' && name.charAt(name.length - 1) <= 'z') ||
            (name.charAt(name.length - 1) >= 'A' && name.charAt(name.length - 1) <= 'Z') || (name.charAt(name.length - 1) === ' ')))
            e.target.value = name.slice(0, name.length - 1)
        else
            user.name = name
    }

    const handleChangePassword = (e) => {
        const password = e.target.value;

        if (password.length > 8)
            e.target.value = password.slice(0, password.length - 1)
        else
            user.password = password
    }

    const handleClickLogin = () => {
        if (user.name !== undefined && user.password !== undefined) {
            // TODO:check if in store...
            // TODO:axios... dispath to current user
            navigate('/home')
        }
        else
            navigate('')
    }
    return (
        <div className='Login'>
            <form className='Loginform'>
                <div className='header'>
                    <u><h2>Login</h2></u>
                    <span>Sing in to continue.</span>
                </div>
                <TextField
                    id="userName"
                    label="Username"
                    variant="standard"
                    onChange={handleChangeName}
                    InputProps={{
                        endAdornment: (
                            <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleChangePassword}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className='btnSubmit'>
                    <BootstrapButton variant="contained" onClick={handleClickLogin}>Log in</BootstrapButton>
                    <div>
                        <span>Don't have an account? &nbsp;</span>
                        <Link to='/SignUp'>Sign Up</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login