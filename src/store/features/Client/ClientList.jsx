import Client from "./Client";
import List from '@mui/material/List';
import './ClientStyle.scss'
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
const ClientList = ({ allClients }) => {
    //const allClients=useSelector(store.)
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [phoneFlag, setPhoneFlag] = useState(false);
    const [phoneFlag2, setPhoneFlag2] = useState(false);
    const [houseNumber, setHouseNumber] = useState(false);
    let newClient = {}

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleBlurPhone = (e) => {
        const tel = e.target.value
        if (tel.length === 10 || tel.length === 9) {
            e.target.value = tel
            setPhoneFlag2(false)
        }
        else {
            setPhoneFlag2(true)
        }
    }
    const handleChangePhone = (e) => {
        const tel = e.target.value

        if (tel.charAt(tel.length - 1) > '9' || tel.charAt(tel.length - 1) < '0' || tel.length > 10) {
            e.target.value = tel.slice(0, tel.length - 1)
            setPhoneFlag(true)
        }
        else {
            e.target.value = tel
            setPhoneFlag(false)
        }
        setPhoneFlag2(false)
    }

    const handleChangeHouseNumber = (e) => {
        setHouseNumber(false)
        const num = e.target.value
        if (num.charAt(num.length - 1) > '9' || num.charAt(num.length - 1) < '0' || num.length > 2) {
            e.target.value = num.slice(0, num.length - 1)
            setHouseNumber(true)
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
    };
    const handleCloseWithSave = () => {
        setOpen(false)

        alert('save data')
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
            <div className="all">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {allClients.map(
                        client => <div key={client.Id} className="card"><Client client={client}></Client></div>
                    )}
                </List>
            </div>
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
                                            />
                                        </FormControl>
                                        <br />
                                        <TextField
                                            id="input-with-sx"
                                            label="Phone"
                                            variant="standard"
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
                                            onChange={handleChangeCity}
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
                                        Save changes
                                    </Button>
                                </DialogActions>
                            </BootstrapDialog>
                        </div>
                    </div>
                </React.Fragment>
            </div>

        </>
    )
}
export default ClientList