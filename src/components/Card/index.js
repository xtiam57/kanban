import React from 'react';

export default function Card(props) {
  const handleDragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('id', target.id);

    setTimeout(() => {
      target.style.opacity = 0.2;
    }, 0);
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const card = document.getElementById(props.id);
    card.style.opacity = 1;
  };

  return (
    <>
      <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDrop}
      >
        {props.children}
      </div>
    </>
  );
}
