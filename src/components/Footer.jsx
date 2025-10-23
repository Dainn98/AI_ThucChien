import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500">
        <p>&copy; {currentYear} Vệ Sĩ Thực Phẩm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
