import React, { useState } from "react";
import Press from "./components/Press";
import OtherCards from "./components/OtherCards";
import Hero from "./components/Hero";
import { accordionRendering, cardRendering, pressDetails } from "../utils";
import Accordion from "./components/Accordion";

const KoboskyBlog = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <section className="px-24 md:px-2 sm:px-2 xs:px-1 mt-20 py-5 mb-5 bg-[#0c513f]">
        <Hero />
      </section>
      <section className="px-24 md:px-2 sm:px-2 xs:px-1">
        <div className="grid grid-cols-3 gap-y-5 md:flex md:flex-wrap md:gap-2 sm:flex sm:flex-col sm:gap-4">
          {cardRendering.map((card, index) => (
            <OtherCards
              key={index}
              image={card.image}
              morelink={card.morelink}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </section>
      <section className="px-24 md:px-2 sm:px-2 xs:px-1 py-20">
        <h4 className="text-6xl pb-4 font-black border-b border-gray-800">
          Press
        </h4>
        {pressDetails.map((pressDetail, index) => (
          <Press
            key={index}
            content={pressDetail.content}
            image={pressDetail.image}
            link={pressDetail.link}
          />
        ))}
      </section>
      {/*<section className="h-20">
        {accordionRendering.map((item, index) => (
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Accordion
                key={index}
                title={item.title}
                isOpen={index === openAccordionIndex}
                onToggle={() => toggleAccordion(index)}
              />
            </div>
            {openAccordionIndex === index && (
              <div className="w-[50%]">{item.content}</div>
            )}
          </div>
        ))}
            </section>*/}
      <section className="flex gap-2">
        <div className="h-80 overflow-y-scroll p-3 w-[50%]">
          <div className="">
            {accordionRendering.map((item, index) => (
              <div key={index} className="">
                <Accordion
                  title={item.title}
                  isOpen={index === openAccordionIndex}
                  onToggle={() => toggleAccordion(index)}
                />
              </div>
            ))}
          </div>
        </div>
        {openAccordionIndex !== null && (
          <div className="w-[50%] relative h-auto bg-white ml-4">
            {accordionRendering[openAccordionIndex].content}
          </div>
        )}
      </section>
    </div>
  );
};

export default KoboskyBlog;
