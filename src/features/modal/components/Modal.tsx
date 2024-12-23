import styles from "../styles/Modal.module.css";
import { BiX } from "react-icons/bi";

interface ModalProps { 
    children: React.ReactNode;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ children, title, isOpen, onClose }: ModalProps) => {
    if(!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>   
      <div className={styles.modal}>
        <div className={styles.modalTitle}>
          <h4>{title}</h4>
            <button onClick={onClose} className={styles.modalClose}>
                 <BiX />
            </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};
