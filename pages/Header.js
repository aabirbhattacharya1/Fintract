import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Header() {
  return (
    <div>
      <nav>
        <div className={styles.nav} >
          <Image src="/FG LOGO_white.png"
          width={200}
          height={102}/>
          <a>
            <Link href="/Home">Home</Link>
          </a>
          <a>
            <Link href="/AboutUs">About Us</Link>
          </a>
          <a>
            <Link href="/OurProducts">Our Products</Link>
          </a>
          <a>
            <Link href="/More">More</Link>
          </a>
          <input type="text" className={styles.input} placeholder="Search FG..."></input>
          <button className={styles.button1}>Log in</button>
          <button className={styles.button2}>Sign up</button>
        </div>
      </nav>
    </div>
  );
}
