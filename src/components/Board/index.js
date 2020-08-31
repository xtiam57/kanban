import React from 'react';

export default function Board(props) {
  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const card = document.getElementById(id);

    card.style.display = 'block';

    e.target.appendChild(card);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id={props.id} className={props.className} onDrop={handleDrop} onDragOver={handleDragOver}>
        {props.children}
      </div>
    </>
  );
}
