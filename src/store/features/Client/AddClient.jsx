import React from 'react';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
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
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux'
import { blue } from '@mui/material/colors';
import { fetch3 } from './clientSlice'
import FormDetails from './FormDetails';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';



const AddClient = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleCloseWithSave = async () => {
        setOpen(false)
        await dis(fetch3(newClient))
    }

    return (
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
                            <FormDetails edit={false} />
                            <DialogActions sx={{ width: '150px' }}>
                                <Button autoFocus onClick={handleCloseWithSave}>
                                    Save
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