import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import React from 'react';

type Screen = 'tictactoe' | 'gif1' | 'gif2' | 'howdareyou' | 'giftgrid' | 'box1' | 'box2' | 'box3' | 'box4';

const LETTER_TEXT = `𝐻𝑎𝑝𝑝𝑦 𝐵𝑖𝑟𝑡ℎ𝑑𝑎𝑦, 𝑚𝑦 𝑃𝑎𝑟𝑖 ✨🌷

𝐴𝑎𝑗 𝑠𝑢𝑏𝑎ℎ 𝑠𝑒 𝑙𝑖𝑡𝑒𝑟𝑎𝑙𝑙𝑦 𝑒𝑘 𝑎𝑙𝑎𝑔 ℎ𝑖 𝑒𝑥𝑐𝑖𝑡𝑒𝑚𝑒𝑛𝑡 ℎ𝑎𝑖… 𝑗𝑎𝑖𝑠𝑒 𝑚𝑒𝑟𝑎 𝑘ℎ𝑢𝑑 𝑘𝑎 𝑓𝑎𝑣𝑜𝑢𝑟𝑖𝑡𝑒 𝑑𝑎𝑦 ℎ𝑜, 𝑏𝑒𝑐𝑎𝑢𝑠𝑒 𝑡𝑜𝑑𝑎𝑦 𝑖𝑠 𝑎𝑏𝑜𝑢𝑡 𝑦𝑜𝑢.

𝑃𝑎𝑡𝑎 ℎ𝑎𝑖, 𝑏𝑖𝑟𝑡ℎ𝑑𝑎𝑦𝑠 𝑛𝑜𝑟𝑚𝑎𝑙𝑙𝑦 𝑏𝑎𝑠 𝑑𝑎𝑡𝑒𝑠 ℎ𝑜𝑡𝑒 ℎ𝑎𝑖𝑛… 𝑏𝑢𝑡 𝑡𝑢𝑚ℎ𝑎𝑟𝑎 𝑏𝑖𝑟𝑡ℎ𝑑𝑎𝑦 𝑎𝑎𝑡𝑎 ℎ𝑎𝑖 𝑡𝑜ℎ 𝑎𝑢𝑡𝑜𝑚𝑎𝑡𝑖𝑐𝑎𝑙𝑙𝑦 𝑚𝑒𝑚𝑜𝑟𝑖𝑒𝑠 𝑘ℎ𝑢𝑙𝑛𝑒 𝑙𝑎𝑔𝑡𝑖 ℎ𝑎𝑖𝑛. 𝐶ℎ𝑟𝑖𝑠𝑡𝑚𝑎𝑠 𝑤𝑎𝑙𝑎 𝑓𝑖𝑟𝑠𝑡 𝑚𝑒𝑒𝑡𝑖𝑛𝑔 𝑠𝑐𝑒𝑛𝑒, 𝑓𝑖𝑟𝑠𝑡 𝑎𝑤𝑘𝑤𝑎𝑟𝑑 𝑡𝑎𝑙𝑘𝑠, 𝑤𝑜ℎ 𝑠𝑎𝑏 𝑙𝑖𝑡𝑡𝑙𝑒 𝑚𝑜𝑚𝑒𝑛𝑡𝑠 𝑗𝑜 𝑢𝑠 𝑡𝑖𝑚𝑒 𝑛𝑜𝑟𝑚𝑎𝑙 𝑙𝑎𝑔𝑒 𝑡ℎ𝑒 𝑏𝑢𝑡 𝑎𝑏 𝑠𝑜𝑐ℎ𝑡𝑎 ℎ𝑜𝑜𝑛 𝑡𝑜ℎ 𝑓𝑒𝑒𝑙 ℎ𝑜𝑡𝑎 ℎ𝑎𝑖 𝑘𝑖𝑡𝑛𝑎 𝑞𝑢𝑖𝑒𝑡𝑙𝑦 𝑖𝑚𝑝𝑜𝑟𝑡𝑎𝑛𝑡 𝑏𝑎𝑛 𝑔𝑎𝑦𝑎 𝑠𝑎𝑏.

𝐴𝑢𝑟 𝑚𝑢𝑗ℎ𝑒 𝑡𝑢𝑚ℎ𝑎𝑟𝑖 𝑐ℎℎ𝑜𝑡𝑖 𝑐ℎℎ𝑜𝑡𝑖 𝑐ℎ𝑒𝑒𝑧𝑒𝑖𝑛 𝑦𝑎𝑎𝑑 𝑟𝑒ℎ𝑛𝑎 𝑔𝑒𝑛𝑢𝑖𝑛𝑒𝑙𝑦 𝑏𝑎ℎ𝑢𝑡 𝑝𝑎𝑠𝑎𝑛𝑑 ℎ𝑎𝑖… 𝑙𝑖𝑘𝑒 𝑡𝑢𝑙𝑖𝑝𝑠 𝑑𝑒𝑘ℎ𝑡𝑒 ℎ𝑖 𝑡𝑢𝑚 𝑦𝑎𝑎𝑑 𝑎𝑎𝑡𝑖 ℎ𝑜, 𝑙𝑎𝑣𝑒𝑛𝑑𝑒𝑟 𝑎𝑏 𝑏𝑎𝑠 𝑐𝑜𝑙𝑜𝑢𝑟 𝑛𝑎ℎ𝑖 𝑙𝑎𝑔𝑡𝑎, 𝑠𝑡𝑟𝑎𝑤𝑏𝑒𝑟𝑟𝑦 𝑠ℎ𝑎𝑘𝑒 𝑘𝑎 𝑛𝑎𝑎𝑚 𝑎𝑎𝑡𝑒 ℎ𝑖 𝑡𝑢𝑚ℎ𝑎𝑟𝑖 𝑓𝑎𝑐𝑒 𝑤𝑎𝑙𝑖 𝑠𝑚𝑖𝑙𝑒 𝑦𝑎𝑎𝑑 𝑎𝑎𝑡𝑖 ℎ𝑎𝑖, 𝑎𝑢𝑟 𝑝𝑎𝑣 𝑏ℎ𝑎𝑗𝑖 𝑏ℎ𝑖 𝑠𝑜𝑚𝑒ℎ𝑜𝑤 𝑡𝑢𝑚ℎ𝑎𝑟𝑖 𝑣𝑖𝑏𝑒 𝑙𝑒 𝑎𝑎𝑡𝑖 ℎ𝑎𝑖.

𝐴𝑢𝑟 𝑠ℎ𝑎𝑦𝑎𝑑 𝑖𝑠𝑖 𝑙𝑖𝑦𝑒 𝑚𝑢𝑗ℎ𝑒 𝑠𝑎𝑚𝑎𝑗ℎ 𝑎𝑎𝑡𝑎 ℎ𝑎𝑖 𝑡𝑢𝑚ℎ𝑒 “𝑎𝑓𝑠𝑜𝑠” 𝑘𝑦𝑢𝑛 𝑝𝑎𝑠𝑎𝑛𝑑 ℎ𝑎𝑖… 𝑏𝑒𝑐𝑎𝑢𝑠𝑒 𝑘𝑢𝑐ℎ 𝑠𝑜𝑛𝑔𝑠 𝑏𝑎𝑠 𝑎𝑐ℎ𝑒 𝑛𝑎ℎ𝑖 𝑙𝑎𝑔𝑡𝑒, 𝑤𝑜ℎ 𝑎𝑛𝑑𝑎𝑟 𝑞𝑢𝑖𝑒𝑡𝑙𝑦 𝑡𝑜𝑢𝑐ℎ 𝑘𝑎𝑟𝑡𝑒 ℎ𝑎𝑖𝑛… 𝑒𝑘 𝑠𝑜𝑓𝑡𝑛𝑒𝑠𝑠, 𝑡ℎ𝑜𝑑𝑎 𝑠𝑎 𝑑𝑎𝑟𝑑, 𝑎𝑢𝑟 𝑘𝑢𝑐ℎ 𝑢𝑛𝑠𝑎𝑖𝑑 𝑓𝑒𝑒𝑙𝑖𝑛𝑔𝑠… 𝑏𝑖𝑙𝑘𝑢𝑙 𝑤𝑎𝑖𝑠𝑒 ℎ𝑖 𝑗𝑎𝑖𝑠𝑒 ℎ𝑢𝑚 𝑏𝑜𝑙𝑡𝑒 𝑘𝑎𝑚 ℎ𝑎𝑖𝑛 𝑏𝑢𝑡 𝑓𝑒𝑒𝑙 𝑧𝑦𝑎𝑑𝑎 𝑘𝑎𝑟𝑡𝑒 ℎ𝑎𝑖𝑛.

𝐾𝑎𝑏ℎ𝑖 𝑘𝑎𝑏ℎ𝑖 𝑡𝑢𝑚 𝑚𝑒𝑟𝑒 𝑝𝑎𝑎𝑠 ℎ𝑜𝑡𝑖 ℎ𝑜 𝑝ℎ𝑖𝑟 𝑏ℎ𝑖 𝑚𝑎𝑛𝑛 𝑘𝑎𝑟𝑡𝑎 ℎ𝑎𝑖 𝑡𝑖𝑚𝑒 𝑡ℎ𝑜𝑑𝑎 𝑎𝑢𝑟 𝑠𝑙𝑜𝑤 ℎ𝑜 𝑗𝑎𝑦𝑒… 𝑎𝑢𝑟 𝑗𝑎𝑏 𝑡𝑢𝑚 𝑡ℎ𝑜𝑑𝑖 𝑠𝑖 𝑏ℎ𝑖 𝑑𝑜𝑜𝑟 ℎ𝑜𝑡𝑖 ℎ𝑜 𝑛𝑎, 𝑠𝑎𝑐ℎ 𝑚𝑒𝑖𝑛 𝑑𝑎𝑦 𝑐ℎ𝑎𝑙 𝑟𝑎ℎ𝑎 ℎ𝑜𝑡𝑎 ℎ𝑎𝑖 𝑏𝑢𝑡 𝑓𝑒𝑒𝑙 𝑖𝑛𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑒 𝑠𝑎 ℎ𝑜𝑡𝑎 ℎ𝑎𝑖.

𝐼 𝑙𝑢𝑣 𝑢… 𝑔𝑒𝑛𝑢𝑖𝑛𝑒𝑙𝑦, 𝑠𝑜𝑓𝑡𝑙𝑦, 𝑎𝑢𝑟 𝑠ℎ𝑎𝑦𝑎𝑑 𝑢𝑡𝑛𝑎 𝑗𝑖𝑡𝑛𝑎 𝑤𝑜𝑟𝑑𝑠 𝑘𝑎𝑏ℎ𝑖 𝑝𝑟𝑜𝑝𝑒𝑟𝑙𝑦 𝑒𝑥𝑝𝑙𝑎𝑖𝑛 𝑛𝑎ℎ𝑖 𝑘𝑎𝑟 𝑝𝑎𝑎𝑡𝑒.

𝑀𝑤𝑎ℎℎℎ 🤍

𝐴𝑎𝑗 𝑏𝑎𝑠 𝑖𝑡𝑛𝑎 𝑐ℎ𝑎ℎ𝑢𝑛𝑔𝑎 𝑘𝑖 𝑡𝑢𝑚 𝑝𝑢𝑟𝑎 𝑑𝑖𝑛 𝑠𝑚𝑖𝑙𝑒 𝑘𝑎𝑟𝑜, 𝑝𝑎𝑚𝑝𝑒𝑟𝑒𝑑 𝑓𝑒𝑒𝑙 𝑘𝑎𝑟𝑜, 𝑎𝑢𝑟 𝑒𝑘 𝑠𝑒𝑐𝑜𝑛𝑑 𝑘𝑒 𝑙𝑖𝑦𝑒 𝑏ℎ𝑖 𝑑𝑜𝑢𝑏𝑡 𝑛𝑎 ℎ𝑜 𝑘𝑖 𝑠𝑜𝑚𝑒𝑜𝑛𝑒 𝑖𝑠 𝑒𝑥𝑡𝑟𝑒𝑚𝑒𝑙𝑦 ℎ𝑎𝑝𝑝𝑦 𝑏𝑒𝑐𝑎𝑢𝑠𝑒 𝑡𝑜𝑑𝑎𝑦 𝑦𝑜𝑢 𝑤𝑒𝑟𝑒 𝑏𝑜𝑟𝑛.

𝐻𝑎𝑝𝑝𝑦 𝐵𝑖𝑟𝑡ℎ𝑑𝑎𝑦 𝑎𝑔𝑎𝑖𝑛… 𝑚𝑒𝑟𝑖 𝑓𝑎𝑣𝑜𝑢𝑟𝑖𝑡𝑒 𝑓𝑒𝑒𝑙𝑖𝑛𝑔 ✨`;

// Netlify Image CDN Utility
const isGif = (url: string) => url.toLowerCase().endsWith('.gif');

const getOptimizedUrl = (url: string, width: number) => {
  if (isGif(url)) return url;
  return `/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&fm=avif&q=80`;
};

const getSrcSet = (url: string) => {
  if (isGif(url)) return undefined;
  return `${getOptimizedUrl(url, 400)} 400w, ${getOptimizedUrl(url, 800)} 800w, ${getOptimizedUrl(url, 1200)} 1200w`;
};

// Floating hearts for win/lose popup
function FloatingHearts() {
  const positions = [
    { top: '-40px', left: '-40px' },
    { top: '-40px', right: '-40px' },
    { bottom: '-40px', left: '-40px' },
    { bottom: '-40px', right: '-40px' },
    { top: '-40px', left: '50%', transform: 'translateX(-50%)' },
    { bottom: '-40px', left: '50%', transform: 'translateX(-50%)' },
  ];
  
  const heartUrl = "https://i.ibb.co/0j7jk8cF/b158f4cc0584572b4cdab742ef9bf7c0.gif";

  return (
    <>
      {positions.map((style, i) => (
        <img
          key={i}
          src={getOptimizedUrl(heartUrl, 100)}
          srcSet={getSrcSet(heartUrl)}
          alt=""
          loading="lazy"
          width="70"
          height="70"
          className="absolute pointer-events-none"
          style={{
            ...style,
            width: '70px',
            height: '70px',
            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </>
  );
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>('tictactoe');
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [cakeBlow, setCakeBlow] = useState(false);
  const [showWonBox, setShowWonBox] = useState(false);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const mainAudioRef = React.useRef<HTMLAudioElement>(null);
  const box4AudioRef = React.useRef<HTMLAudioElement>(null);

  const GIFT_TITLE = 'Gifts For You';

  useEffect(() => {
    if (screen === 'giftgrid') {
      setTypedTitle('');
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypedTitle(GIFT_TITLE.slice(0, i));
        if (i >= GIFT_TITLE.length) clearInterval(interval);
      }, 110);
      return () => clearInterval(interval);
    }
  }, [screen]);

  const playMusic = () => {
    if (mainAudioRef.current && !musicPlaying) {
      mainAudioRef.current.play();
      setMusicPlaying(true);
    }
  };

  useEffect(() => {
    const mainAudio = mainAudioRef.current;
    const box4Audio = box4AudioRef.current;
    if (!mainAudio || !box4Audio) return;

    if (screen === 'box4') {
      mainAudio.pause();
      box4Audio.currentTime = 0;
      box4Audio.play();
      return;
    }

    box4Audio.pause();
    box4Audio.currentTime = 0;

    if (musicPlaying) {
      mainAudio.play();
    }
  }, [screen, musicPlaying]);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return null;
  };

  const makeAIMove = (currentBoard: (string | null)[]) => {
    const emptySquares = currentBoard
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null) as number[];

    if (emptySquares.length === 0) return currentBoard;

    const newBoard = [...currentBoard];

    // Check if AI can win
    for (let i of emptySquares) {
      newBoard[i] = 'O';
      if (calculateWinner(newBoard)?.winner === 'O') {
        return newBoard;
      }
      newBoard[i] = null;
    }

    // Check if player can win and block
    for (let i of emptySquares) {
      newBoard[i] = 'X';
      if (calculateWinner(newBoard)?.winner === 'X') {
        newBoard[i] = 'O';
        return newBoard;
      }
      newBoard[i] = null;
    }

    // Pick random
    const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    newBoard[randomIndex] = 'O';
    return newBoard;
  };

  const handleTicTacToe = (index: number) => {
    if (gameOver || board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const playerWon = calculateWinner(newBoard);
    if (playerWon) {
      setWinningLine(playerWon.line);
      setGameOver(true);
      setTimeout(() => setShowWonBox(true), 600);
      return;
    }

    // AI move after a delay
    setTimeout(() => {
      const aiBoard = makeAIMove(newBoard);
      setBoard(aiBoard);

      const aiWon = calculateWinner(aiBoard);
      if (aiWon) {
        setWinningLine(aiWon.line);
        setGameOver(true);
      }
    }, 600);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setShowWonBox(false);
    setWinningLine(null);
    setGameOver(false);
  };

  const resetToFirstPage = () => {
    resetGame();
    setCakeBlow(false);
    setScreen('tictactoe');
    setMusicPlaying(false);
    if (mainAudioRef.current) {
      mainAudioRef.current.pause();
      mainAudioRef.current.currentTime = 0;
    }
    if (box4AudioRef.current) {
      box4AudioRef.current.pause();
      box4AudioRef.current.currentTime = 0;
    }
  };

  const TicTacToeCell = ({ index }: { index: number }) => {
    const isWinningCell = winningLine?.includes(index);
    return (
      <button
        onClick={() => handleTicTacToe(index)}
        className="relative w-16 h-16 bg-white border-2 border-pink-300 text-xl font-bold text-pink-600 hover:bg-pink-50 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg"
      >
        {board[index] && (
          <span className={isWinningCell ? 'animate-heart-pulse' : ''}>
            {board[index]}
          </span>
        )}
        {isWinningCell && winningLine && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-red-500 animate-strikethrough" />
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">

      {/* Global Watermark - Made by Pixel Care */}
      <div className="fixed bottom-2 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <span className="bg-black/30 text-white/90 px-3 py-1 rounded-full text-[10px] tracking-widest font-medium backdrop-blur-sm border border-white/20 shadow-sm">
          MADE BY PIXEL CARE
        </span>
      </div>

      <audio ref={mainAudioRef} src="https://res.cloudinary.com/dt9r8o9z7/video/upload/v1775590718/Diet_Mountain_Dew_spotdown.org_uxdqcf.mp3" />
      <audio ref={box4AudioRef} src="https://res.cloudinary.com/dt9r8o9z7/video/upload/q_auto/f_auto/v1775689533/Afsos_spotdown.org_qckadj.mp3" />

      {/* Tic Tac Toe */}
      {screen === 'tictactoe' && (
        <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-50 flex flex-col items-center justify-center p-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-display text-pink-600 mb-2">Tic Tac Toe</h1>
            <p className="text-pink-500 text-sm">Play to unlock your surprise 🎁</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-10 bg-white/80 p-6 rounded-2xl shadow-xl backdrop-blur-sm">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <TicTacToeCell key={index} index={index} />
            ))}
          </div>

          {showWonBox && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 overflow-hidden">
              <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-3xl p-12 shadow-2xl text-center animate-bounce border border-pink-200">
                <FloatingHearts />
                <p className="text-4xl font-display text-pink-600 mb-8 relative z-10">You won!</p>
                <div className="flex gap-4 justify-center relative z-10">
                  <Button onClick={resetGame} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-sm font-bold rounded-full">
                    Play Again
                  </Button>
                  <Button onClick={() => { setScreen('gif1'); playMusic(); resetGame(); }} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 text-sm font-bold rounded-full">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <Button onClick={resetGame} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
              Restart
            </Button>
            <Button onClick={() => { setScreen('gif1'); playMusic(); resetGame(); }} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
              Next
            </Button>
          </div>
        </div>
      )}

      {/* GIF 1 */}
      {screen === 'gif1' && (
        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-100 flex flex-col items-center justify-center p-8">
          <img 
            src={getOptimizedUrl("https://i.ibb.co/5WXF6r7L/4572be0dfbefad294e5d4ab55b110bd2-1.gif", 800)}
            srcSet={getSrcSet("https://i.ibb.co/5WXF6r7L/4572be0dfbefad294e5d4ab55b110bd2-1.gif")}
            alt="GIF 1" 
            width="320"
            height="320"
            fetchpriority="high"
            className="w-80 h-80 mb-12 rounded-2xl shadow-2xl object-cover" 
          />
          <Button onClick={() => setScreen('gif2')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg">
            Next
          </Button>
        </div>
      )}

      {/* GIF 2 - Are you ready? */}
      {screen === 'gif2' && (
        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-pink-100 flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-display text-pink-700 mb-8">Are u ready for surprise?</h1>
          <img 
            src={getOptimizedUrl("https://i.ibb.co/SX7cfTGt/c37e7391eb8723e85aa7e0cfc59df31b.gif", 800)}
            srcSet={getSrcSet("https://i.ibb.co/SX7cfTGt/c37e7391eb8723e85aa7e0cfc59df31b.gif")}
            alt="GIF 2" 
            loading="lazy"
            width="320"
            height="320"
            className="w-80 h-80 mb-12 rounded-2xl shadow-2xl object-cover" 
          />
          <div className="flex gap-6">
            <Button onClick={() => setScreen('giftgrid')} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg">
              Yes
            </Button>
            <Button onClick={() => setScreen('howdareyou')} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg">
              No
            </Button>
          </div>
        </div>
      )}

      {/* How Dare You */}
      {screen === 'howdareyou' && (
        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-pink-100 flex flex-col items-center justify-center p-8">
          <h1 className="text-6xl font-display text-pink-700 mb-12">HOW DARE YOU!</h1>
          <img 
            src={getOptimizedUrl("https://i.ibb.co/TBJLC5Rq/image.gif", 800)}
            srcSet={getSrcSet("https://i.ibb.co/TBJLC5Rq/image.gif")}
            alt="How Dare You" 
            loading="lazy"
            width="320"
            height="320"
            className="w-80 h-80 mb-12 rounded-2xl shadow-2xl object-cover" 
          />
          <Button onClick={() => setScreen('gif2')} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg">
            TRY AGAIN
          </Button>
        </div>
      )}

      {/* Gift Grid - Full Screen */}
      {screen === 'giftgrid' && (
        <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-50 flex flex-col animate-fade-in pb-10">
          <div className="py-4 flex flex-col items-center">
            <h1 className="text-5xl font-salita text-gray-800 mb-1 min-h-[60px]">{typedTitle}</h1>
            <p className="text-lg font-salita text-gray-600 tracking-widest">CLICK ANY GIFT TO OPEN</p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 p-4 place-items-center">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx === 0) setScreen('box1');
                  else if (idx === 1) setScreen('box2');
                  else if (idx === 2) setScreen('box3');
                  else setScreen('box4');
                }}
                className="hover:scale-105 active:scale-95 transition-transform duration-300 group touch-manipulation"
                style={{ width: '150px', height: '150px', padding: 0, backgroundColor: 'transparent', border: 'none', boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={getOptimizedUrl("https://i.ibb.co/yc1QfDRr/File-from-Anuj.webp", 800)}
                  srcSet={getSrcSet("https://i.ibb.co/yc1QfDRr/File-from-Anuj.webp")}
                  alt="Gift Box"
                  width="400"
                  height="400"
                  loading="lazy"
                  style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }}
                />
              </button>
            ))}
          </div>

          <div className="pb-6 flex justify-center">
            <Button onClick={resetToFirstPage} className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg">
              Try Again
            </Button>
          </div>
        </div>
      )}

      {/* Box 1 - Full Screen */}
      {screen === 'box1' && (
        <div className="relative w-full h-full animate-fade-in bg-black">
          <img 
            src={getOptimizedUrl("https://i.ibb.co/gM13LnLf/Screenshot-20260408-190917-Instagram.jpg", 1200)}
            srcSet={getSrcSet("https://i.ibb.co/gM13LnLf/Screenshot-20260408-190917-Instagram.jpg")}
            alt="Box 1" 
            width="1080"
            height="1920"
            loading="lazy"
            className="w-full h-full object-contain" 
          />
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <Button onClick={() => setScreen('giftgrid')} className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-3 text-lg font-bold rounded-full shadow-xl border border-white/40">
              ← Back to Gifts
            </Button>
          </div>
        </div>
      )}

      {/* Box 2 - Full Screen */}
      {screen === 'box2' && (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100 flex flex-col items-center justify-center gap-8 animate-fade-in p-6">
          <img
            src={getOptimizedUrl("https://i.ibb.co/B5MJ6YZ4/05ec496d5faa05d450d280a6d1e9eca1.gif", 800)}
            srcSet={getSrcSet("https://i.ibb.co/B5MJ6YZ4/05ec496d5faa05d450d280a6d1e9eca1.gif")}
            alt="Box 2"
            width="800"
            height="800"
            loading="lazy"
            style={{ width: 'min(80vw, 70vh)', height: 'min(80vw, 70vh)' }}
            className="object-contain rounded-2xl shadow-2xl"
          />
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <Button onClick={() => setScreen('giftgrid')} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-bold rounded-full shadow-xl">
              ← Back to Gifts
            </Button>
          </div>
        </div>
      )}

      {/* Box 3 - Cake Screen (Dark Background, Left-Right Layout) */}
      {screen === 'box3' && !cakeBlow && (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center p-8 animate-fade-in">
          <div className="flex gap-12 max-w-5xl items-center w-full h-full">
            {/* Left: Text */}
            <div className="flex-1 text-white">
              <p className="text-2xl leading-relaxed font-serif">
                Here's your<br />
                virtual cake<br />
                it's calorie-free<br />
                but full of love.
              </p>
              <p className="text-xl font-bold mt-6">
                Blow your candle and<br />
                make your wish
              </p>
            </div>

            {/* Right: Cake & Button */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <img 
                src={getOptimizedUrl("https://i.ibb.co/h1M7sq5v/vecteezy-pink-birthday-cake-with-candles-render-on-transparent-68012421.png", 400)}
                srcSet={getSrcSet("https://i.ibb.co/h1M7sq5v/vecteezy-pink-birthday-cake-with-candles-render-on-transparent-68012421.png")}
                alt="Cake" 
                width="256"
                height="256"
                loading="lazy"
                className="w-64 h-64 object-contain mb-8" 
              />
              <Button onClick={() => setCakeBlow(true)} className="bg-amber-100 hover:bg-amber-200 text-gray-900 px-8 py-3 text-lg font-bold rounded-lg shadow-lg border-2 border-amber-300">
                BLOW
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Box 3 - Letter Screen (After Blow) */}
      {screen === 'box3' && cakeBlow && (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center p-4 md:p-8 animate-fade-in overflow-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl w-full items-center md:items-stretch pb-10">
            <div className="w-full md:flex-1 bg-white/95 rounded-2xl p-5 md:p-8 shadow-2xl md:max-h-[78vh] max-h-[55vh] overflow-y-auto border border-pink-100 backdrop-blur-sm">
              <p className="text-gray-800 text-sm md:text-base leading-relaxed whitespace-pre-wrap font-serif">{LETTER_TEXT}</p>
            </div>
            <div className="w-full md:flex-1 flex flex-col items-center justify-center">
              <img 
                src={getOptimizedUrl("https://i.ibb.co/h1M7sq5v/vecteezy-pink-birthday-cake-with-candles-render-on-transparent-68012421.png", 400)}
                srcSet={getSrcSet("https://i.ibb.co/h1M7sq5v/vecteezy-pink-birthday-cake-with-candles-render-on-transparent-68012421.png")}
                alt="Cake" 
                width="256"
                height="256"
                loading="lazy"
                className="w-52 h-52 md:w-64 md:h-64 object-contain mb-6 md:mb-8" 
              />
              <Button onClick={() => { setScreen('giftgrid'); setCakeBlow(false); }} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg">
                Back
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Box 4 - Full Screen */}
      {screen === 'box4' && (
        <div className="relative w-full h-full animate-fade-in bg-black">
          <img 
            src={getOptimizedUrl("https://i.ibb.co/jky0Dy6x/IMG-20260408-192558-572.jpg", 1200)}
            srcSet={getSrcSet("https://i.ibb.co/jky0Dy6x/IMG-20260408-192558-572.jpg")}
            alt="Box 4" 
            width="1080"
            height="1920"
            loading="lazy"
            className="w-full h-full object-contain" 
          />
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">
            <Button onClick={() => setScreen('giftgrid')} className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-3 text-lg font-bold rounded-full shadow-xl border border-white/40">
              ← Back to Gifts
            </Button>
          </div>
        </div>
      )}

    </div>
  );
}
