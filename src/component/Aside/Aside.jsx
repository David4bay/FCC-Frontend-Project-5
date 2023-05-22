/* eslint-disable react/prop-types */
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Aside.scss';

function Aside({setMinutes, breakPeriod, setBreakPeriod, isPlaying, bigTime, setBigTime}) {

    const [syncTimer, setSyncTimer] = useState(false);

    useEffect(() => {
        if (bigTime < 2) {
            setBigTime(1);
            setMinutes(bigTime);
        }

        if (breakPeriod < 2) {
            setBreakPeriod(1);
        }

        if (breakPeriod > 59) {
            setBreakPeriod(60);
        }
        
        if (bigTime > 59) {
            setBigTime(60);
            setMinutes(bigTime);
        }

        if (syncTimer) {
            setMinutes(bigTime);
        }

        return () => {
            setSyncTimer(false);
        }

    }, [bigTime, setBigTime, setMinutes, syncTimer, breakPeriod, setBreakPeriod])

    const incrementSession = e => {
        e.preventDefault();
        if (isPlaying) {
            setBigTime(bigTime)
        } else {
            setBigTime(bigTime + 1);
            setSyncTimer(true);
        }
    }

    const decrementSession = (e) => {
        e.preventDefault();
        if (isPlaying) {
            setBigTime(bigTime);
        } else {
            setBigTime(bigTime - 1);
            setSyncTimer(true);
        }
    }

    const incrementBreak = e => {
        e.preventDefault();
        if (isPlaying) {
            setBreakPeriod(breakPeriod + 1);
        }
    }

    const decrementBreak = e => {
        e.preventDefault();
        if (isPlaying) {
            setBreakPeriod(breakPeriod - 1);
        }
    }

    return (
        <div>
            <div className="break-length">
                <h2 id="break-label">
                Break Length
                </h2>
                <div className="break-length">
                    <button onClick={decrementBreak} className="arrows" type="button" id="break-decrement">
                <FaArrowDown className="decrement" />
                    </button>
                    <strong className="number" id="break-length">{breakPeriod}</strong>
                    <button onClick={incrementBreak} className="arrows" type="button" id="break-increment">
                    <FaArrowUp className="increment" />
                    </button>
                </div>
                <div className="session-length">
                    <h2 id="session-label">
                Session Length
                    </h2>
                    <button onClick={decrementSession} className="arrows" id="session-decrement">
                    <FaArrowDown className="decrement" />
                    </button>
                    <strong className="number" id="session-length">{bigTime}</strong>
                    <button onClick={incrementSession} className="arrows" type="button" id="session-increment">
                    <FaArrowUp className="increment" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Aside;