import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrientationLock from "../components/OrientationLock"; // Import the component

const MainLayout = () => {
  return (
    <div
      className="min-h-screen flex flex-col font-sans bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/background.png")` }}
    >
      <OrientationLock /> {/* Add the component here */}
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
