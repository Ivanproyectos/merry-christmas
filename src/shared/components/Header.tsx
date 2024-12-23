import styles from "./Header.module.css";
import { BiShare, BiUser } from "react-icons/bi";
import { Modal } from "../../features/modal/components/Modal";
import { SharePage } from "../../features/sharePage/components/SharePage";
import { useModal } from "../../features/modal/hooks/useModal";

export const Header = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>🎄 Merry Christmas 🎄</h1>
        <nav>
          <button className={styles.options} onClick={openModal}>
            <BiShare size={30} />
          </button>
          <button className={styles.options}>
            <BiUser size={30} />
          </button>
        </nav>
      </div>
    </header>
     <Modal title="Comparte la alegria con tus amigos" isOpen={isOpen} onClose={closeModal}>
          <SharePage />
        </Modal>
    </>
  );
};
