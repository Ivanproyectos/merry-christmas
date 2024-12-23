import styles from "./Header.module.css";
import { BiShare, BiUser } from "react-icons/bi";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>🎄 Merry Christmas 🎄</h1>
        <nav className="">
            <button className={styles.options}><BiShare size={30} /></button>
            <button className={styles.options}><BiUser size={30} /></button>
        </nav>
      </div>
    </header>
  );
};
