import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton'
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';


const FormDetails = ({ client, id }) => {
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    const handleBlurPhone = (e) => {
        const tel = e.target.value
        if (tel.length === 10 || tel.length === 9) {
            e.target.value = tel
            phoneFlag2 = false
            newClient.phone = tel
        }
        else {
            phoneFlag2 = true
        }
    }
    const handleChangePhone = (e) => {
        const tel = e.target.value

        if (tel.charAt(tel.length - 1) > '9' || tel.charAt(tel.length - 1) < '0' || tel.length > 10) {
            e.target.value = tel.slice(0, tel.length - 1)
            phoneFlag = true
        }
        else {
            e.target.value = tel
            phoneFlag = false
        }
        phoneFlag2 = false
    }
    const handleChangeHouseNumber = (e) => {
        houseNumber = false
        const num = e.target.value
        if (num.charAt(num.length - 1) > '9' || num.charAt(num.length - 1) < '0' || num.length > 2) {
            e.target.value = num.slice(0, num.length - 1)
            houseNumber = true
        }

    }
    const handleChangeCity = (e) => {
        const city = e.target.value;

        if (!((city.charAt(city.length - 1) >= 'a' && city.charAt(city.length - 1) <= 'z') ||
            (city.charAt(city.length - 1) >= 'A' && city.charAt(city.length - 1) <= 'Z') || (city.charAt(city.length - 1) === ' ')))
            e.target.value = city.slice(0, city.length - 1)

    }
  
    const [showPassword, setShowPassword] = useState(false);
    let phoneFlag = false, phoneFlag2 = false, houseNumber = false;

    let newClient = {}

    const dis = useDispatch();



    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));
    return (
        <>
            <DialogContent >
                <DialogContentText id="alert-dialog-slide-description" sx={{ display: 'block' }}>
                    <br />

                    <TextField
                        id="input-with-sx"
                        label="Username"
                        variant="standard"
                        defaultValue={client?.name}
                        onChange={handleChangeCity}
                        onBlur={(e) => newClient.name = e.target.value}
                        InputProps={{
                            endAdornment: (
                                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            ),
                        }}
                    />
                    <br />

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            defaultValue={client?.password}
                            onBlur={(e) => newClient.password = e.target.value}
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
                    <br />
                    <TextField
                        id="input-with-sx"
                        label="Phone"
                        variant="standard"
                        defaultValue={client?.phone}
                        onChange={handleChangePhone}
                        onBlur={handleBlurPhone}
                        InputProps={{
                            endAdornment: (
                                <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            ),
                        }}
                    />
                    <br />
                    {phoneFlag && <Alert severity="error">phone contains just numbers!</Alert>}
                    {phoneFlag2 && <Alert severity="warning">Invalid phone number!</Alert>}

                    <TextField
                        id="input-with-sx"
                        label="City"
                        variant="standard"
                        defaultValue={client?.city}
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
                        id="input-with-sx"
                        label="Address"
                        variant="standard"
                        defaultValue={client?.address}
                        onBlur={(e) => newClient.address = e.target.value}
                        InputProps={{
                            endAdornment: (
                                <HomeWorkOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            ),
                        }}
                    />
                    <br />
                    <TextField
                        id="input-with-sx"
                        label="HouseNumber"
                        variant="standard"
                        defaultValue={client?.houseNumber}
                        onChange={handleChangeHouseNumber}
                        onBlur={(e) => newClient.password = e.target.value}
                        InputProps={{
                            endAdornment: (
                                <HouseOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            ),
                        }}
                    />
                    {houseNumber && <Alert severity="error">you type uncorrect tav</Alert>}
                    <br />
                </DialogContentText>
            </DialogContent>

        </>
    )
}
export default FormDetails