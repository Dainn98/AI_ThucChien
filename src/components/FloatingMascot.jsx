import React from "react";
import { motion } from "framer-motion";

const FloatingMascot = ({ message }) => {
  return (
    <motion.div
      className="fixed bottom-2 left-2 md:bottom-4 md:left-4 w-auto z-50 flex items-end group pointer-events-none"
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
    >
      {/* Mascot Image */}
      <motion.img
        src="/assets/BeBungKhoe.png"
        alt="Mascot Bé Bụng Khỏe"
        className="w-16 md:w-24 h-auto drop-shadow-lg pointer-events-auto"
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Speech Bubble */}
      {message && (
        <motion.div
          className="relative ml-2 mb-6 md:mb-8 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-200 w-48 md:w-64 group-hover:opacity-50 transition-opacity duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <p className="text-sm text-gray-800">{message}</p>
          {/* Speech bubble tail */}
          <div className="absolute left-[-10px] bottom-4 w-0 h-0 border-t-8 border-t-transparent border-r-[10px] border-r-white border-b-8 border-b-transparent"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FloatingMascot;
