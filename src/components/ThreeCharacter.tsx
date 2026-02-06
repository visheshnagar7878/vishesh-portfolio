'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import * as THREE from 'three';

function NinjaBot() {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (groupRef.current) {
            // Look at mouse/pointer with dampening
            const x = (state.pointer.x * Math.PI) / 6;
            const y = (state.pointer.y * Math.PI) / 6;

            groupRef.current.rotation.y = x;
            groupRef.current.rotation.x = -y;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            {/* Scaled up group */}
            <group ref={groupRef} scale={1.4}>
                {/* Head */}
                <Box
                    args={[1, 1, 1]}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.8} />
                </Box>

                {/* Ninja Headband (Red) */}
                <group position={[0, 0.35, 0]}>
                    <Box args={[1.05, 0.15, 1.05]}>
                        <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" emissiveIntensity={0.2} />
                    </Box>
                    {/* Knot tails (Flying in wind) */}
                    <group position={[0.6, 0.1, -0.4]} rotation={[0, 0.5, -0.3]}>
                        <Box args={[0.5, 0.15, 0.05]} position={[0.25, 0, 0]}>
                            <meshStandardMaterial color="#ef4444" />
                        </Box>
                    </group>
                    <group position={[0.6, -0.1, -0.4]} rotation={[0, 0.2, 0.5]}>
                        <Box args={[0.4, 0.15, 0.05]} position={[0.2, 0, 0]}>
                            <meshStandardMaterial color="#ef4444" />
                        </Box>
                    </group>
                </group>

                {/* Eyes (Glowing Slit) */}
                <group position={[0, 0.1, 0.51]}>
                    <Box args={[0.7, 0.15, 0.05]}>
                        <meshStandardMaterial
                            color={hovered ? "#00fffa" : "#ffffff"}
                            emissive={hovered ? "#00fffa" : "#ffffff"}
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </Box>
                </group>

                {/* Body Hint / Shoulders */}
                <group position={[0, -0.85, 0]}>
                    <Box args={[1.2, 0.7, 0.8]}>
                        <meshStandardMaterial color="#262626" />
                    </Box>
                    {/* Chest Plate / Code Symbol */}
                    <group position={[0, 0, 0.41]}>
                        <Box args={[0.1, 0.3, 0.05]} position={[-0.2, 0, 0]} rotation={[0, 0, 0.2]}>
                            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" />
                        </Box>
                        <Box args={[0.1, 0.3, 0.05]} position={[0.2, 0, 0]} rotation={[0, 0, -0.2]}>
                            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" />
                        </Box>
                    </group>
                </group>

                {/* Arms (Floating) */}
                <group position={[-0.8, -0.6, 0.2]}>
                    <Box args={[0.3, 0.6, 0.3]}>
                        <meshStandardMaterial color="#1a1a1a" />
                    </Box>
                </group>
                <group position={[0.8, -0.6, 0.2]}>
                    <Box args={[0.3, 0.6, 0.3]}>
                        <meshStandardMaterial color="#1a1a1a" />
                    </Box>
                </group>

                {/* Sword Handle on Back */}
                <group position={[0.3, -0.2, -0.6]} rotation={[0, 0, -0.5]}>
                    <Box args={[0.1, 0.8, 0.1]}>
                        <meshStandardMaterial color="#333" />
                    </Box>
                    <Box args={[0.2, 0.05, 0.1]} position={[0, 0.3, 0]}>
                        <meshStandardMaterial color="#d4af37" />
                    </Box>
                </group>

            </group>
        </Float>
    );
}

export default function ThreeCharacter() {
    return (
        <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Adjusted camera position to zoom in (smaller z value = closer) */}
            <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={2} />
                <pointLight position={[-10, -10, -10]} intensity={1} />
                <NinjaBot />
            </Canvas>
        </div>
    );
}
