import create from "zustand";

export const usePlayerStore = create((set) => ({
  player1: {
    score: 0,
    playerName: "",
  },
  player2: {
    score: 0,
    playerName: "",
  },
  winner: {
    playerName: "",
    score: 0,
  },
  runnerUp: {
    playerName: "",
    score: 0,
  },
  updateWinner: (value) =>
    set((state) => ({
      winner: value

    })),
  updateRunnerUp: (value) =>
    set((state) => ({
      runnerUp: value,
    })),
  setPlayer1Name: (value) =>
    set((state) => ({
      player1: { ...state.player1, playerName: value },
    })),
  setPlayer2Name: (value) =>
    set((state) => ({
      player2: { ...state.player2, playerName: value },
    })),
  setPlayer1Score: (value) =>
    set((state) => ({
      player1Score: { ...state.player1, score: value },
    })),
  setPlayer2Score: (value) =>
    set((state) => ({
      player2Score: { ...state.player2, score: value },
    })),
}));
