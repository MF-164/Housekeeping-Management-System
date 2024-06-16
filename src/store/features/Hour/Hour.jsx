import React, { useState } from 'react';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';

import './Hour.scss'
import { Button } from '@mui/material';

const Hour = ({ hour, errorChoose, choose }) => {
    let { errorChoises, index, setErrorChoises } = errorChoose
    React.useEffect(() => {
        const interval = setInterval(() => {
            let copy = errorChoises.map((choose, i) => {
                if (i === index)
                    return false
                else
                    return choose
            })
            setErrorChoises(copy)
        }, 1000);

        return () => clearInterval(interval);
    }, [errorChoises[index]]);

    
    return (<>

        {!errorChoises[index] && !choose &&
            <Button>
                <Card sx={{ width: 500 }} >
                    <CardContent>

                        <Typography variant="body2" color="text.secondary" >
                            <p >
                                <AccessTimeSharpIcon fontSize="large" />
                                <span > {hour.from} - {hour.to}</span>
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </Button>}
        { choose && <Card sx={{ width: 500 }} >
            <CardContent>

                <Typography variant="body2" color="text.secondary" >
                    <p>
                        <DoneOutlineIcon sx={{ fontSize: "2cm" }} color="success" />
                    </p>
                </Typography>
            </CardContent>
        </Card>}
        {!choose&& errorChoises[index] && <Card sx={{ width: 500 }} >
            <CardContent>

                <Typography variant="body2" color="text.secondary" >
                    <p>
                        <DoNotDisturbOnTotalSilenceIcon sx={{ fontSize: "2cm" }} color="error" />
                    </p>
                </Typography>
            </CardContent>
        </Card>}
    </>)
}

export default Hour