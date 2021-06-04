import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Notifs from './notifs';
// import Profile from './profile';
import './downnavbar.css';
import { useHistory } from 'react-router-dom';
// import Stats from './stats';
import nirmanLogo from '../../imageassets/nirmaan.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  margin: {
    borderBottom: '3px solid green',
  },
  card: {
    backgroundColor: ' #FFFFFF',
  },
  margi: {
    borderBottom: '3px solid purple',
    borderRadius: '50px',
  },
  top: {
    marginTop: '0.77vh',
    padding: '0px',
  },
  nirman: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 'auto',
    marginLeft: '10px',
  },
  nirmanLogo: {
    width: 120,
  },
  '@media(max-width: 540px)': {
    nirmanLogo: {
      width: 100,
    },
  },
}));

export default function DownNavbar({ navHeading, name, bitsId, stats }) {
  const classes = useStyles();
  if (navHeading == null) {
    navHeading = 'Message of Joy';
  }
  let history = useHistory();

  const handler1 = () => {
    history.push('/home');
  };

  return (
    <React.Fragment>
      <div position="fixed" className={classes.appBar}>
        <Grid
          container
          direction="row"
          display="flex"
          justify="space-between"
          style={{ width: '90vw' }}
        >
          <Grid item>
            <div className={classes.nirman} id="nirman">
              <a
                href="https://instagram.com/nirmaangoa?igshid=5bld8fkffclm"
                target="_blank"
              >
                <img
                  src={nirmanLogo}
                  alt="nirman"
                  className={classes.nirmanLogo}
                />
              </a>
            </div>
          </Grid>
          <Grid item style={{ alignSelf: 'center' }} item>
            <div className="tux1" id="fre1">
              {navHeading}
            </div>
          </Grid>
          <Grid item style={{ alignSelf: 'center' }} item>
            <div></div>
          </Grid>
          {/* <Grid item xs sm md={4} lg={4} className={classes.top} id="fre2">
            <Notifs />
            <Profile name={name} bitsId={bitsId} />
            {!stats ? <Stats /> : null}
          </Grid> */}
        </Grid>
      </div>
    </React.Fragment>
  );
}
