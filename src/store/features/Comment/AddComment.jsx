import React from 'react';
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';

import { useForm } from 'react-hook-form'

import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { store } from '../../app/store';
import { insertCommenForServer } from './commentSlice';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};


const AddComment = ({ cleaningLady }) => {

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    let comment = {rating:5}
    const handleCloseWithSave = () => {
        console.log({ comment });
        comment.id = 0;
        comment.sendTime = new Date();
        comment.clientId = store.getState().client.currentClient.client.id
        comment.cleaningLadyId = cleaningLady.id
            setOpen(false)
        dis(insertCommenForServer(comment))
    }
    const [open, setOpen] = React.useState(false);

    const dis = useDispatch();



    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const { register, handleSubmit, getValues, formState: { errors, dirtyFields, isDirty, isValid } } = useForm({
        mode: 'onBlur'
    })

    return (
        <div className="inputAdd" >
            <React.Fragment>

            </React.Fragment>
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <StyledFab color="primary" aria-label="add">
                            <Button variant="none" onClick={handleClickOpen}>
                                <Avatar sx={{ bgcolor: blue[500], fontFamily: 'Century', height: '80px', width: '80px' }} title="add client" aria-label="recipe">
                                    <AddIcon sx={{ fontSize: 'xxx-large' }} />
                                </Avatar>
                            </Button>
                            <div className='around'>
                                <form className='contant' >
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
                                                <StyledRating
                                                    id="rating"
                                                    name="rating"
                                                    defaultValue={5}
                                                    onClick={(e)=>comment.rating = e.target.value}
                                                    IconContainerComponent={IconContainer}
                                                    getLabelText={(value) => customIcons[value].label}
                                                    highlightSelectedOnly
                                                />
                                                <br />
                                                <TextField
                                                    id="content"
                                                    label="Content"
                                                    multiline
                                                    rows={4}
                                                    onBlur={(e)=>comment.content = e.target.value}
                                                />

                                            </DialogContentText>
                                        </DialogContent>

                                        <DialogActions sx={{ width: '150px' }}>
                                            <Button autoFocus onClick={handleCloseWithSave}>
                                                Add Comment
                                            </Button>
                                        </DialogActions>
                                    </BootstrapDialog>
                                </form>
                            </div>
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    )
}

export default AddComment