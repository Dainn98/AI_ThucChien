import React from "react";
import { RotateLeftOutlined } from "@ant-design/icons";

const OrientationLock = () => {
  return (
    <div className="md:hidden fixed inset-0 bg-white z-[9999] flex-col items-center justify-center hidden portrait:flex">
      <RotateLeftOutlined className="text-6xl text-primary mb-4 animate-spin" />
      <p className="text-xl text-textColor font-semibold text-center px-8">
        Vui lòng xoay ngang màn hình để có trải nghiệm tốt nhất!
      </p>
    </div>
  );
};

export default OrientationLock;
