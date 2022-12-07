import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <p className={styles.heading}> FINTRACT GLOBAL</p>
        <p className={styles.ii}>INSPIRE INNOVATION</p>
        <p className={styles.description}>
          Fintract Global takes your privacy very seriously. We may process your
          personal information for carefully considered and specific purpose
          which are in our interests and enable us to enhance the service we
          provide.
        </p>
      </div>
      <div className={styles.homebox2}>
        <div className={styles.box1}>
          <p className={styles.box1box1}>
            The current payment & banking structures are light years away from
            meeting the needs of customers and stakeholders. At Fintract Global
            Ltd, we combine a cutting-edge tech stack with exceptional talent
            from Europe, Asia and America to lead change in how financial
            entities work.
          </p>
          <button className={styles.getstarted}>Get Started</button>
          <p className={styles.reviews}>Over 10k reviews</p>
          <Image
            className={styles.peopleimg}
            src="/people image.png"
            width={300}
            height={80}
          />
        </div>
        <div className={styles.box2}></div>
        <div className={styles.box3}>
          <Image
            className={styles.ceoimg}
            src="/CEO image.png"
            width={100}
            height={100}
          />
          <p className={styles.ceosays}>
            “Over the years, I have built lasting relationships with my clients
            and team, whose professional success I believe to be closely linked
            with our long-term progress”<br/><br/>
            <b>Debasis Chakraborty</b><br/>
            <b>CEO FinTract Global</b>
          </p>
          <p><h1>20K +</h1></p>
          <p>Users already registered and signing up for our product</p>
        </div>
      </div>
    </>
  );
}
