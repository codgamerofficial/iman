"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";

function GeometricShape(props: any) {
    const mesh = useRef<any>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.2;
            mesh.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                {...props}
                ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.1 : 1}
            >
                <icosahedronGeometry args={[2.5, 0]} />
                <MeshDistortMaterial
                    color={hovered ? "#CCFF00" : "#ffffff"}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

export default function ThreeScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto">
            <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <GeometricShape position={[0, 0, 0]} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
