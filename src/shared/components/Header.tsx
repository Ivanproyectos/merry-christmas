import styles from "./Header.module.css";
import { BiShare, BiUser } from "react-icons/bi";
import { WhatsappShareButton, FacebookShareButton } from 'react-share'

export const Header = () => {
  const pageUrl = 'https://merry-christmas-ashen.vercel.app/'

  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>🎄 Merry Christmas 🎄</h1>
        <nav>
         {/*<WhatsappShareButton url={pageUrl} className={styles.options}>
            <BiShare size={30} />
          </WhatsappShareButton>
          <FacebookShareButton url={pageUrl} className={styles.options}>
            <BiShare size={30} />
          </FacebookShareButton> */} 
          <button className={styles.options}>
            <BiShare size={30} />
          </button>
          <button className={styles.options}>
            <BiUser size={30} />
          </button>
        </nav>
      </div>
    </header>
    </>
  );
};
