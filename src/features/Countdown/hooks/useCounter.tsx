import { useState, useEffect } from "react";
import { getTimeLeft } from "../services/counterService";

export const useCounter = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return timeLeft
}