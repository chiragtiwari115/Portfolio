import React from "react";

const TechIcons = ({ model }) => {
  return (
    <div className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24">
      <img
        src={model.modelPath}   // logo from modelPath
        alt={model.name}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

export default TechIcons;
