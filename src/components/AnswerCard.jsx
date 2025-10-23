import React from "react";
import { motion } from "framer-motion";

const AnswerCard = ({ imageUrl, text, onClick, isSelected, isCorrect }) => {
  const getBorderColor = () => {
    if (!isSelected) return "border-transparent";
    return isCorrect ? "border-green-500" : "border-red-500";
  };

  return (
    <motion.div
      className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-4 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ${getBorderColor()}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-square w-full">
        <img src={imageUrl} alt={text} className="w-full h-full object-cover" />
      </div>
      <div className="bg-white p-4">
        <p className="text-center text-lg font-semibold text-textColor">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default AnswerCard;
