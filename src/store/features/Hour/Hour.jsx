import React,{ useState } from 'react';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';

import './Hour.scss'
import { Button } from '@mui/material';

const Hour = ({ hour }) => {
    const [choose, setChoose] = useState(false)
    const [errorChoose, setErrorChoose] = useState(false)
    const [choises, setChoises] = useState([])
    React.useEffect(() => {
        const interval = setInterval(() => {
            setErrorChoose(false)
        }, 1000);

        return () => clearInterval(interval);
    }, [errorChoose]);

    const handleClick = (time) => {
        console.log(typeof time);
        let times = time.split('-')
        let from = parseInt(times[0])
        let to = parseInt(times[1])
        if (choises.length === 0 || choises[choises.length - 1].to === from) {
            let copy = [...choises, { from, to, dayId: hour.dayId }]
            console.log({copy});
            setChoises([...copy])
            console.log({choises});
            setChoose(true)
        }
        else {
            console.log('from:' + from + ' to:' + to + ' id:' + hour.dayId)
            setErrorChoose(true)
        }
    }

    return (<>

        {!errorChoose && !choose &&
            <Button onClick={(e) => handleClick(e.target.innerText)}>
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
        {choose && <Card sx={{ width: 500 }} onClick={() => setChoose(false)}>
            <CardContent>

                <Typography variant="body2" color="text.secondary" >
                    <p>
                        <DoneOutlineIcon sx={{ fontSize: "2cm" }} color="success" />
                    </p>
                </Typography>
            </CardContent>
        </Card>}
        {errorChoose && <Card sx={{ width: 500 }} onClick={() => setChoose(!choose)}>
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