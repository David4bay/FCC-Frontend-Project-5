/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaUndo } from 'react-icons/fa';
import './Controls.scss';

function Controls({isPlaying, setIsPlaying, setMinutes, setBreakPeriod, bigTime, breakTime, setSeconds, smallTime, minutes, seconds}) {

    const soundRef = useRef(null);

    useEffect(() => {
        let soundInterval;
        if (isPlaying) {
            soundInterval = setInterval(() => {
                if (minutes === 0 && seconds === 0) {
                    soundRef.current.play();
                }
            })
        }
        return () => {
            clearInterval(soundInterval);
        }
    }, [isPlaying, minutes, seconds])

    const timerHandler = e => {
        e.preventDefault();
        setIsPlaying(!isPlaying);
    }

    const resetHandler = e => {
        e.preventDefault();
        setMinutes(bigTime);
        setBreakPeriod(breakTime);
        setSeconds(smallTime);
        setIsPlaying(false);
    }

    return (
        <div className="timer-controls">
            <button onClick={timerHandler} type="button" className="play-pause btn" id="start_stop">
                {
                    isPlaying === true ? <FaPause /> : <FaPlay />
                }
            </button>
            <button onClick={resetHandler} type="button" className="btn undo" id="reset">
            <FaUndo />
            </button>
            <audio ref={soundRef} id="beep" src=""></audio>
        </div>
    )
}

export default Controls;