import React from "react";
import HeroCards from "./HeroCards";
import { scrollingCard } from "../../utils";
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg- h-80">
      <div>Word div</div>
      <div className="overflow-auto h-full">
        <div className="hide-scrollbar overflow-scroll flex flex-col gap-4 scrollbar-none">
          {scrollingCard.map((card, index) => (
            <HeroCards
              key={index}
              image={card.image}
              morelink={card.morelink}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
