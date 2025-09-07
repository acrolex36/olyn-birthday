import React from "react";
import FlipCard from "./FlipCard";
import LoveLetter from "../LoveLetter/LoveLetter";
import "./FlipCard.css";

const FlipCardsWrapper = () => {
  return (
    <div className="flip-cards-wrapper">
      <p className="flip-card-page-title">Welcome to Memories Collection</p>
      <p className="flip-card-page-description">
        Here are more memories I made with one of my favourite person
      </p>
      <p className="flip-card-page-note">
        P.s: Each Photo has it's hidden message. Click on it!
      </p>
      <FlipCard
        image={"/pic/IMG_7859.JPG"}
        side="left"
        title="🍽️Foodie Us!"
        sentence="Sharing the same hobby — eating — has brought us even closer. Honestly, 90% of our dates are about food, and I wouldn’t have it any other way 🙃."
        shortSentence="We really should start dieting for rill!!! 🥲"
      />

      <FlipCard
        image={"/pic/IMG_8398.JPG"}
        side="right"
        title="⛪Post-Church Photo"
        sentence="Even if it was just once, I’m so happy I got to share the same faith and attend Mass with you. While many skip, I’m grateful that God gave me someone who submits to Him and His word. We definitely need to do this more often!"
        shortSentence="As fellow sinners, I’m inviting you to join me at church again next Sunday 🙏🏻"
      />

      <FlipCard
        image={"/pic/IMG_0549.JPG"}
        side="left"
        title="🌴 Bali Trip!"
        sentence="Our very first trip together — hectic yet so relaxing. Bali will always have a special spot for us. We may not have gone on many trips yet, but we definitely need to. Let’s keep filling our gallery with more memories together!"
        shortSentence="Bali vibes 🤙🏻🤙🏻"
      />

      <FlipCard
        image={"/pic/IMG_0878.JPG"}
        side="right"
        title="Working Time!"
        sentence="Thank you for always being there — even if it means just sitting quietly while I finish my work. Your presence alone makes everything lighter."
        shortSentence="Olyn with her usual ritual: taking pictures of me while I’m working 😗"
      />

      <FlipCard
        image={"/pic/IMG_1971.JPG"}
        side="left"
        title="BONUS!"
        sentence="I can’t fully explain it, but this moment has a special place in my heart. It felt so calm — the Bali atmosphere, me working, and you right there by my side 🫶🏻."
        shortSentence="Nyari apa hayoo??? 🤭"
      />
      <h1 style={{ marginTop: "80px" }}>Lastly My Birthday Letter for You:</h1>
      <LoveLetter />
    </div>
  );
};

export default FlipCardsWrapper;
