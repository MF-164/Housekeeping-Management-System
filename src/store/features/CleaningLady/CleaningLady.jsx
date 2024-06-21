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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentOrder } from '../Order/orderSlice';
import { useNavigate } from 'react-router-dom';
import { store } from '../../app/store';
import { updateCurrentCleaningLady } from './cleaningLadySlice';



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

const CleaningLady = ({ cleaningLady }) => {
    const [hasComment, setHasComment] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [writeComment, setWriteComment] = React.useState(false)
    let dis = useDispatch();
    let navigate = useNavigate()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleWriteComment = () => {
        dis(updateCurrentCleaningLady(cleaningLady))
        navigate('comment')
    }
    const openOrder = () => {
        dis(updateCurrentOrder({ cleaningLadyId: cleaningLady.id }))
        dis(updateCurrentCleaningLady(cleaningLady))
        navigate('day')
    }
    const getStatus=(status)=>{
        switch(status){
            case 0:return 'single'
            case 1:return 'married'
            case 2:return 'divorced'
            case 3:return 'widowed'
            default : return 'none'
        }
    }
    return (
        <>
            <Card sx={{ width: 1000 }} >
                <CardHeader sx={{ width: 200 }}
                    onClick={openOrder}
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {cleaningLady.firstName?.charAt(0).toUpperCase() + cleaningLady.lastName?.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={cleaningLady?.firstName + "  " + cleaningLady?.lastName}
                    subheader={cleaningLady?.phone}

                />
                <CardContent onClick={openOrder}>
                    <Typography variant="body2" color="text.secondary">
                        {cleaningLady?.city}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" color='red'
                    >
                        {hasComment ? <FavoriteIcon onClick={handleWriteComment} sx={{ color: red[500] }} />
                            : <FavoriteIcon onClick={handleWriteComment} />}
                    </IconButton>

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
                                HourlyPrice:{cleaningLady?.hourlyPrice}
                                <br />
                                Address: {cleaningLady?.address}
                                <br />
                                HouseNumber: {cleaningLady?.houseNumber}
                                <br />
                                OriginCountry: {cleaningLady?.originCountry}
                                <br />
                                Status: {getStatus(cleaningLady?.status)}
                                <br />
                            </div>
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}
export default CleaningLady