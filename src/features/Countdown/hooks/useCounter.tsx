import { useState, useEffect } from "react";
import { getTimeLeft } from "../services/counterService";

export const useCounter = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const { days, hours, minutes, seconds } = timeLeft
    const isCountdownFinished = days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return {
        ...timeLeft,
        isCountdownFinished
    }
}