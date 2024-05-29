
import React from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormDetails from './FormDetails';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { fetch3 } from './clientSlice'


const UpdateClient = ({ client, id }) => {
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

    return (<>
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
                        <FormDetails client={client} id={id} />

                        <DialogActions sx={{ width: '150px' }}>
                            <Button autoFocus onClick={handleCloseWithSave}>
                                Save
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            </div>

        </React.Fragment></>)
}
export default UpdateClient