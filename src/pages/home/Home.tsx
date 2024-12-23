import styles from "./Home.module.css";
import { Countdown } from "../../features/Countdown/components/Countdown";
import { Header } from "../../shared/components/Header";
import { FireworksDisplay } from "../../features/fireworks/components/Fireworks";
import { useState } from "react";
export const Home = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const handleCountdownEnd = () => {
    //alert("¡Feliz Navidad! 🎄🎅🎁");
    setShowFireworks(true);
  }
  return (
    <>
      <Header />
      <main className={styles.container}>
        { !showFireworks && <Countdown onCountdownEnd={handleCountdownEnd} />}
        { showFireworks && <FireworksDisplay />}
      </main>
    </>
  );
};
