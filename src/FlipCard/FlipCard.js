import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FlipCard.css";

const FlipCard = ({ image, side = "left", title, sentence, shortSentence }) => {
  const [flipped, setFlipped] = useState(false);
  const isLeft = side === "left";

  return (
    <motion.div
      className={`flip-card-container ${isLeft ? "left" : "right"}`}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
    >
      {/* Flip Container */}
      <motion.div
        className="flip-card"
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Front - Image */}
        <div className="flip-face flip-front">
          <img src={image} alt="card" />
        </div>

        {/* Back - Short Sentence */}
        <div className="flip-face flip-back">
          <p>{shortSentence}</p>
        </div>
      </motion.div>

      {/* Main Sentence + Title beside the card */}
      <div className="card-text">
        {title && <h3 className="card-title">{title}</h3>}
        <p className="card-sentence">{sentence}</p>
      </div>
    </motion.div>
  );
};

export default FlipCard;
