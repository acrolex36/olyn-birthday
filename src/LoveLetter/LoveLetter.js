import React, { useState } from "react";
import "./LoveLetter.css";

const LoveLetter = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="body">
      <div
        className="container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="valentines">
          {/* Envelope */}
          <div className="envelope">
            <div className="envelope-before"></div>
          </div>

          {/* Front flap */}
          <div className="front">
            <div className="front-before"></div>
          </div>

          {/* Card */}
          <div
            className={`card ${isHovered ? "hovered" : ""}`}
            onClick={() => setIsModalOpen(true)}
          >
            <div className="card-before"></div>
            <div className="text">
              Click
              <br />
              Me!
              <br />
            </div>
            {/* Main heart on card */}
            <div className="heart">
              <div className="heart-before"></div>
              <div className="heart-after"></div>
            </div>
          </div>

          {/* Floating hearts */}
          <div className="hearts">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className={`floating-heart floating-heart-${num}`}>
                <div className="floating-heart-before"></div>
                <div className="floating-heart-after"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Shadow */}
        <div className="shadow"></div>
      </div>

      {/* Modal */}
      <div
        className={`modal ${isModalOpen ? "open" : ""}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="close-button"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>
          <div className="modal-title">Birthday Letter</div>
          <div className="modal-text">
            It’s been a year since we first started talking. In that time, two
            of your birthdays have already passed, yet I still feel like I
            haven’t given you a gift that truly reflects how much you mean to
            me. This may not be the best, but I hope you can see the love and
            effort I’ve poured into it.
            <br />
            <br />
            I’m truly grateful to God for bringing you into my life. You are one
            of the most wonderful gifts He has ever given me. Things weren’t
            always easy at the start, but we made it through — and now I get to
            call you my girl.
            <br />
            <br />
            Thank you for accepting me as I am. Thank you for supporting me,
            even from afar. Thank you for loving me unconditionally. There are
            countless things I want to thank you for, but no letter would ever
            be long enough to contain them all. And along with those thank-yous,
            there are just as many apologies for the times I’ve fallen short.
            <br />
            <br />
            Today, I want to wish you the happiest of birthdays. I pray that you
            always stay true to yourself, and that every dream you hold in your
            heart becomes reality. Remember, I’ll always be here cheering you on
            😉. On this 24th birthday, I also hope you continue to grow — not
            only in wisdom and maturity, but also spiritually. May God bless
            every path you take and may you always submit to Him and His word.
            <br />
            <br />
            Lastly, I hope you’ll continue to be patient with me — and
            especially with my silly jokes 😜. Please know I tease you only
            because I love you and feel so comfortable being myself around you
            😘.
            <br />
            <br />
            As I close this letter, I just want to say that my greatest hope is
            for us to keep growing together as partners. May we always support
            one another through every step ahead. Storms may come, but I believe
            we can face them side by side, never against each other.
            <br />
            <br />I love you, Olyn. Here’s to many more years together. Once
            again...
          </div>
          <div className="modal-birthday">Happy Birthday Olain! ❤️</div>
          <div className="modal-text">With Love, <br/> — Aris</div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
