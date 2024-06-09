import React from 'react';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';

import './Day.scss'
import { Button } from '@mui/material';

const Day = ({ day}) => {
    return (<>
            <Button>
                <Card sx={{ width: 500 }}>
                    <CardContent>

                        <Typography variant="body2" color="text.secondary" >
                            <p >
                                <span > {day.date.toLocaleDateString()}</span>
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </Button>
    </>)
}

export default Day