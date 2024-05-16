import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Home = () => {

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    const cleaningLadies = useSelector(s => s.allCleaningLadies.ladies)
    return (
        <div className='home'>
            <header><h1>header</h1></header>
            <nav>
                <h1>navigate</h1>
                <Link to='./Login'>Log in</Link>
                <Link to='./SingUp'>Sing Up</Link>
            </nav>
            <main><h1>main</h1>
                {/* {cleaningLadies.map((lady, index) => {

                })} */}
                {/* <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 500,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                        Remove
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" component="div">
                                    $19.00
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper> */}
            </main>
            <footer><h1>footer</h1></footer>
        </div>
    )
}

export default Home