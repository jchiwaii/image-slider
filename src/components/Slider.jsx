import React, { useState } from "react";
import { descriptions, images } from "../data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 40);
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col">
        <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className={`w-full h-full absolute object-cover rounded-3xl ${
                i === index ? "activeImage" : "inactiveImage"
              }`}
              style={{
                transform: `rotate(${index === i ? 0 : getRandomNumber()}deg)`,
              }}
            />
          ))}
        </div>
        <div className="relative sm:w-[400px] w-[320px] mt-22 lg:mt-5">
          {descriptions.map((desc, i) => (
            <p
              className={`text-center sm:text-xl text-gray-400 absolute transition-all duration-300 ${
                i === index ? "activeDesc" : "inactiveDesc"
              } `}
              key={i}
            >
              {" "}
              {desc}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 lg:-bottom-0 left-1/2 -translate-1/2 flex gap-x-5">
        <button
          className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={() => {
            setIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
          }}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          className="bg-gray-100 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={() => {
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
