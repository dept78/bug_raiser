import React, { useRef, useState } from 'react';
import { useScreenshot } from 'use-react-screenshot';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import CanvasDraw from 'react-canvas-draw';

const OptionsMenu = ({ onClose }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [image, takeScreenshot] = useScreenshot();
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showRetakeButton, setShowRetakeButton] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleFullscreen = () => {
    takeScreenshot(ref.current)
      .then((img) => {
        setFullscreenImage(img);
        setShowRetakeButton(true);
        setShowEditButton(true);
        setShowSaveButton(true);
      })
      .catch((err) => console.error('Error taking screenshot:', err));
  };

  const handleRetake = () => {
    setFullscreenImage(null);
    setShowRetakeButton(false);
    setShowEditButton(false);
    setShowSaveButton(false);
  };

  const handleCloseFullscreen = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleEdit = () => {
    setIsDrawing(true);
  };

  const handleErase = () => {
    ref.current.clear();
  };

  const handleZoomIn = () => {
    setZoomLevel(prevZoom => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 0.1));
  };

  const handleDrawingFinish = () => {
    setIsDrawing(false);
  };

  const handleSave = () => {
    navigate('/issueform');
  };

  return (
    <div className="options-menu">
      {!fullscreenImage && (
        <button onClick={handleCloseFullscreen}>Cancel</button>
      )}
      {!fullscreenImage && (
        <button onClick={handleFullscreen}>Full Screen</button>
      )}
      {fullscreenImage && (
        <button onClick={handleRetake}>Retake</button>
      )}
      {fullscreenImage && (
        <div className="fullscreen-image-container">
          <button onClick={handleCloseFullscreen}>Close</button>
          <Draggable>
            <div style={{ display: isDrawing ? 'none' : 'block' }}>
              <img
                src={fullscreenImage}
                alt="Fullscreen Screenshot"
                className="fullscreen-image"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
          </Draggable>
          <div style={{ display: isDrawing ? 'block' : 'none' }}>
            <CanvasDraw
              ref={ref}
              className="drawing-canvas"
              canvasWidth={window.innerWidth * zoomLevel}
              canvasHeight={window.innerHeight * zoomLevel}
              hideGrid
              brushRadius={2}
              brushColor="#000"
              lazyRadius={0}
              immediateLoading={true}
              saveData={null}
              disabled={false}
              hideInterface={false}
              imgSrc={fullscreenImage}
              canvasStyle={{ cursor: 'crosshair' }}
              onChange={() => {}}
              loadTimeOffset={0}
            />
          </div>
          {showEditButton && (
            <div>
              <button onClick={handleEdit}>Draw</button>
              <button onClick={handleErase}>Erase</button>
              <button onClick={handleZoomIn}>Zoom In</button>
              <button onClick={handleZoomOut}>Zoom Out</button>
              {showSaveButton && (
                <button onClick={handleSave}>Save</button>
              )}
            </div>
          )}
        </div>
      )}
      <div ref={ref}>
        <h1>Options Menu</h1>
        <p>This is the content of the options menu.</p>
      </div>
    </div>
  );
};

export default OptionsMenu;
















