import styles from "../styles/SharePage.module.css";
import fireworks from "../../../assets/images/fireworks.webm";
import { WhatsappShareButton, FacebookShareButton } from "react-share";
import { BiLogoWhatsapp, BiLogoFacebook } from "react-icons/bi";
export const SharePage = () => {
  const pageUrl = window.location.href;
  return (
    <div className={styles.shareContainer}>
      <video autoPlay loop muted width={150} height={150}>
        <source src={fireworks} type="video/webm" />
      </video>
      <h4>🎄✨ ¡La cuenta regresiva para la Navidad ha comenzado! 🎁✨</h4>
      <p>🎅 ⏳ Acompáñanos a esperar la llegada de la Navidad con una mágica cuenta regresiva. Cuando el reloj marque las <strong>12:00</strong>,
         celebraremos con un espectáculo de fuegos artificiales virtuales.</p>
         <p>🌟 ¡No te lo pierdas! Comparte esta página con tus amigos y familiares para que todos podamos disfrutar juntos de este momento especial. ❤️</p>
      <div className={styles.shareButtons}>
        <WhatsappShareButton
          url={pageUrl}
          className={`${styles.shareButton} btn btn-primary`}
        >
          <BiLogoWhatsapp size={30} />
        </WhatsappShareButton>
        <FacebookShareButton
          url={pageUrl}
          className={`${styles.shareButton} btn btn-primary`}
        >
          <BiLogoFacebook size={30} />
        </FacebookShareButton>
   
      </div>
    </div>
  );
};
