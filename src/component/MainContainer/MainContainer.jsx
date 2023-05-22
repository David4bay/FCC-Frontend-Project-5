/* eslint-disable no-unused-vars */
import { useState } from "react";
import Aside from "../Aside/Aside";
import Clock from "../Clock/Clock";
import Controls from "../Controls/Controls";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './MainContainer.scss';

function MainContainer() {
    const time = 25;
    const [bigTime, setBigTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const smallTime = '00';
    const [minutes, setMinutes] = useState(bigTime);
    const [breakPeriod, setBreakPeriod] = useState(breakTime);
    const [isPlaying, setIsPlaying] = useState(false);
    const [seconds, setSeconds] = useState(smallTime);

    return (
        <div className="main-container">
            <Header />
            <Aside  
            setMinutes={setMinutes}
            breakPeriod={breakPeriod} 
            setBreakPeriod={setBreakPeriod}
            isPlaying={isPlaying}
            bigTime={bigTime}
            setBigTime={setBigTime}
            time={time}
            />
            <Clock 
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
            isPlaying={isPlaying}
            bigTime={bigTime}
            />
            <Controls
            bigTime={bigTime}
            breakTime={breakTime}
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying}
            setMinutes={setMinutes}  
            setBreakPeriod={setBreakPeriod}
            setSeconds={setSeconds}
            minutes={minutes}
            setBigTime={setBigTime}
            smallTime={smallTime}
            seconds={seconds}
            time={time}
            />
            <Footer />
            <div className="styling" />
        </div>
    )
}

export default MainContainer;