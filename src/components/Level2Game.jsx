import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import DraggableItem from "./DraggableItem";
import DropZone from "./DropZone";
import { level2DragAndDrop } from "../services/gameData";

const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true;
  }
  return false;
};

const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

const Level2Game = ({ onGameEnd }) => {
  const [items, setItems] = useState(level2DragAndDrop.items);
  const [droppedItems, setDroppedItems] = useState({
    "zone-safe": [],
    "zone-unsafe": [],
  });
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleDrop = (zoneId, droppedItem) => {
    // Move item from the list to the correct drop zone
    const newItems = items.filter((item) => item.id !== droppedItem.id);
    setItems(newItems);

    setDroppedItems((prevZones) => ({
      ...prevZones,
      [zoneId]: [...prevZones[zoneId], droppedItem],
    }));

    const newScore = score + 10;
    setScore(newScore);

    // Check if game is over (all items are dropped)
    if (newItems.length === 0) {
      Modal.success({
        title: "Chúc mừng bạn đã hoàn thành Màn 2!",
        content: `Bạn đã đạt được ${newScore} điểm.`,
        onOk: () => navigate("/levels"),
      });
    }
  };

  return (
    <DndProvider backend={backendForDND} options={{ enableMouseEvents: true }}>
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mt-6 text-textColor">
          Hãy kéo các sản phẩm vào đúng giỏ hàng nhé!
        </h2>
      </div>

      {/* Items to be dragged */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {items.map((item) => (
          <DraggableItem key={item.id} {...item} />
        ))}
      </div>

      {/* Drop Zones */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {level2DragAndDrop.dropZones.map((zone) => (
          <DropZone
            key={zone.id}
            {...zone}
            onDrop={(item) => handleDrop(zone.id, item)}
            droppedItems={droppedItems[zone.id]}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Level2Game;
