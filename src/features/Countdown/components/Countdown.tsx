import styles from "./Countdown.module.css";
import { useCounter } from "../hooks/useCounter";
import { BiShare } from "react-icons/bi";

export const Countdown = () => {
  const { days, hours, minutes, seconds } = useCounter();
  return (
    <div className={`card ${styles.container}`}>
      <h2>¡Ya estamos cerca! 🎄🧑‍🎄</h2>
      <div className={styles.countdown}>
      <div className={styles.countdownItem}>
          <div className={`text-center ${styles.countdownNumber}`}>{days}</div>
          <small>Dias</small>
        </div>
        <div className={styles.countdownItem}>
          <div className={`text-center ${styles.countdownNumber}`}>{hours}</div>
          <small>Horas</small>
        </div>
        <div className={styles.countdownItem}>
          <div className={`text-center ${styles.countdownNumber}`}>{minutes}</div>
          <small>Minutos</small>
        </div>
        <div className={styles.countdownItem}>
          <div className={`text-center ${styles.countdownNumber}`}>{seconds}</div>
          <small>Segundos</small>
        </div>
      </div>
      <div className={styles.shareContainer}>
          <button className={styles.shareButton}> <BiShare /> Compartir</button>
      </div>

    </div>
  );
};
