import styles from "./Countdown.module.css";
import { useCounter } from "../hooks/useCounter";
import { useModal } from "../../modal/hooks/useModal";
import { BiShare } from "react-icons/bi";
import { Modal } from "../../modal/components/Modal";
import { SharePage } from "../../sharePage/components/SharePage";
import { useEffect } from "react";

interface CountdownProps {
  onCountdownEnd: () => void;
}


export const Countdown = ({onCountdownEnd }: CountdownProps) => {
  const { days, hours, minutes, seconds, isCountdownFinished } = useCounter();
  const { openModal, isOpen, closeModal } = useModal();
 
  useEffect(() => {
  
    if (isCountdownFinished) {
      onCountdownEnd();
    }
  }, [isCountdownFinished, onCountdownEnd]);
  

  return (
    <>
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
          <button className="btn btn-primary" onClick={openModal}> <BiShare /> Compartir</button>
      </div>
    </div>
    <Modal title="Comparte la alegria con tus amigos" isOpen={isOpen} onClose={closeModal}>
      <SharePage />
    </Modal>
    </>
  );
};
