import React from 'react';

const LeftSidebar = ({ length, setLength, angle, setAngle, speed, setSpeed }) => {
  return (
    <div style={sidebarStyle}>
      <div>
        <label>Length: </label>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={length}
          onChange={(e) => setLength(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Angle: </label>
        <input
          type="range"
          min="0"
          max={Math.PI}
          step="0.01"
          value={angle}
          onChange={(e) => setAngle(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Speed: </label>
        <input
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

const sidebarStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '200px',
  height: '100%',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
};

export default LeftSidebar;

