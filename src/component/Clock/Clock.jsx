/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './Clock.scss'
import { useEffect } from 'react';

function Clock({minutes, seconds, setMinutes, setSeconds, isPlaying}) {

    useEffect(() => {
        let intervalId;
        if (isPlaying) {
          intervalId = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
              // Timer has reached 0
              // Handle timer completion logic here
              clearInterval(intervalId);
            } else {
              if (seconds === '00' || seconds === 0) {
                setSeconds(59);
              } else {
                setSeconds((prevSeconds) => prevSeconds - 1);
              }
            }
            if (seconds === 59) {
                setMinutes((prevMinutes) => prevMinutes - 1)
            }
          }, 1000);
        }
    
        return () => {
          // Cleanup the interval when the component unmounts or when isPlaying changes to false
          clearInterval(intervalId);
        };
      }, [isPlaying, minutes, seconds, setMinutes, setSeconds]);

    return (
        <div className="clock-wrapper">
            <h2 className="session" id="timer-label">
            Session
            </h2>
            <strong className="timer" id="time-left">
            {minutes}:{seconds < 10 && seconds !== '00' ? `0${seconds}` : seconds}
            </strong>
        </div>
    )
}

export default Clock;