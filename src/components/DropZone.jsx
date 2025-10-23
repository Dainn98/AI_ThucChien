import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./DraggableItem";

const DropZone = ({ accepts, onDrop, title, droppedItems = [] }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.PRODUCT,
    drop: (item) => onDrop(item),
    canDrop: (item) => item.type === accepts,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const getBackgroundColor = () => {
    if (isOver && canDrop) {
      return "bg-green-100";
    }
    if (isOver && !canDrop) {
      return "bg-red-100";
    }
    return "bg-gray-100";
  };

  return (
    <div
      ref={drop}
      className={`w-full min-h-[24rem] flex flex-col items-center p-6 border-4 border-dashed rounded-2xl transition-colors duration-300 ${getBackgroundColor()}`}
    >
      <h3 className="text-2xl font-bold text-gray-700 mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full flex-grow">
        {droppedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-2 shadow-md flex flex-col items-center"
          >
            <img
              src={item.imageUrl}
              alt={item.text}
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-xs text-center text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropZone;
