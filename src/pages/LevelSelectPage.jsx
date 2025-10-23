import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShopOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const LevelCard = ({ level, title, description, icon, onClick }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer border-2 border-transparent hover:border-blue-600"
    onClick={() => onClick(level)}
    whileHover={{ y: -10 }}
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
      <h3 className="text-2xl font-bold text-textColor">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const LevelSelectPage = () => {
  const navigate = useNavigate();

  const handleLevelSelect = (level) => {
    navigate(`/play/${level}`);
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-textColor">
          Chọn Màn Chơi
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <LevelCard
            level={1}
            title="Màn 1: Cổng Trường"
            description="Học cách nhận biết các loại thức ăn vặt và hàng quán an toàn."
            icon={<ShopOutlined className="text-3xl text-blue-600" />}
            onClick={handleLevelSelect}
          />
          <LevelCard
            level={2}
            title="Màn 2: Căn-tin Thông Thái"
            description="Kéo thả các sản phẩm vào đúng giỏ hàng 'Nên' hoặc 'Không nên' mua."
            icon={<ShoppingCartOutlined className="text-3xl text-blue-600" />}
            onClick={handleLevelSelect}
          />
          <LevelCard
            level={3}
            title="Màn 3: Siêu Thị Nhí"
            description="Thử tài tinh mắt tìm ra các điểm mất an toàn thực phẩm trong siêu thị."
            icon={<SearchOutlined className="text-3xl text-blue-600" />}
            onClick={handleLevelSelect}
          />
          {/* Add more levels here */}
        </div>
      </div>
    </div>
  );
};

export default LevelSelectPage;
