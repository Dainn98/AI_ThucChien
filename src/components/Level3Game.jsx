import React, { useState, useEffect, useRef } from "react";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { level3SpotTheDifference as gameData } from "../services/gameData";

const Level3Game = () => {
  const [foundDifferences, setFoundDifferences] = useState([]);
  const [timeLeft, setTimeLeft] = useState(gameData.timeLimit);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const imageRef = useRef(null);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const endGame = () => {
    clearInterval(timerRef.current);
    setIsGameEnd(true);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (foundDifferences.length === gameData.differences.length) {
      endGame();
    }
  }, [foundDifferences]);

  const handleImageClick = (event) => {
    if (isGameEnd) return; // Don't allow clicks after game ends

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    gameData.differences.forEach((diff) => {
      const distance = Math.sqrt(
        Math.pow(x - diff.x, 2) + Math.pow(y - diff.y, 2)
      );
      if (
        distance <= diff.radius &&
        !foundDifferences.find((f) => f.id === diff.id)
      ) {
        setFoundDifferences([...foundDifferences, diff]);
      }
    });
  };

  const handleRetry = () => {
    setFoundDifferences([]);
    setTimeLeft(gameData.timeLimit);
    setIsGameEnd(false);
    // Restart timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          {gameData.title}
        </h2>
        <p className="text-lg mb-4">
          Tìm{" "}
          <span className="font-bold text-red-500">
            {gameData.differences.length - foundDifferences.length}
          </span>{" "}
          điểm chưa an toàn trong bức ảnh nhé!
        </p>
        <Progress
          percent={(timeLeft / gameData.timeLimit) * 100}
          showInfo={false}
          strokeColor={{ from: "#108ee9", to: "#87d068" }}
        />
        <p className="font-bold text-xl mt-2">Thời gian còn lại: {timeLeft}s</p>
      </div>

      <div
        className="relative w-full max-w-5xl mx-auto"
        ref={imageRef}
        onClick={handleImageClick}
      >
        <img
          src={gameData.backgroundImageUrl}
          alt="Spot the difference"
          className="w-full rounded-2xl cursor-pointer"
        />
        {foundDifferences.map((diff) => (
          <div
            key={diff.id}
            className="absolute border-4 border-green-500 rounded-full animate-ping"
            style={{
              left: `${diff.x}%`,
              top: `${diff.y}%`,
              width: `${diff.radius * 2}%`,
              height: `${diff.radius * 2}%`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        ))}
      </div>

      {/* End-of-level buttons */}
      {isGameEnd && (
        <div className="text-center mt-8">
          <p className="text-xl font-bold mb-4">
            {foundDifferences.length === gameData.differences.length
              ? "Xuất sắc! Bạn đã tìm ra tất cả điểm sai!"
              : "Hết giờ! Hãy thử lại nhé!"}
          </p>
          <div className="flex justify-center gap-4">
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
        </div>
      )}
    </div>
  );
};

export default Level3Game;
