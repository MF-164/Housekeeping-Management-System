import { useState } from 'react';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateClientOnServer } from './clientSlice';




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Client = ({ client }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = useState(false);
    let phoneFlag = false;
    let phoneFlag2 = false
    let houseNumber = false

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseWithSave =  () => {
        setOpen(false)
        let id = client.id
        dis(updateClientOnServer(id, { ...editClient, id }))
    }

    const dis = useDispatch()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleDeleteClient = (id) => {
        //dis(id)//מחיקה מהרידקס ומהsql
    }
    //const [idFlag, setIdFlag] = useState(false);
    let editClient = {}

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleBlurPhone = (e) => {
        const tel = e.target.value
        if (tel.length === 10 || tel.length === 9) {
            e.target.value = tel
            editClient.phone = tel
            phoneFlag2 = false
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

    return (
        <Card sx={{ width: 1000 }}>
            <CardHeader sx={{ width: 200 }}
                avatar={
                    <Avatar sx={{ bgcolor: blue[500], fontFamily: 'Century' }} aria-label="recipe">
                        {client.name?.charAt(0)}
                    </Avatar>
                }
                title={client?.name}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary" >
                    {client?.phone}
                    <br />
                    {client?.city}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" className='favorite'>
                    <FavoriteIcon sx={{ fontSize: 'xx-large' }} />
                </IconButton>

                <IconButton aria-label="delete from list" className='delete' onClick={(client) => handleDeleteClient(client.Id)}>
                    <DeleteForeverIcon sx={{ fontSize: 'xx-large' }} />
                </IconButton>

                <React.Fragment>
                    <Button variant="none" onClick={handleClickOpen}>
                        <EditNoteIcon sx={{ fontSize: 'xx-large' }} />
                    </Button>
                    <div className='around'>
                        <div className='contant'>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}

                            >
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                    Edit
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
                                            defaultValue={client?.name}
                                            onChange={handleChangeCity}
                                            onBlur={(e) => { editClient.name = e.target.value }}
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
                                                onBlur={(e) => { editClient.password = e.target.value }}
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
                                            onBlur={(e) => { editClient.city = e.target.value }}
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
                                            defaultValue={client?.address}
                                            onBlur={(e) => { editClient.address = e.target.value }}
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
                                            onBlur={(e) => { editClient.houseNumber = e.target.value }}
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

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><b><u>More Details:</u></b></Typography>
                    <Typography paragraph>
                        <div className='moreDetails'>
                            Password: {client?.password}
                            <br />
                            Address: {client?.address}
                            <br />
                            HouseNumber: {client?.houseNumber}
                            <br />
                        </div>
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}
export default Client