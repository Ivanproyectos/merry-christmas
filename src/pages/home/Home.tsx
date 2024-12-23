import styles from "./Home.module.css";
import { Countdown } from "../../features/Countdown/components/Countdown";
import { Header } from "../../shared/components/Header";
export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Countdown />
      </main>
    </>
  );
};
