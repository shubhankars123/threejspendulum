
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Pendulum from './components/Pendulum';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

const App = () => {
  const [length, setLength] = useState(2);
  const [angle, setAngle] = useState(Math.PI / 4);
  const [speed, setSpeed] = useState(1);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60, near: 0.1, far: 200 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Pendulum length={length} angle={angle} speed={speed} offset={0} />
        <Pendulum length={length} angle={angle} speed={speed * 1.5} offset={Math.PI / 2} />
      </Canvas>
      <LeftSidebar length={length} setLength={setLength} angle={angle} setAngle={setAngle} speed={speed} setSpeed={setSpeed} />
      <RightSidebar />
    </div>
  );
};

export default App;


