import React, { useState, useEffect, useRef } from "react";
import { Modal, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { level3SpotTheDifference as gameData } from "../services/gameData";

const Level3Game = () => {
  const [foundDifferences, setFoundDifferences] = useState([]);
  const [timeLeft, setTimeLeft] = useState(gameData.timeLimit);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      Modal.error({
        title: "Hết giờ!",
        content: `Bạn chưa tìm thấy hết các điểm sai. Hãy thử lại nhé!`,
        onOk: () => navigate("/levels"),
      });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  useEffect(() => {
    if (foundDifferences.length === gameData.differences.length) {
      Modal.success({
        title: "Xuất sắc! Bạn đã tìm ra tất cả điểm sai!",
        content: `Bạn thật là một chuyên gia an toàn thực phẩm nhí!`,
        onOk: () => navigate("/levels"),
      });
    }
  }, [foundDifferences, navigate]);

  const handleImageClick = (event) => {
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
    </div>
  );
};

export default Level3Game;
