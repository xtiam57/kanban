import React from 'react';

export default function Card(props) {
  const handleDragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
      >
        {props.children}
      </div>
    </>
  );
}
