import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <HomeOutlined className="text-3xl text-primary" />
          <span className="text-2xl font-bold text-textColor">
            Vệ Sĩ Thực Phẩm
          </span>
        </Link>
        {/* Navigation links can be added here later */}
      </div>
    </header>
  );
};

export default Navbar;
