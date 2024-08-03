import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Pendulum = ({ length, angle, speed, offset }) => {
  const pendulumRef = useRef();
  const bobRef = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    const origin = [0, 0, 0];
    pendulumRef.current.position.set(...origin);
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const maxAngle = Math.PI; // Restrict maximum angle to 180 degrees
    const newAngle = angle * Math.sin(speed * time + offset);
    
    pendulumRef.current.rotation.z = Math.min(Math.max(newAngle, -maxAngle), maxAngle);
  });

  useEffect(() => {
    // Load the texture and apply it to the background plane
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('../assets/protractor_img.png', (texture) => {
      if (backgroundRef.current) {
        backgroundRef.current.material.map = texture;
        backgroundRef.current.material.needsUpdate = true;
      }
    });
  }, []);

  return (
    <>
    
      
       <mesh ref={backgroundRef} position={[0, 0, -10]} scale={[15, 15, 1]}>
        <planeGeometry args={[15, 15]} />
        <meshBasicMaterial />
      </mesh>

      <group ref={pendulumRef}>
        {/* Rod */}
        <mesh position={[0, -length / 2, 0]}>
          <cylinderGeometry args={[0.1, 0.1, length, 30]} /> {/* Rod thickness */}
          <meshBasicMaterial color="black" />
        </mesh>
        
        {/* Ball */}
        <mesh ref={bobRef} position={[0, -length, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} /> {/* Increased ball size */}
          <meshStandardMaterial color="red" />
        </mesh>
      </group> 
    </>
  );
};

export default Pendulum;
