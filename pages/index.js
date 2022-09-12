import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { usePlayerStore } from "../store/players/players";

export default function Home() {
  const setPlayer1Name = usePlayerStore((state) => state.setPlayer1Name);
  const setPlayer2Name = usePlayerStore((state) => state.setPlayer2Name);

  return (
    <>
      <Head>
        <title>Memory | Home</title>
      </Head>
      <Link href="/">
        <a className={styles.exit_btn}>Exit Game</a>
      </Link>

      <div className={styles.title}>
        <h2>Memory</h2>
        <h1>Are you ready to play?</h1>
      </div>

      <div className={styles.avatar_container1}>
        <Image
          className={styles.avatar1}
          src="/log4.png"
          width={300}
          height={278}
          objectFit="contain"
          alt=""
        />
        <input
          className={styles.avatarInput}
          type="text"
          placeholder="Name of Player1"
          required
          onChange={(e) => {
            setPlayer1Name(e.target.value);
          }}
        />

        <Image
          className={styles.avatar2}
          src="/log2.png"
          width={210}
          height={248}
          objectFit="contain"
          alt=""
        />
        <input
          className={styles.avatarInput}
          type="text"
          placeholder="Name of Player2"
          required
          onChange={(e) => {
            setPlayer2Name(e.target.value);
          }}
        />
      </div>
      <Link href="/game">
        <a className={styles.btn}>
          Lets Play
        </a>
      </Link>
    </>
  );
}
