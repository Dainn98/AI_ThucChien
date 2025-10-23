import React from "react";
import { useDrag } from "react-dnd";

export const ItemTypes = {
  PRODUCT: "product",
};

const DraggableItem = ({ id, imageUrl, text, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PRODUCT,
    item: { id, type, imageUrl, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md cursor-grab"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img
        src={imageUrl}
        alt={text}
        className="w-32 h-32 object-contain mb-2"
      />
      <p className="text-center font-semibold">{text}</p>
    </div>
  );
};

export default DraggableItem;
