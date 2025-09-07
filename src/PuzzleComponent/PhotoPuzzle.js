import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./PhotoPuzzle.css";

const sentenceText = `The very first moment we met… it’s hard to believe that almost a year has already passed. We both looked a little shy back then—you can even see it clearly in the photo 😅. But that’s where our story truly began. From holding back and pretending to be cool, to opening up and showing our truest, most expressive selves to each other… That single moment became the door to all the beautiful memories we’ve shared since. And now, let’s take a look at them together. ❤️`;

const PhotoPuzzle = () => {
  const [image, setImage] = useState(null);
  const [board, setBoard] = useState([]);
  const [solutionBoard, setSolutionBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [wordsShown, setWordsShown] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const puzzleImage = process.env.PUBLIC_URL + "/pic/IMG_6300.JPG";
    setImage(puzzleImage);
  }, []);

  useEffect(() => {
    if (image) cutAndCropImage(image);
  }, [image]);

  const cutAndCropImage = (img) => {
    const imgElement = new Image();
    imgElement.src = img;

    imgElement.onload = () => {
      const size = Math.min(imgElement.width, imgElement.height);
      const offsetX = (imgElement.width - size) / 2;
      const offsetY = (imgElement.height - size) / 2;

      const pieces = [];
      const tileSize = size / 3;

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const canvas = document.createElement("canvas");
          canvas.width = tileSize;
          canvas.height = tileSize;
          const ctx = canvas.getContext("2d");

          ctx.drawImage(
            imgElement,
            offsetX + col * tileSize,
            offsetY + row * tileSize,
            tileSize,
            tileSize,
            0,
            0,
            tileSize,
            tileSize
          );

          const piece = canvas.toDataURL();
          pieces.push(piece);
        }
      }

      setSolutionBoard(pieces);
      setBoard(shuffleBoard([...pieces]));
    };
  };

  const shuffleBoard = (board) => {
    const newBoard = [...board];
    for (let i = newBoard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newBoard[i], newBoard[j]] = [newBoard[j], newBoard[i]];
    }
    return newBoard;
  };

  const handleDragStart = (index) => setDraggedIndex(index);

  const handleDrop = (targetIndex) => {
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const newBoard = [...board];
    [newBoard[draggedIndex], newBoard[targetIndex]] = [
      newBoard[targetIndex],
      newBoard[draggedIndex],
    ];
    setBoard(newBoard);
    setDraggedIndex(null);

    if (checkWin(newBoard)) {
      setWon(true);
      setShowModal(true);
      setWordsShown(0);
      animateSentence();
    }
  };

  const checkWin = (currentBoard) =>
    currentBoard.every((tile, idx) => tile === solutionBoard[idx]);

  const animateSentence = () => {
    const words = sentenceText.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      setWordsShown((prev) => prev + 1);
      i++;
      if (i >= words.length) clearInterval(interval);
    }, 150);
  };

  return (
    <div className="photo-puzzle-page">
      <div className="puzzle-card">
        <h1 className="puzzle-title">You Cracked the Code!</h1>
        <h2 className="puzzle-subtitle">
          To reminisce our first meet, let’s play puzzle
        </h2>
        <p className="puzzle-hint">
          Hint: Solve the puzzle by drag-and-drop the tiles
        </p>

        {image && (
          <div className="board">
            {board.map((tile, index) => (
              <div
                key={index}
                className="tile"
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
                style={tile ? { backgroundImage: `url(${tile})` } : {}}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img src={image} alt="Completed Puzzle" className="modal-image" />
              <p className="animated-sentence">
                {sentenceText.split(" ").slice(0, wordsShown).join(" ")}
              </p>
              {wordsShown >= sentenceText.split(" ").length && (
                <motion.button
                  className="next-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => navigate("/message")}
                >
                  Let's Go →
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoPuzzle;
