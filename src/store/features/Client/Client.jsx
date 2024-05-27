import * as React from 'react';
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
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

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

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleDeleteClient = (id) => {
    //dis(id)//מחיקה מהרידקס ומהsql
    }
    return (
        <Card sx={{ width: 1000 }}>
            <CardHeader sx={{ width: 200 }}
                avatar={
                    <Avatar sx={{ bgcolor: blue[500], fontFamily: 'Century' }} aria-label="recipe">
                        {client.Name?.charAt(0)}
                    </Avatar>
                }
                title={client?.Name}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary" >
                    {client?.Phone}
                    <br />
                    {client?.City}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" className='favorite'>
                    <FavoriteIcon sx={{ fontSize: 'xx-large' }} />
                </IconButton>

                <IconButton aria-label="delete from list" className='delete' onClick={(client) => handleDeleteClient(client.Id)}>
                    <DeleteForeverIcon sx={{ fontSize: 'xx-large' }} />
                </IconButton>

                {/* <IconButton aria-label="update one" className='update'>
                    <EditNoteIcon sx={{ fontSize: 'xx-large' }} />
                </IconButton> */}

<React.Fragment>
      <Button variant="none" onClick={handleClickOpen}>
      <EditNoteIcon sx={{ fontSize: 'xx-large' }} />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         {client.className}
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
        <DialogContent dividers>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
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
                            Password: {client?.Password}
                            <br />
                            Address: {client?.Address}
                            <br />
                            HouseNumber: {client?.HouseNumber}
                            <br />
                        </div>
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}
export default Client