import { useState, useEffect } from "react";
export function CountDownTimer({ hr, min, sec }) {
    var [over, setOver] = useState(false);
    var [paused, setPaused] = useState(true);
    var [[h, m, s], setTime] = useState([hr, min, sec]);

    var tick = () => {
        if (paused || over) {
            return;
        }
        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    var handleReset = () => {
        setTime([hr, min, sec]);
        setPaused(true);
        setOver(false);
    };

    var handlePause = () => setPaused(!paused);

    var fmt = function (val) {
        return val.toString().padStart(2, "0");
    };

    useEffect(() => {
        let ticker = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(ticker);
        };
    });

    return (
        <>
            <h3 className="countdown">{`${h}:${m}:${s}`}</h3>
            <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};