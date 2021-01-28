import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './LetterPopup.css';
import URL from '../util/url';
import axios from 'axios';
import img from './../../imageassets/letter-coloured.svg';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  noMessages: {
    position: 'absolute',
    transform: 'translate(90%, 90%)',
  },
}));

export default function ReadMessagePopup({
  enabled,
  startFrom,
  messageArray,
  toggleVisibility,
  setGet,
  handler1,
  fix,
}) {
  const [currentPosition, setCurrentPosition] = useState(startFrom);
  const [componentEnabled, setComponentEnabled] = useState(enabled);
  const [spinner, setSpinner] = useState(true);
  React.useEffect(async () => {
    //return () => {
    await setComponentEnabled(enabled);
    await setTimeout(() => setSpinner(false), 1500);
    //;
  }, [enabled]);

  //---Next----//

  let nextMessage = () => {
    let newPosition;
    if (currentPosition == messageArray.length - 1) newPosition = 0;
    else newPosition = currentPosition + 1;
    setCurrentPosition(newPosition);
    if (
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] == 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition + 1][2],
              }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[currentPosition][2] }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] == 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition + 1][2],
              }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] != 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[currentPosition][2] }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] != 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[currentPosition][2] }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] == 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] == 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[0][2],
              }),
            })
          ).json();
          if (response.ok) {
            console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[currentPosition][2] }),
            })
          ).json();
          if (response.ok) {
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition + 1 == messageArray.length &&
      messageArray[0][3] != 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition + 1 < messageArray.length &&
      messageArray[currentPosition + 1][3] != 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    }
  };

  //---Prev----//

  let prevMessage = () => {
    let newPosition;
    if (currentPosition == 0) newPosition = messageArray.length - 1;
    else newPosition = currentPosition - 1;
    setCurrentPosition(newPosition);
    //console.log(messageArray[currentPosition][2]);
    if (
      currentPosition - 1 >= 0 &&
      messageArray[currentPosition - 1][3] == 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }

        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[currentPosition][2] }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition - 1 >= 0 &&
      messageArray[currentPosition - 1][3] == 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition - 1 >= 0 &&
      messageArray[currentPosition - 1][3] != 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[currentPosition][2],
              }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] == 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[messageArray.length - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }

        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] != 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] == 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[messageArray.length - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] != 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition == 0 &&
      messageArray[messageArray.length - 1][3] == 0 &&
      messageArray[currentPosition][3] == 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({
                id: messageArray[messageArray.length - 1][2],
              }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }

        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[0][2] }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    } else if (
      currentPosition == 0 &&
      messageArray[currentPosition - 1][3] != 0 &&
      messageArray[currentPosition][3] != 0 &&
      fix == 0
    ) {
      async function postRead() {
        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }
      postRead();
    }
  };

  //---HideMe----//

  let hideMe = () => {
    toggleVisibility(false);
    if (messageArray[currentPosition][3] == 0 && fix == 0) {
      async function postRead() {
        //console.log(fix);

        try {
          //console.log(get);
          const response = await (
            await fetch(`${URL}/api/level0/markasread`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: `${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ id: messageArray[currentPosition][2] }),
            })
          ).json();
          if (response.ok) {
            //setRead(response);
            //console.log(response);
          }
        } catch (error) {
          console.error(error.message);
        }

        try {
          let response = await axios.get(`${URL}/api/level0/receivedmessages`, {
            method: 'GET',
            headers: { token: `${localStorage.getItem('token')}` },
          });
          var r = await response.data.data;
          //setload(false);
          //console.log(response);
          setGet([...r].reverse());
        } catch (error) {
          console.error(error.message);
        }
      }

      postRead();
    }
  };

  if (componentEnabled)
    return (
      <SendMessage
        spinner={spinner}
        messageArray={messageArray}
        currentPosition={currentPosition}
        next={nextMessage}
        prev={prevMessage}
        hideMe={hideMe}
      />
    );
  else return <></>;
}

function SendMessage({
  messageArray,
  currentPosition,
  next,
  prev,
  hideMe,
  spinner,
}) {
  const classes = useStyles();
  const dateFormatter = (timestamp) => {
    var date = new Date(timestamp);
    var day =
      date.getDate() == 1
        ? date.getDate() + 'st  '
        : date.getDate() == 2
        ? date.getDate() + 'nd  '
        : date.getDate() == 3
        ? date.getDate() + 'rd  '
        : date.getDate() == 21
        ? date.getDate() + 'st  '
        : date.getDate() == 22
        ? date.getDate() + 'nd  '
        : date.getDate() == 23
        ? date.getDate() + 'rd  '
        : date.getDate() + 'th ';
    var month = date.toLocaleString('default', { month: 'short' }) + ' ';
    var year = date.getFullYear() + ', ';
    var time = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return day + month + year + time;
  };

  return (
    <div className="letterpopup-classes-root">
      <React.Fragment>
        {spinner ? (
          <CircularProgress
            className="letterpopup-classes-cross2"
            style={{ color: '#fffbeb' }}
          />
        ) : (
          <div className="letterpopup-classes-cross" onClick={hideMe} />
        )}

        <Paper
          elevation={0}
          className="letterpopup-classes-message"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="letterpopup-classes-dateTime">
            {
              //dateFormatter(messageArray[currentPosition][1])
            }
          </div>
          <div className="letterpopup-classes-messageBoxesWrapper">
            <div className="letterpopup-classes-messageBody">
              {spinner ? (
                <div
                //className={classes.noMessages}
                //elevation={0}
                //className="letterpopup-classes-message"
                ></div>
              ) : (
                <React.Fragment>
                  {messageArray[currentPosition][0]}
                </React.Fragment>
              )}
            </div>
          </div>
        </Paper>
        <div className="letterpopup-classes-left-arrow" onClick={prev} />
        <div className="letterpopup-classes-right-arrow" onClick={next} />
      </React.Fragment>
    </div>
  );
}
