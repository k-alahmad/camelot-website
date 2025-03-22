import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute cursor-pointer z-10 right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary/90"
      onClick={onClick}
    >
      <FaAngleRight className="text-secondary text-med lg:text-big" />
    </div>
  );
};
export const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute cursor-pointer z-10 left-2 top-1/2 -translate-y-1/2 rounded-full bg-primary/90"
      onClick={onClick}
    >
      <FaAngleLeft className="text-secondary text-med lg:text-big" />
    </div>
  );
};
