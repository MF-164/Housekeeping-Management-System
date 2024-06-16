import React from 'react';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';

import './Day.scss'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCurrentDay } from './daySlice';

const Day = ({ day}) => {
    let navigate = useNavigate()
    let dispatch = useDispatch()

    const handleClick = () => {
        dispatch(updateCurrentDay(day))
        navigate('hour/'+day.id)
    }

    return (<>
            <Button>
                <Card sx={{ width: 500 }} onClick = {handleClick}>
                    <CardContent>

                        <Typography variant="body2" color="text.secondary" >
                            <p >
                                <span > {day.date}</span>
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </Button>
    </>)
}

export default Day