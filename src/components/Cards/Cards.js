
import { Card, CardContent, Typography, Grid } from '@mui/material'
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data }) => {
    console.log(data);

    if (!data) {
        return <h1>Loading...</h1>
    }



    return (
        <div className={styles.container} >
            <Grid container spacing={3} justify="center">


                <Grid item xs={12} md={6} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={data.TotalConfirmed} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(data.Date).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Infected overall
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={6} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={data.TotalDeaths} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(data.Date).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Deaths overall
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );

}

export default Cards;