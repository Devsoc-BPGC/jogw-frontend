import { React, useState, Fragment, useEffect, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../download/download.css';
import DownloadCards from '../download/downloadcards';
// import SendMessagePopup from '../letterpopup/SendMessagePopup';
export const Data = createContext();
import axios from 'axios';
export const Data1 = createContext();
import DownNavbar from './downnavbar';
import { Redirect } from 'react-router-dom';
import URL from '../util/url';
import '../download/loader.css';
import SaveIcon from '@material-ui/icons/Save';
import devSocLogo from '../../imageassets/DevSoc.png';
import { GetApp } from '@material-ui/icons';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0px',
      backgroundColor: '#FFF4F1',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#FFF4F1',
      borderRight: '3px solid #FFF4F1',
      borderLeft: '3px solid #FFF4F1',
    },
  },
  root: {
    backgroundColor: '#FFF4F1',
    width: '100%',
    overflowX: 'hidden',
  },
  messages: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '0px auto 40px auto',
    minHeight: '30vh',
  },
  // tab: {
  //   borderRadius: '10px 10px 0 0',
  //   width: '30%',
  //   textAlign: 'center',
  // },
  // tabButton: {
  //   fontWeight: '700',
  //   fontSize: '20px',
  //   textTransform: 'none',
  //   width: '100%',
  //   fontFamily: 'oxygen',
  //   borderRadius: '10px 10px 0 0',
  // },
  // tabs: {
  //   backgroundColor: '#EF4646',
  //   padding: '20px 0px 0px 10px',
  //   display: 'flex',
  //   justifyContent: 'space-evenly',
  // },
  // tabs1: {
  //   backgroundColor: '#EF4646',
  //   padding: '10px 0px 0px 5px',
  //   display: 'flex',
  //   justifyContent: 'space-evenly',
  // },
  mainContent: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    margin: '0px auto',
  },
  cA: {
    display: 'flex',
    flexDirection: 'column',
  },
  c1: {
    padding: '2rem 0rem 0rem 4rem',
    width: '92vw',
  },
  c2: {
    width: '92vw',
  },
  // fab: {
  //   width: '100%',
  //   height: '100%',
  //   zIndex: 1,
  // },
  // fabButton: {
  //   position: 'fixed',
  //   bottom: 1,
  //   right: 1,
  //   margin: '0rem 2rem 2rem 0rem',
  // },
  // fabButtonIcon: {
  //   transform: 'scale(3)',
  // },
  hot: {
    color: '#EF4646',
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: '2.6vmax',
  },
  hot1: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: '2.2vmax',
  },
  inner: {
    backgroundColor: '#FFF4F1',
    borderRadius: '10px 10px 0 0',
    padding: '1.5rem',
    minHeight: '79.5vh',
    '@media(max-height 900px)': {
      minHeight: '72vh',
    },
  },
  footer: {
    width: '100%',
    backgroundColor: '#EF4646',
    height: '1px',
  },
  downButton: {
    float: 'right',
    backgroundColor: '#F5D1D1',
    color: 'black',
  },
  downfoot: {
    textAlign: 'center',
    color: '#6B6B6B',
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: '1.8vmax',
  },
  devSocLogo: {
    width: 45,
    verticalAlign: 'middle',
  },
  '@media(min-width: 320px)': {
    cA: {
      padding: 0,
      width: '100vw',
    },
    c1: {
      padding: 0,
    },
    c2: {
      padding: 0,
      width: 'max-content',
      textAlign: 'center',
    },
    hot: {
      fontSize: '1.5rem',
    },
    hot1: {
      fontSize: '1rem',
    },
    messages: {
      minHeight: '40vh',
    },
    // fabButton: {
    //   margin: '0rem 1rem 1rem 0rem',
    // },
    // fabButtonIcon: {
    //   transform: 'scale(2)',
    // },
  },
  '@media(min-width: 360px)': {
    messages: {
      minHeight: '45vh',
    },
    // fabButtonIcon: {
    //   transform: 'scale(3)',
    // },
  },
  '@media(min-width: 414px)': {
    messages: {
      minHeight: '60vh',
    },
    // fabButton: {
    //   margin: '0rem 2rem 2rem 0rem',
    // },
    // fabButtonIcon: {
    //   transform: 'scale(3)',
    // },
  },
  '@media(min-width: 768px)': {
    cA: {
      padding: '0rem 1rem',
      width: 'max-content',
      alignItems: 'flex-start',
    },
    c1: {
      width: '92vw',
      textAlign: 'left',
    },
    c2: {
      width: '92vw',
    },
    hot: {
      paddingLeft: '2rem',
      fontSize: '2rem',
    },
    hot1: {
      fontSize: '1.5rem',
    },
    messages: {
      minHeight: '50vh',
    },
    downButton: {
      marginTop: '0.5rem',
    },
  },
  '@media(min-width: 1024px)': {
    messages: {
      minHeight: '40vh',
    },
    downButton: {
      marginTop: '0.5rem',
    },
  },
}));

export default function Download() {
  window.history.replaceState(null, null, '/download');

  const classes = useStyles();

  const token = localStorage.getItem('token');
  if (token === null) return <Redirect to="/" />;

  const [fix, setfix] = useState(0);
  const [load, setload] = useState(true);
  const [instructionDialogOpen, setInstructionDialogOpen] = useState(true);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const [count, setcount] = useState();

  async function call1() {
    setload(true);
    try {
      let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var r = await response.data.data;
      // if (r.length > 15) {
      //   setX1('#C4C4C4');
      //   setX2('#EF4646');
      // } else {
      //   setX1('#C4C4C4');
      //   setX2('#EF4646');
      // }
      setGet([...r].reverse());
      setload(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(async () => {
    setload(true);
    try {
      let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
        method: 'GET',
        headers: { token: `${token}` },
      });
      var r = await response.data.data;
      // if (r.length > 15) {
      //   setX1('#C4C4C4');
      //   setX2('#EF4646');
      // } else {
      //   setX1('#C4C4C4');
      //   setX2('#EF4646');
      // }
      setGet([...r].reverse());
      setload(false);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  // async function call2() {
  //   setload(true);
  //   try {
  //     let response = await axios.get(`${URL}/api/level0/sentmessages`, {
  //       method: 'GET',
  //       headers: { token: `${token}` },
  //     });
  //     var t = await response.data.data;
  //     if (t.length > 15) {
  //       setX1('#C4C4C4');
  //       setX2('#EF4646');
  //     } else {
  //       setX1('#C4C4C4');
  //       setX2('#EF4646');
  //     }
  //     setGet([...t].reverse());
  //     setload(false);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  const [get, setGet] = useState([]);

  // const [color, setColor] = useState('#FFFDE8');

  // const inboxClick = () => {
  //   setColor('#FFFDE8');
  //   setColor1('#FB8989');
  //   call1();
  //   setfix(0);
  //   seti(0);
  // };

  // const [color1, setColor1] = useState('#FB8989');

  // const sendClick = () => {
  //   call2();
  //   setColor1('#FFFDE8');
  //   setColor('#FB8989');
  //   seti(0);
  //   setfix(1);
  // };
  const [i, seti] = useState(0);
  // const [x1, setX1] = useState('#C4C4C4');
  // const [x2, setX2] = useState('#EF4646');

  const userdata = JSON.parse(window.atob(token.split('.')[1]));

  // const hc1 = (e) => {
  //   if (i > 15) {
  //     seti(i - 15);

  //     setX1('#EF4646');
  //     setX2('#EF4646');
  //   } else if (i <= 15) {
  //     seti(0);
  //     setX1('#C4C4C4');
  //     setX2('#EF4646');
  //   }
  // };
  // const hc2 = (e) => {
  //   if (i + 15 < get.length - 15) {
  //     seti(i + 15);
  //     setX1('#EF4646');
  //     setX2('#EF4646');
  //   } else if (get.length - (i + 15) < 15 && get.length - (i + 15) > 0) {
  //     seti(i + 15);
  //     setX2('#C4C4C4');
  //     setX1('#EF4646');
  //   } else if (i + 15 == get.length - 15) {
  //     seti(i + 15);
  //     setX2('#C4C4C4');
  //     setX1('#EF4646');
  //   } else {
  //     seti(i);
  //     setX2('#C4C4C4');
  //   }
  // };
  // const [enables, setEnables] = useState(false);

  const addIconClick = () => {
    window.print();
  };

  return (
    <Fragment>
      {/* instructions dialog */}
      <Dialog
        open={instructionDialogOpen}
        onClose={() => setInstructionDialogOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{
            color: '#ef4646',
          }}
        >
          {'Instructions'}
        </DialogTitle>
        <DialogContent>
          <ol type={'1'}>
            <li>{'Press the download button on top'}</li>
            <li>{'Print dialog would open, select save as PDF'}</li>
            <li>
              <b>{'Important: '}</b>
              {
                'select the "background graphics" option in the dialog so that you get the colours in the page'
              }
            </li>
          </ol>
          <DialogContentText>
            <span style={{ margin: '1rem 0' }}>
              {'This is due to platform limitations.'}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setInstructionDialogOpen(false)}
            style={{
              color: '#ef4646',
            }}
          >
            Got It!
          </Button>
        </DialogActions>
      </Dialog>

      <div className={classes.root} id="root">
        {/* <SendMessagePopup
          count={count}
          setcount={setcount}
          call2={call2}
          setload={setload}
          setX2={setX2}
          get={get}
          fix={fix}
          enabled={enables}
          toggleVisibility={addIconClick}
          key={'SendMessagePopupKey-' + enables}
        /> */}
        <div style={{ width: '100vw' }}>
          <DownNavbar name={userdata.name} bitsId={userdata.bitsId} />
        </div>
        {/* <div className={classes.tabs} id="top">
          <Box className={classes.tab} style={{ backgroundColor: color }}>
            <Button
              className={classes.tabButton}
              disabled={load}
              onClick={inboxClick}
            >
              Inbox
            </Button>
          </Box>
          <Box className={classes.tab} style={{ backgroundColor: color1 }}>
            <Button
              className={classes.tabButton}
              disabled={load}
              onClick={sendClick}
            >
              Sent
            </Button>
          </Box>
        </div> */}

        {/*Welcome message and heading*/}

        <div className={classes.mainContent}>
          {/* <div className={classes.fab}>
            <IconButton
              className={classes.fabButton}
              onClick={addIconClick}
              style={{ color: '#EF4646' }}
            >
              <AddCircleIcon className={classes.fabButtonIcon} id="fab" />
              Export
            </IconButton>
          </div> */}
          <Box className={classes.inner}>
            <Box className={classes.cA}>
              <Box className={classes.c1}>
                <Typography
                  className={classes.hot}
                  style={{ display: 'inline-flex' }}
                >
                  {/* Welcome{' '}
                   */}
                  To{' '}
                  {userdata.name
                    .split(' ')
                    .slice(0, 1)
                    .join(' ')
                    .charAt(0)
                    .toUpperCase() +
                    userdata.name
                      .split(' ')
                      .slice(0, 1)
                      .join(' ')
                      .toLowerCase()
                      .slice(1)}
                  ,
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.downButton}
                  onClick={addIconClick}
                >
                  <GetApp />
                </Button>
              </Box>
            </Box>

            {load ? (
              <div className={classes.messages}>
                <Container>
                  <div className="spinwrap">
                    <div className="spinner">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </Container>
              </div>
            ) : (
              <Fragment>
                <div className={classes.messages}>
                  <Container>
                    <Data.Provider value={{ get }}>
                      <Data1.Provider value={i}>
                        <DownloadCards
                          fix={fix}
                          setGet={setGet}
                          setload={setload}
                        />
                      </Data1.Provider>
                    </Data.Provider>
                  </Container>
                </div>

                {/* <Grid
                  container
                  direction="row"
                  justify="center"
                  display="flex"
                  alignItems="center"
                >
                  <Grid item style={{ textAlign: 'center' }}>
                    <svg
                      onClick={hc1}
                      width="35"
                      height="23"
                      viewBox="0 0 48 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.46392e-07 11.5L47.25 22.3253L47.25 0.674681L5.46392e-07 11.5Z"
                        fill={x1}
                      />
                    </svg>
                  </Grid>
                  <Grid item style={{ textAlign: 'center' }}>
                    <Button
                      className="ken"
                      style={{
                        fontWeight: '700',
                        textTransform: 'none',
                        fontFamily: 'Oxygen',
                        margin: '1vw',
                      }}
                    >
                      Showing {get.length > 0 ? i + 1 : i}-
                      {i + 15 < get.length ? i + 15 : get.length} of{' '}
                      {get.length}
                    </Button>
                  </Grid>
                  <Grid item style={{ textAlign: 'center' }}>
                    <svg
                      onClick={hc2}
                      width="35"
                      height="23"
                      viewBox="0 0 48 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48 11.5L0.749999 22.3253L0.75 0.674681L48 11.5Z"
                        fill={get.length > 15 ? x2 : x1}
                      />
                    </svg>
                  </Grid>
                </Grid> */}
                <Typography className={classes.downfoot}>
                  Made with{'  '}
                  <svg
                    height="20pt"
                    viewBox="0 -20 480 480"
                    width="20pt"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ verticalAlign: 'middle' }}
                  >
                    <path
                      d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      fill="#ff6243"
                    />
                    <path
                      d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      fill="#3e3d42"
                    />
                  </svg>
                  {'  '}
                  by{' '}
                  <a href="https://devsoc.club/" target="_blank">
                    <img
                      src="https://devsoc.club/assets/img/logo.png"
                      alt="DevSoc"
                      className={classes.devSocLogo}
                    />
                  </a>
                </Typography>
              </Fragment>
            )}
          </Box>
          {/* <div className={classes.tabs1} id="top"></div> */}
        </div>
        {/* <div className={classes.footer} /> */}
      </div>
    </Fragment>
  );
}
