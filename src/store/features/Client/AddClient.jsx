import React from 'react';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import { blue } from '@mui/material/colors';
import { fetch3 } from './clientSlice'


const AddClient=()=>{

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickOpen = () => {
        setOpen(true);
    }
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
            phoneFlag=true
        }
        else {
            e.target.value = tel
            phoneFlag=false
        }
        phoneFlag2=false
    }
    const handleChangeHouseNumber = (e) => {
        houseNumber=false
        const num = e.target.value
        if (num.charAt(num.length - 1) > '9' || num.charAt(num.length - 1) < '0' || num.length > 2) {
            e.target.value = num.slice(0, num.length - 1)
            houseNumber=true
        }

    }
    const handleChangeCity = (e) => {
        const city = e.target.value;

        if (!((city.charAt(city.length - 1) >= 'a' && city.charAt(city.length - 1) <= 'z') ||
            (city.charAt(city.length - 1) >= 'A' && city.charAt(city.length - 1) <= 'Z') || (city.charAt(city.length - 1) === ' ')))
            e.target.value = city.slice(0, city.length - 1)

    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleCloseWithSave =  () => {
        setOpen(false)
        dis(fetch3(newClient))
    }
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = useState(false);
    let phoneFlag = false, phoneFlag2 = false,houseNumber=false;

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
    return(
        <div className="inputAdd" >

        <React.Fragment>
            <Button variant="none" onClick={handleClickOpen}>
                <Avatar sx={{ bgcolor: blue[500], fontFamily: 'Century', height: '80px', width: '80px', boxShadow: 'gray 3px 4px 8px 1px' }} title="add client" aria-label="recipe">
                    <AddIcon sx={{ fontSize: 'xxx-large' }} />
                </Avatar>
            </Button>
            <div className='around'>
                <div className='contant'>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}

                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Add
                        </DialogTitle>

                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent >
                            <DialogContentText id="alert-dialog-slide-description" sx={{ display: 'block' }}>
                               
                                <br />
                                <TextField
                                    id="input-with-sx"
                                    label="Username"
                                    variant="standard"
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
                                        onBlur={(e) =>  newClient.password = e.target.value}
                                    />
                                </FormControl>
                                <br />
                                <TextField
                                    id="input-with-sx"
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
                                {phoneFlag && <Alert severity="error">phone contains just numbers!</Alert>}
                                {phoneFlag2 && <Alert severity="warning">Invalid phone number!</Alert>}

                                <TextField
                                    id="input-with-sx"
                                    label="City"
                                    variant="standard"
                                    onChange={handleChangeCity}
                                    onBlur={(e) =>  newClient.city = e.target.value}
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
                                    onBlur={(e) =>  newClient.address = e.target.value}
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
                                    onChange={handleChangeHouseNumber}
                                    onBlur={(e) =>  newClient.houseNumber = e.target.value}
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

                        <DialogActions sx={{ width: '150px' }}>
                            <Button autoFocus onClick={handleCloseWithSave}>
                                Add Client
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            </div>
        </React.Fragment>
    </div>
    )
}

export default AddClient