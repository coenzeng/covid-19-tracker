import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { styles } from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
console.log(confirmed)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ confirmed.value } duration={2.5} seperation=","/>  

                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Infected</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="body2">Infected</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="body2">Infected</Typography>
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    ) 
}

export default Cards;