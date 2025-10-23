import React, { useState, useEffect, useRef } from "react";
import { Progress, Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import AnswerCard from "../components/AnswerCard";
import { level1Questions } from "../services/gameData";
import Level2Game from "../components/Level2Game";
import Level3Game from "../components/Level3Game";
import FloatingMascot from "../components/FloatingMascot";

const levelData = {
  1: { title: "Màn 1: Cổng Trường", questions: level1Questions },
};

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [mascotMessage, setMascotMessage] = useState(null); // State for mascot message
  const navigate = useNavigate();
  const { levelId } = useParams();
  const feedbackRef = useRef(null);

  // Render game based on levelId
  if (levelId === "2") {
    return (
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <Level2Game />
          <FloatingMascot />
        </div>
      </div>
    );
  }
  if (levelId === "3") {
    return (
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <Level3Game />
          <FloatingMascot />
        </div>
      </div>
    );
  }

  // Logic for Level 1 (or other click-based levels)
  const currentLevel = levelData[levelId];

  useEffect(() => {
    if (isAnswered && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isAnswered]);

  useEffect(() => {
    if (!currentLevel) {
      // Handle invalid level, e.g., navigate back to level select
      navigate("/levels");
    }
  }, [currentLevel, navigate]);

  if (!currentLevel) {
    return <div>Đang tải màn chơi...</div>; // or a loading spinner
  }

  const currentQuestion = currentLevel.questions[currentQuestionIndex];

  const handleAnswer = (optionId) => {
    if (isAnswered) return;

    const isCorrect = optionId === currentQuestion.correctAnswer;
    setSelectedAnswer(optionId);
    setIsAnswered(true);
    setMascotMessage(currentQuestion.explanation); // Show explanation via mascot

    if (isCorrect) {
      setScore(score + 10);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentLevel.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setMascotMessage(null); // Clear mascot message
    } else {
      // Game over, show final score modal
      Modal.success({
        title: `Chúc mừng bạn đã hoàn thành ${currentLevel.title}!`,
        content: `Bạn đã đạt được ${score} điểm.`,
        onOk: () => navigate("/levels"),
      });
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Game Header */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-primary">
                {currentLevel.title}
              </h2>
              <div className="text-2xl font-bold text-textColor">
                Điểm: {score}
              </div>
            </div>
            <Progress
              percent={
                ((currentQuestionIndex + 1) / currentLevel.questions.length) *
                100
              }
              showInfo={false}
            />
          </div>

          {/* Question Area */}
          <div className="text-center mb-8">
            <img
              src={currentQuestion.imageUrl}
              alt="Tình huống"
              className="max-w-full lg:max-w-4xl mx-auto rounded-2xl shadow-md"
            />
            <p className="text-xl md:text-2xl font-semibold mt-6 text-textColor">
              {currentQuestion.questionText}
            </p>
          </div>

          {/* Answer Options */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {currentQuestion.options.map((option) => (
              <AnswerCard
                key={option.id}
                imageUrl={option.imageUrl}
                text={option.text}
                onClick={() => handleAnswer(option.id)}
                isSelected={selectedAnswer === option.id}
                isCorrect={option.id === currentQuestion.correctAnswer}
              />
            ))}
          </div>

          {/* Feedback & Next Button */}
          {isAnswered && (
            <div className="text-center mt-8" ref={feedbackRef}>
              <button
                onClick={handleNextQuestion}
                className="border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Câu tiếp theo
              </button>
            </div>
          )}
        </div>
      </div>
      <FloatingMascot message={mascotMessage} />
    </>
  );
};

export default GamePage;
