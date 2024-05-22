
//     {/* <p>
//         <label>Id:{cleaningLady.Id}</label><br/>
//         <label>FirstName:{cleaningLady?.FirstName}</label><br/>
//         <label>LastName:{cleaningLady?.LastName}</label><br/>
//         <label>Phone:{cleaningLady?.Phone}</label><br/>
//         <label>OriginCountry:{cleaningLady?.OriginCountry}</label><br/>
//         <label>City:{cleaningLady.City}</label><br/>
//         <label>Address:{cleaningLady?.Address}</label><br/>
//         <label>HouseNumber:{cleaningLady?.HouseNumber}</label><br/>
//         <label>Status:{cleaningLady?.Status}</label><br/>
//         <label>HourlyPrice:{cleaningLady?.HourlyPrice}</label><br/>
//     </p> */}
//     </>)
// }



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
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

const CleaningLady = ({ cleaningLady }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [writeComment, setWriteComment] = React.useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleWriteComment = () => {
        setWriteComment(!writeComment)
    }
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {cleaningLady.FirstName?.charAt(0) + cleaningLady.LastName?.charAt(0)}
                        </Avatar>
                    }
                    // action={
                    //   <IconButton aria-label="settings"
                    //   >
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    title={cleaningLady?.FirstName + "  " + cleaningLady?.LastName}
                    subheader={cleaningLady?.Phone}

                />
                {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {cleaningLady?.City}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites"
                        >
                        <FavoriteIcon onClick={handleWriteComment} />
                    </IconButton>
                    {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
                            HourlyPrice:{cleaningLady?.HourlyPrice}
                            <br />
                            Address: {cleaningLady?.Address}
                            <br />
                            HouseNumber: {cleaningLady?.HouseNumber}
                            <br />
                            OriginCountry: {cleaningLady?.OriginCountry}
                            <br />
                            Status: {cleaningLady?.Status}
                            <br />
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
            {writeComment && <label>write a comment......</label>}
        </>
    );
}
export default CleaningLady