import { Fireworks } from "fireworks-js";
import { useEffect, useRef } from "react";
import styles from "../styles/Fireworks.module.css";
import audio from "../../../assets/audio/navidad.mp3";

export const FireworksDisplay = () => {
  const containerRef = useRef(null);
  const audiref = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Configuración de los fuegos artificiales
      const fireworks = new Fireworks(containerRef.current, {
        rocketsPoint: { min: 40, max: 60 }, // punto desde el que se lanzan los cohetes
        hue: {
          min: 0,
          max: 360,
        },
        delay: {
          min: 30,
          max: 60,
        },
        //  speed: 2,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 100,
        //  trace: 3,
        explosion: 5,
      });

      // Inicia los fuegos artificiales
      fireworks.start();

      // Detén los fuegos artificiales al desmontar el componente
      return () => fireworks.stop();
    }
  }, []);

  return (
    <>
      <audio ref={audiref} src={audio} autoPlay loop></audio>
      <div ref={containerRef} className={styles.fireworksContainer} >
        <h1>Feliz navidad !!</h1>
      </div>
    </>
  );
};
