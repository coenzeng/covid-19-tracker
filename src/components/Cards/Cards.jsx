import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
      <CardComponent
          className={styles.infected}
          cardTitle="COVID-19 Tracker"
          value='<a href="https://github.com/coenzeng/covid-19-tracker"><img src="https://img.icons8.com/color/48/000000/github--v1.png"/></a>'
      cardSubtitle='API used: <a href="https://covid19.mathdro.id/api">https://covid19.mathdro.id/api</a>'
        />
        <CardComponent
          className={styles.infected}
          cardTitle="Confirmed"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};
export default Info;
