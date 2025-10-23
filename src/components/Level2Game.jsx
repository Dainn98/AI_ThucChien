import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectableItem from "./SelectableItem";
import { level2DragAndDrop } from "../services/gameData";

const Level2Game = () => {
  // We need a key to force re-render on retry
  const [gameKey, setGameKey] = useState(Date.now());
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const navigate = useNavigate();

  const totalItems = level2DragAndDrop.items.length;

  useEffect(() => {
    // Check if game is over
    if (answeredCount === totalItems) {
      setIsLevelComplete(true);
    }
  }, [answeredCount, totalItems]);

  const handleSelect = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
    setAnsweredCount((prevCount) => prevCount + 1);
  };

  const handleRetry = () => {
    setScore(0);
    setAnsweredCount(0);
    setIsLevelComplete(false);
    // Change the key to force re-mount of all items, resetting their internal state
    setGameKey(Date.now());
  };

  return (
    <div key={gameKey}>
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mt-6 text-textColor">
          Hãy chọn sản phẩm nào Nên Mua và Không Nên Mua nhé!
        </h2>
        <p className="text-lg text-gray-600">Điểm: {score}</p>
      </div>

      {/* Items to be selected */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {level2DragAndDrop.items.map((item) => (
          <SelectableItem key={item.id} item={item} onSelect={handleSelect} />
        ))}
      </div>

      {/* End-of-level buttons */}
      {isLevelComplete && (
        <div className="text-center mt-8 flex justify-center gap-4">
          <button
            onClick={handleRetry}
            className="border-2 border-green-600 text-green-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            Thử lại
          </button>
          <button
            onClick={() => navigate("/levels")}
            className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Chọn màn
          </button>
        </div>
      )}
    </div>
  );
};

export default Level2Game;
