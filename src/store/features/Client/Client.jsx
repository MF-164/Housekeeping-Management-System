import { useState } from 'react';

import React from 'react';

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

import FavoriteIcon from '@mui/icons-material/Favorite';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateClient from './UpdateClient';




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
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//       padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//       padding: theme.spacing(1),
//     },
//   }));
// const Client = ({ client }) => {
//     const [expanded, setExpanded] = React.useState(false);
//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//       setOpen(true);
//     };
//     const handleClose = () => {
//       setOpen(false);
//     };
//         padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//         padding: theme.spacing(1),
//     },
// }));
const Client = ({ client }) => {
    const [expanded, setExpanded] = React.useState(false);
    // const [open, setOpen] = React.useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    // const [phoneFlag, setPhoneFlag] = useState(false);
    // const [phoneFlag2, setPhoneFlag2] = useState(false);
    // const [houseNumber,setHouseNumber] = useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const handleCloseWithSave =()=>{
    //     setOpen(false)
    // }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleDeleteClient = (id) => {
        //dis(id)//מחיקה מהרידקס ומהsql
    }
    //const [idFlag, setIdFlag] = useState(false);


    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    // const handleBlurPhone = (e) => {
    //     const tel = e.target.value
    //     if (tel.length === 10 || tel.length === 9) {
    //         e.target.value = tel
    //         setPhoneFlag2(false)
    //     }
    //     else {
    //         setPhoneFlag2(true)
    //     }



    // }
    // const handleChangePhone = (e) => {
    //     const tel = e.target.value

    //     if (tel.charAt(tel.length - 1) > '9' || tel.charAt(tel.length - 1) < '0' || tel.length > 10) {
    //         e.target.value = tel.slice(0, tel.length - 1)
    //         setPhoneFlag(true)
    //     }
    //     else {
    //         e.target.value = tel
    //         setPhoneFlag(false)
    //     }
    //     setPhoneFlag2(false)
    // }
    // const handleChangeID = (event) => {
    //     const id = event.target.value;

    //     if (id.charAt(id.length - 1) > '9' || id.charAt(id.length - 1) < '0') {
    //         event.target.value = id.slice(0, id.length - 1);
    //     }
    //     if (id.length > 9) {
    //         event.target.value = id.slice(0, 9);
    //     }
    // };


    // const handleChangeHouseNumber = (e) => {
    //     setHouseNumber(false)
    //     const num = e.target.value
    //     if (num.charAt(num.length - 1) > '9' || num.charAt(num.length - 1) < '0' || num.length > 2){
    //         e.target.value = num.slice(0, num.length - 1)
    //         setHouseNumber(true)
    //     }

    // }
    // const handleChangeCity = (e) => {
    //     const city = e.target.value;

    //     if (!((city.charAt(city.length - 1) >= 'a' && city.charAt(city.length - 1) <= 'z') ||
    //         (city.charAt(city.length - 1) >= 'A' && city.charAt(city.length - 1) <= 'Z') || (city.charAt(city.length - 1) === ' ')))
    //         e.target.value = city.slice(0, city.length - 1)

    // }

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
                <UpdateClient client={client} id={client?.id} />
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