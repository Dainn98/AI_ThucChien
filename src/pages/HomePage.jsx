import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/levels");
  };

  return (
    <div className="container mx-auto flex flex-row items-center justify-center min-h-screen gap-4 px-4 md:px-6 py-8">
      {/* Mascot Image */}
      <div className="w-5/12 md:w-1/3">
        <motion.img
          src="/assets/BeBungKhoe.png"
          alt="Mascot Bé Bụng Khỏe"
          className="max-w-full h-auto"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Game Info */}
      <div className="w-7/12 md:w-2/3 lg:w-1/2 text-center lg:text-left bg-white/70 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-textColor mb-4 leading-tight">
          Vệ Sĩ Thực Phẩm
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
          Cùng Bé Bụng Khỏe học cách nhận biết thực phẩm an toàn và trở thành
          chuyên gia dinh dưỡng nhí!
        </p>
        <motion.button
          className="border-2 border-blue-600 text-blue-600 font-bold py-2 px-4 md:py-4 md:px-10 text-xs md:text-lg rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartGame}
        >
          Bắt đầu Chơi Ngay!
        </motion.button>
      </div>
    </div>
  );
};

export default HomePage;
