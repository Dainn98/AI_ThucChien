import React, { useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const SelectableItem = ({ item, onSelect }) => {
  const [answered, setAnswered] = useState(null); // null, 'correct', 'incorrect'

  const handleSelect = (choice) => {
    if (answered) return; // Prevent re-answering

    const isCorrect = choice === item.type;
    setAnswered(isCorrect ? "correct" : "incorrect");
    onSelect(isCorrect);
  };

  const getBorderColor = () => {
    if (answered === "correct") return "border-green-500";
    if (answered === "incorrect") return "border-red-500";
    return "border-transparent";
  };

  return (
    <div
      className={`relative flex flex-col items-center p-4 bg-white rounded-2xl shadow-md border-4 transition-all duration-300 ${getBorderColor()}`}
    >
      {answered && (
        <div
          className={`absolute top-2 right-2 text-2xl ${
            answered === "correct" ? "text-green-500" : "text-red-500"
          }`}
        >
          {answered === "correct" ? (
            <CheckCircleOutlined />
          ) : (
            <CloseCircleOutlined />
          )}
        </div>
      )}
      <img
        src={item.imageUrl}
        alt={item.text}
        className="w-32 h-32 object-contain mb-2"
      />
      <p className="text-center font-semibold mb-4 h-12 flex items-center">
        {item.text}
      </p>

      {!answered && (
        <div className="flex justify-center gap-2 w-full">
          <button
            onClick={() => handleSelect("safe")}
            className="flex-1 bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Nên mua
          </button>
          <button
            onClick={() => handleSelect("unsafe")}
            className="flex-1 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          >
            Không nên
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectableItem;
