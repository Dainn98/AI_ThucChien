import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import LevelSelectPage from "./pages/LevelSelectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="levels" element={<LevelSelectPage />} />
        <Route path="play/:levelId" element={<GamePage />} />
        {/* Other routes will be added here */}
      </Route>
    </Routes>
  );
}

export default App;
