import React from 'react';
import { Link } from 'react-router-dom'
import './Login.scss'
import { useForm } from 'react-hook-form'
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
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';

import { loginToWebSite } from '../../store/features/Client/clientSlice'
import { store } from '../../store/app/store'


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

    let dis = useDispatch()
    let navigate = useNavigate()
    const { register, handleSubmit, getValues, formState: { errors, dirtyFields, isDirty, isValid } } = useForm({
        mode: 'onBlur'
    })

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickLogin = (user) => {
        user.role = ''
        dis(loginToWebSite(user)).then(() => {
            let currentClient = store.getState().client.currentClient.client
            console.log({currentClient});
            if (currentClient != null) {
                navigate('/home')
            } else
                navigate('SignUp')
        }
        )

    }
    return (
        <div className='Login'>
            <form className='Loginform' onSubmit={handleSubmit(handleClickLogin)}>
                <div className='header'>
                    <u><h2>Login</h2></u>
                    <span>Sing in to continue.</span>
                </div>
                <TextField id="username" label={`UserName ${errors.username?.type == "required" ? '*' : ''}`} variant="standard"
                    {...register("username", { pattern: /^[ A-Za-z]+$/i, required:true, maxLength: 15 })}
                    InputProps={{
                        endAdornment: (
                            <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                {errors.username?.type === 'pattern' && <Alert severity="warning">please enter only english letters.</Alert>}
                {errors.username?.type === 'maxLength' && <Alert severity="warning">please enter a valid user name that is at least 25 letters.</Alert>}

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password {errors.password?.type == "required" ? '*' : ''}</InputLabel>
                    <Input id="password" type={showPassword ? 'text' : 'password'}
                        {...register("password", { minLength: 4, maxLength: 8, required: true })}
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
                    {errors.password?.type === 'minLength' && <Alert severity="error">Please enter a valid password that is at more 3 characters.</Alert>}
                    {errors.password?.type === 'maxLength' && <Alert severity="warning">please enter a valid user name that is at least 9 characters.</Alert>}

                </FormControl>

                <div className='btnSubmit'>
                    <BootstrapButton variant="contained" type='Submit'>Log in</BootstrapButton>
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