// FloatingIcon.js
import React, { useState, useRef } from 'react';
import './FloatingIcon.css';
import Popover from './Popover';

const FloatingIcon = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const iconRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - iconRef.current.offsetWidth / 2;
      const newY = e.clientY - iconRef.current.offsetHeight / 2;
      setPosition({ x: newX, y: newY });
    }
  };

  const togglePopover = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  return (
    <div
      className="floating-icon-container"
      style={{ left: position.x, top: position.y }}
    >
      <div
        className="floating-icon"
        ref={iconRef}
        onClick={togglePopover}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      ></div>
      {isPopoverOpen && <Popover onClose={togglePopover} />}
    </div>
  );
};

export default FloatingIcon;

