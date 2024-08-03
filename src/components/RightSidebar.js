import React from 'react';

const RightSidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h3>Additional Controls</h3>
      <div style={boxStyle}>
        <div style={columnStyle}>Column 1</div>
        <div style={columnStyle}>Column 2</div>
        <div style={columnStyle}>Column 3</div>
      </div>
    </div>
  );
};

const sidebarStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '200px',
  height: '100%',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
  boxSizing: 'border-box'
};

const boxStyle = {
  marginTop: '20px',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const columnStyle = {
  height: '50px',
  margin: '5px 0',
  backgroundColor: '#ddd',
  borderRadius: '4px',
};

export default RightSidebar;
