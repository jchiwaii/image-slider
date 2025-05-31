import React, { useState } from "react";
import { descriptions, images } from "../data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 40);
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleChange = (newIndex) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(false);
    }, 400); // match transition duration
  };

  return (
    <div>
      <div className="flex gap-x-20 items-center lg:flex-row flex-col lg:h-[400px] lg:items-center">
        <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative overflow-hidden">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className={`
                w-full h-full absolute object-cover rounded-3xl
                transition-all duration-400 ease-in-out
                ${
                  i === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0 pointer-events-none"
                }
              `}
              style={{
                transform: `rotate(${index === i ? 0 : getRandomNumber()}deg)`,
              }}
            />
          ))}
        </div>
        <div className="relative sm:w-[400px] w-[320px] mt-22 lg:mt-5 h-[80px]">
          {descriptions.map((desc, i) => (
            <p
              className={`
                text-center sm:text-xl text-gray-400 absolute left-0 right-0
                transition-all duration-400 ease-in-out
                ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }
              `}
              key={i}
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-x-5">
        <button
          className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          disabled={animating}
          onClick={() =>
            handleChange(index === 0 ? images.length - 1 : index - 1)
          }
        >
          <ArrowLeft size={18} />
        </button>
        <button
          className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          disabled={animating}
          onClick={() =>
            handleChange(index === images.length - 1 ? 0 : index + 1)
          }
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
