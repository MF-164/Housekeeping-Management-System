import { useState } from 'react';
import './SignUp.scss'


import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Person4Icon from '@mui/icons-material/Person4';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByUserNameFromServer, insertClientForServer } from '../../store/features/Client/clientSlice';
import { useNavigate } from 'react-router-dom';


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
    // const [value, setValue] = useState()
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    let newClient = {}

    const dis = useDispatch();

    let navigate = useNavigate()

    let status = useSelector(s => s.client.currentClient.status)
    let currentClient = useSelector(s => s.client.currentClient.client)

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangePassword = (e) => {
        if (e.target.value.length > 8) {
            e.target.value = e.target.value.slice(0, 8)
        }
    }

    const handleBlurPhone = (e) => {
        const tel = e.target.value
        if (tel.length === 10 || tel.length === 9) {
            e.target.value = tel
            newClient.phone = tel
        }
    }
    const handleChangePhone = (e) => {
        const tel = e.target.value

        if (tel.charAt(tel.length - 1) > '9' || tel.charAt(tel.length - 1) < '0' || tel.length > 10) {
            e.target.value = tel.slice(0, tel.length - 1)
        }
        else {
            e.target.value = tel
        }
    }
    const handleChangeHouseNumber = (e) => {
        const num = e.target.value
        if (num.charAt(num.length - 1) > '9' || num.charAt(num.length - 1) < '0' || num.length > 2) {
            e.target.value = num.slice(0, num.length - 1)
        }

    }
    const handleChangeCity = (e) => {
        const city = e.target.value;

        if (!((city.charAt(city.length - 1) >= 'a' && city.charAt(city.length - 1) <= 'z') ||
            (city.charAt(city.length - 1) >= 'A' && city.charAt(city.length - 1) <= 'Z') || (city.charAt(city.length - 1) === ' ')))
            e.target.value = city.slice(0, city.length - 1)

    }

    const handleSave = () => {
        newClient.id = 0
        newClient.role = "client"
        console.log({newClient});
        let client = dis(fetchByUserNameFromServer(newClient.username))
        console.log("before  null if",{client});
        if (client === null) {
             dis(insertClientForServer(newClient))
            if (status === "success") {
                console.log({ currentClient });
                navigate('/home')
            }
        }
        else{
            console.log({client});
            console.log("error");
        }
    }

    return (
        <div className='SignUp'>
            <form className='SignUpform'>
                <div className='header'>
                    <u><h2>SignUp</h2></u>
                    <span>Sing in to continue.</span>
                </div>
                <TextField
                    id="username"
                    label="Username"
                    variant="standard"
                    onChange={handleChangeCity}
                    onBlur={(e) => newClient.username = e.target.value}
                    InputProps={{
                        endAdornment: (
                            <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                <br />

                <TextField
                    id="name"
                    label="Name"
                    variant="standard"
                    onChange={handleChangeCity}
                    onBlur={(e) => newClient.name = e.target.value}
                    InputProps={{
                        endAdornment: (
                            <Person4Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                <br />
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
                        onBlur={(e) => newClient.password = e.target.value}
                    />
                </FormControl>
                <br />
                <TextField
                    id="phon"
                    label="Phone"
                    variant="standard"
                    onChange={handleChangePhone}
                    onBlur={(e) => handleBlurPhone(e)}

                    InputProps={{
                        endAdornment: (
                            <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                <br />
                {/* {phoneFlag && <Alert severity="error">phone contains just numbers!</Alert>}
                                {phoneFlag2 && <Alert severity="warning">Invalid phone number!</Alert>} */}

                <TextField
                    id="city"
                    label="City"
                    variant="standard"
                    onChange={handleChangeCity}
                    onBlur={(e) => newClient.city = e.target.value}
                    InputProps={{
                        endAdornment: (
                            <LocationCityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                <br />

                <TextField
                    id="address"
                    label="Address"
                    variant="standard"
                    onBlur={(e) => newClient.address = e.target.value}
                    InputProps={{
                        endAdornment: (
                            <HomeWorkOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                <br />
                <TextField
                    id="HouseNumber"
                    label="HouseNumber"
                    variant="standard"
                    onChange={handleChangeHouseNumber}
                    onBlur={(e) => newClient.houseNumber = e.target.value}
                    InputProps={{
                        endAdornment: (
                            <HouseOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        ),
                    }}
                />
                <br />
                <div className='btnSubmit'>
                    <BootstrapButton variant="contained" onClick={handleSave}>Log in</BootstrapButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp