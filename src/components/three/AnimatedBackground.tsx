'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Box } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ProfessionalFigureProps {
  position: [number, number, number];
  rotation: [number, number, number];
  laptopPosition: [number, number, number];
}

const ProfessionalFigure = ({
  position = [2, -1, 0],
  rotation = [0, -0.5, 0],
  laptopPosition = [0.3, 1.2, 0.2]
}: ProfessionalFigureProps) => {
  return (
    <Float
      speed={1}
      rotationIntensity={0.1}
      floatIntensity={0.1}
    >
      <group position={position} rotation={rotation}>
        {/* Body */}
        <Box args={[0.7, 1.2, 0.3]} position={[0, 1.1, 0]}>
          <meshStandardMaterial color="#2C3E50" />
        </Box>

        {/* Head */}
        <Sphere args={[0.2, 32, 32]} position={[0, 1.9, 0]}>
          <meshStandardMaterial color="#E0AC69" />
        </Sphere>

        {/* Arms */}
        <Box args={[0.2, 0.8, 0.2]} position={[0.45, 1.2, 0]}>
          <meshStandardMaterial color="#2C3E50" />
        </Box>
        <Box args={[0.2, 0.8, 0.2]} position={[-0.45, 1.2, 0]}>
          <meshStandardMaterial color="#2C3E50" />
        </Box>

        {/* Legs */}
        <Box args={[0.25, 1, 0.25]} position={[0.2, 0.5, 0]}>
          <meshStandardMaterial color="#34495E" />
        </Box>
        <Box args={[0.25, 1, 0.25]} position={[-0.2, 0.5, 0]}>
          <meshStandardMaterial color="#34495E" />
        </Box>

        {/* Shoes */}
        <Box args={[0.3, 0.1, 0.4]} position={[0.2, 0, 0.05]}>
          <meshStandardMaterial color="#000000" />
        </Box>
        <Box args={[0.3, 0.1, 0.4]} position={[-0.2, 0, 0.05]}>
          <meshStandardMaterial color="#000000" />
        </Box>

        {/* Laptop */}
        <Box args={[0.5, 0.02, 0.3]} position={laptopPosition} rotation={[0.2, -0.3, 0]}>
          <meshStandardMaterial color="#95A5A6" />
        </Box>
      </group>
    </Float>
  );
};

const DeskSetup = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scale = isMobile ? 0.8 : 1;
  const deskWidth = isMobile ? 2.5 : 3;

  return (
    <group position={[0, -1, 0]} rotation={[0, -0.2, 0]} scale={scale}>
      {/* Desk */}
      <Box args={[deskWidth, 0.1, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#444" />
      </Box>

      {/* Monitor */}
      <Box args={[1.2, 0.8, 0.05]} position={[0, 0.8, -0.3]}>
        <meshStandardMaterial color="#222" />
      </Box>
      <Box args={[1.1, 0.7, 0.02]} position={[0, 0.8, -0.28]}>
        <meshStandardMaterial color="#1E90FF" />
      </Box>

      {/* Monitor Stand */}
      <Box args={[0.1, 0.4, 0.1]} position={[0, 0.4, -0.3]}>
        <meshStandardMaterial color="#222" />
      </Box>

      {/* Laptop */}
      <group position={[-0.5, 0.15, 0]} rotation={[0.2, 0.3, 0]}>
        <Box args={[0.8, 0.02, 0.5]}>
          <meshStandardMaterial color="#666" />
        </Box>
        <Box args={[0.8, 0.5, 0.02]} position={[0, 0.25, -0.25]} rotation={[-0.5, 0, 0]}>
          <meshStandardMaterial color="#666" />
        </Box>
      </group>
    </group>
  );
};

const AnimatedSpheres = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01;
    }
  });

  const radius = isMobile ? 2.5 : 3;

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      {[...Array(12)].map((_, i) => (
        <AnimatedSphere
          key={i}
          position={[
            Math.sin(i * (Math.PI * 2 / 12)) * radius,
            Math.cos(i * (Math.PI * 2 / 12)) * radius,
            0
          ]}
          color={i % 2 ? "#4F46E5" : "#60A5FA"}
        />
      ))}
    </group>
  );
};

const AnimatedSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Sphere
      args={[0.1, 16, 16]}
      position={position}
    >
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </Sphere>
  );
};

export default function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scale = isMobile ? 0.65 : 1;
  const figureDistance = isMobile ? 1.5 : 2;
  const cameraDistance = isMobile ? 12 : 8;

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 2, cameraDistance],
          fov: isMobile ? 35 : 45
        }}
        style={{ background: 'transparent' }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          enableRotate={!isMobile}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <spotLight position={[-2, 5, 2]} intensity={0.5} />

        <group position={[0, 0, 0]} scale={scale}>
          <DeskSetup />
          {/* Right side person */}
          <ProfessionalFigure
            position={[figureDistance, -1, 0]}
            rotation={[0, -0.5, 0]}
            laptopPosition={[0.3, 1.2, 0.2]}
          />
          {/* Left side person */}
          <ProfessionalFigure
            position={[-figureDistance, -1, 0]}
            rotation={[0, 0.5, 0]}
            laptopPosition={[-0.3, 1.2, 0.2]}
          />
          <AnimatedSpheres />
        </group>

        <fog attach="fog" args={['#202020', 5, 15]} />
      </Canvas>
    </div>
  );
} 