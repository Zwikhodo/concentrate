import styles from "../../styles/Game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SingleCard from "../../Components/SingleCard";
import Image from "next/image";
import { usePlayerStore } from "../../store/players/players";

const flipCards = [
  { src: "./cards/A.png", color: "Black", number: "1", matched: false },
  { src: "./cards/2.png", color: "Black", number: "2", matched: false },
  { src: "./cards/3.png", color: "Black", number: "3", matched: false },
  { src: "./cards/4.png", color: "Black", number: "4", matched: false },
  { src: "./cards/5.png", color: "Black", number: "5", matched: false },
  { src: "./cards/6.png", color: "Black", number: "6", matched: false },
  { src: "./cards/7.png", color: "Black", number: "7", matched: false },
  { src: "./cards/8.png", color: "Black", number: "8", matched: false },
  { src: "./cards/9.png", color: "Black", number: "9", matched: false },
  { src: "./cards/10.png", color: "Black", number: "10", matched: false },
  { src: "./cards/J.png", color: "Black", number: "J", matched: false },
  { src: "./cards/K.png", color: "Black", number: "K", matched: false },
  { src: "./cards/Q.png", color: "Black", number: "Q", matched: false },
  { src: "./cards/Ad.png", color: "Red", number: "1", matched: false },
  { src: "./cards/2d.png", color: "Red", number: "2", matched: false },
  { src: "./cards/3d.png", color: "Red", number: "3", matched: false },
  { src: "./cards/4d.png", color: "Red", number: "4", matched: false },
  { src: "./cards/5d.png", color: "Red", number: "5", matched: false },
  { src: "./cards/6d.png", color: "Red", number: "6", matched: false },
  { src: "./cards/7d.png", color: "Red", number: "7", matched: false },
  { src: "./cards/8d.png", color: "Red", number: "8", matched: false },
  { src: "./cards/9d.png", color: "Red", number: "9", matched: false },
  { src: "./cards/10d.png", color: "Red", number: "10", matched: false },
  { src: "./cards/Jd.png", color: "Red", number: "J", matched: false },
  { src: "./cards/Kd.png", color: "Red", number: "K", matched: false },
  { src: "./cards/Qd.png", color: "Red", number: "Q", matched: false },
  { src: "./cards/Ac.png", color: "Black", number: "1", matched: false },
  { src: "./cards/2c.png", color: "Black", number: "2", matched: false },
  { src: "./cards/3c.png", color: "Black", number: "3", matched: false },
  { src: "./cards/4c.png", color: "Black", number: "4", matched: false },
  { src: "./cards/5c.png", color: "Black", number: "5", matched: false },
  { src: "./cards/6c.png", color: "Black", number: "6", matched: false },
  { src: "./cards/7c.png", color: "Black", number: "7", matched: false },
  { src: "./cards/8c.png", color: "Black", number: "8", matched: false },
  { src: "./cards/9c.png", color: "Black", number: "9", matched: false },
  { src: "./cards/10c.png", color: "Black", number: "10", matched: false },
  { src: "./cards/Jc.png", color: "Black", number: "J", matched: false },
  { src: "./cards/Kc.png", color: "Black", number: "K", matched: false },
  { src: "./cards/Qc.png", color: "Black", number: "Q", matched: false },
  { src: "./cards/Ah.png", color: "Red", number: "1", matched: false },
  { src: "./cards/2h.png", color: "Red", number: "2", matched: false },
  { src: "./cards/3h.png", color: "Red", number: "3", matched: false },
  { src: "./cards/4h.png", color: "Red", number: "4", matched: false },
  { src: "./cards/5h.png", color: "Red", number: "5", matched: false },
  { src: "./cards/6h.png", color: "Red", number: "6", matched: false },
  { src: "./cards/7h.png", color: "Red", number: "7", matched: false },
  { src: "./cards/8h.png", color: "Red", number: "8", matched: false },
  { src: "./cards/9h.png", color: "Red", number: "9", matched: false },
  { src: "./cards/10h.png", color: "Red", number: "10", matched: false },
  { src: "./cards/Jh.png", color: "Red", number: "J", matched: false },
  { src: "./cards/Qh.png", color: "Red", number: "Q", matched: false },
  { src: "./cards/Kh.png", color: "Red", number: "K", matched: false },
  { src: "./cards/Joker_1.png", color: "Red", number: "0", matched: false },
  { src: "./cards/Joker_2.png", color: "Red", number: "0", matched: false },
];

const Game = () => {
  const router = useRouter();

  const [cardsChosen, setCardsChosen] = useState([]);
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [points, setPoints] = useState(0);
  const [isPlayer1Turn, setTurn] = useState(false);
  const [inactive, setInactive] = useState(false);
  const playerOne = usePlayerStore((state) => state.player1);
  const playerTwo = usePlayerStore((state) => state.player2);
  const updateWinner = usePlayerStore((state) => state.updateWinner);
  const updateRunnerUp = usePlayerStore((state) => state.updateRunnerUp);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...flipCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCard1(null);
    setCard2(null);
    setCardsChosen(shuffledCards);
    setPoints(0);
    setP1Score(0);
    setP2Score(0);
  };

  const handleChoice = (card) => {
    card1 ? setCard2(card) : setCard1(card);
  };

  useEffect(() => {
    if (card1 && card2) {
      if (p1Score > 48) {
        const data = {
          playerName: playerOne.playerName,
          score: p1Score,
        };
        updateWinner(data);

        router.push("/winner");
      }else{
        const data = {
          playerName: playerOne.playerName,
          score: p1Score,
        };
        updateRunnerUp(data)
      }

      if (p2Score > 48) {
        const data = {
          playerName: playerTwo.playerName,
          score: p2Score,
        };
        updateWinner(data);
        router.push("/winner");
      }else{
        const data = {
          playerName: playerTwo.playerName,
          score: p2Score,
        }
        updateRunnerUp(data)
      }
      setTurn(isPlayer1Turn ? false : true);

      setInactive(true);
      if (card1.color === card2.color && card1.number === card2.number) {
        setCardsChosen((prevCards) => {
          return prevCards.map((card) => {
            if (card.color === card1.color && card.number === card1.number) {
              if (isPlayer1Turn) {
                setP1Score((e) => e + 1);
              } else {
                setP2Score((e) => e + 1);
              }
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [card1, card2]);

  const resetTurn = () => {
    setCard1(null);
    setCard2(null);
    setInactive(false);
  };
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className={styles.Game}>
      <h3>Memory</h3>
      <Link href="/">
        <a className={styles.exit_btn}>Exit Game</a>
      </Link>
      <button className={styles.btn} onClick={shuffleCards}>
        Restart Game
      </button>
      <div className={styles.player1}>
        <Image
          className={styles.avatar1}
          src="/log4.png"
          width={200}
          height={178}
          objectFit="contain"
          alt=""
        />
        <h2>{playerOne.playerName}</h2>
        <h1>Score:{p1Score}</h1>
      </div>

      <div className={!isPlayer1Turn ? styles.hide : styles.turnModal1}>
        <h2>its your turn</h2>
      </div>

      <div className={styles.player2}>
        <Image
          className={styles.avatar2}
          src="/log2.png"
          width={160}
          height={148}
          objectFit="contain"
          alt=""
        />
        <h2>{playerTwo.playerName}</h2>
        <h1>Score:{p2Score}</h1>
      </div>
      <div className={!isPlayer1Turn ? styles.turnModal2 : styles.hide}>
        <h2>its your turn</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.cardGrid}>
          {cardsChosen.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === card1 || card === card2 || card.matched}
              inactive={inactive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
