import { useState } from 'react';
import './SignUp.scss'


import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

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


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState()
    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleBlurPhone = (e) => {
        const tel = e.target.value
        if (tel.length === 10 || tel.length === 9)
            setValue(tel)
        else
            setValue("")

    }
    const handleChangePhone = (e) => {
        const tel = e.target.value
        if (tel.charAt(tel.length - 1) > '9' || tel.charAt(tel.length - 1) < '0' || tel.length > 10)
            setValue(tel.slice(0, tel.length - 1))
        else
            setValue(tel)
    }
    const handleChangeID = (event) => {
        const id = event.target.value;

        if (id.charAt(id.length - 1) > '9' || id.charAt(id.length - 1) < '0') {
            event.target.value = id.slice(0, id.length - 1);
        }
        if (id.length > 9) {
            event.target.value = id.slice(0, 9);
        }
    };
    const handleChangeHouseNumber = (e) => {
        const num = e.target.value
        if (num.charAt(num.length - 1) > '9' || num.charAt(num.length - 1) < '0' || num.length > 2)
            e.target.value = num.slice(0, num.length - 1)
    }
    const handleChangeCity = (e) => {
        const city = e.target.value;

        if (!((city.charAt(city.length - 1) >= 'a' && city.charAt(city.length - 1) <= 'z') ||
            (city.charAt(city.length - 1) >= 'A' && city.charAt(city.length - 1) <= 'Z') || (city.charAt(city.length - 1) === ' ')))
            e.target.value = city.slice(0, city.length - 1)

    }

    return (
        <div className='SignUp'>
            <form className='SignUpform'>
                <div className='header'>
                    <u><h2>SignUp</h2></u>
                    <span>Sing in to continue.</span>
                </div>
                <TextField
                    id="input-with-sx"
                    label="UserID"
                    variant="standard"
                    onChange={handleChangeID}
                    InputProps={{
                        endAdornment: (
                            <FingerprintOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />

                <TextField
                    id="input-with-sx"
                    label="Username"
                    variant="standard"
                    onChange={handleChangeCity}
                    InputProps={{
                        endAdornment: (
                            <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
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

                <TextField
                    id="input-with-sx"
                    label="Phone"
                    variant="standard"
                    value={value}
                    onChange={handleChangePhone}
                    onBlur={handleBlurPhone}
                    InputProps={{
                        endAdornment: (
                            <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />

                <TextField
                    id="input-with-sx"
                    label="City"
                    variant="standard"
                    onChange={handleChangeCity}
                    InputProps={{
                        endAdornment: (
                            <LocationCityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />

                <TextField
                    id="input-with-sx"
                    label="Address"
                    variant="standard"
                    InputProps={{
                        endAdornment: (
                            <HomeWorkOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />

                <TextField
                    id="input-with-sx"
                    label="HouseNumber"
                    variant="standard"
                    onChange={handleChangeHouseNumber}
                    InputProps={{
                        endAdornment: (
                            <HouseOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                <div className='btnSubmit'>
                    <BootstrapButton variant="contained">Log in</BootstrapButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp