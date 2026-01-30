import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Plane, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Terrain() {
    const mesh = useRef<THREE.Mesh>(null);

    // Create a grid of points
    // buffer geometry for performance
    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(100, 100, 60, 60);
        return geo;
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;

        // Animate vertices to create waves
        const positions = mesh.current.geometry.attributes.position;
        const count = positions.count;
        const time = state.clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);

            // Calculate wave height based on position and time
            // Multiple sine waves for more "terrain-like" look
            const z = Math.sin(x * 0.2 + time * 0.5) * 2 +
                Math.sin(y * 0.2 + time * 0.5) * 2 +
                Math.sin((x + y) * 0.1 + time * 0.2) * 1;

            positions.setZ(i, z);
        }
        positions.needsUpdate = true;

        // Rotate slightly for effect
        // mesh.current.rotation.z += 0.001;
    });

    return (
        <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, -10]}>
            <primitive object={geometry} attach="geometry" />
            <meshStandardMaterial
                color="#CCFF00"
                wireframe
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

export default function ThreeScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto opacity-60">
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
                {/* Fog to blend edges into background color (black-ish/stone-950) */}
                <fog attach="fog" args={['#0c0a09', 5, 40]} />

                <ambientLight intensity={0.5} />

                <Terrain />

                {/* Subtle Stars in background */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
}
