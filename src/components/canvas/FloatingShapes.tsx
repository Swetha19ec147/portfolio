import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const Shape = ({
    position,
    color,
    scale,
    speed,
    geometry = 'icosahedron'
}: {
    position: [number, number, number]
    color: string
    scale: number
    speed: number
    geometry?: 'icosahedron' | 'sphere' | 'torus' | 'octahedron'
}) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01 * speed
            meshRef.current.rotation.y += 0.015 * speed
            // Add subtle floating effect based on time
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.001
        }
    })

    const renderGeometry = () => {
        switch (geometry) {
            case 'sphere':
                return <sphereGeometry args={[1, 32, 32]} />
            case 'torus':
                return <torusGeometry args={[1, 0.4, 16, 100]} />
            case 'octahedron':
                return <octahedronGeometry args={[1, 0]} />
            default:
                return <icosahedronGeometry args={[1, 1]} />
        }
    }

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                ref={meshRef}
                position={position}
                scale={hovered ? scale * 1.3 : scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {renderGeometry()}
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.5}
                    radius={1}
                    metalness={0.2}
                    roughness={0.3}
                />
            </mesh>
        </Float>
    )
}

export default function FloatingShapes() {
    return (
        <group>
            {/* Main hero shapes */}
            <Shape position={[-3, 0, -2]} color="#FFD700" scale={1.8} speed={0.8} geometry="icosahedron" />
            <Shape position={[3, 1, -1]} color="#FF6B35" scale={1.5} speed={1.2} geometry="octahedron" />
            <Shape position={[0, -2.5, -3]} color="#DC143C" scale={1.3} speed={1} geometry="sphere" />

            {/* Secondary accent shapes */}
            <Shape position={[-4, 3, -4]} color="#FFA500" scale={0.9} speed={1.5} geometry="torus" />
            <Shape position={[4, -2, -2]} color="#FF8C00" scale={1.2} speed={0.9} geometry="icosahedron" />
            <Shape position={[1.5, 2, -5]} color="#FFB347" scale={0.7} speed={1.3} geometry="octahedron" />

            {/* Background ambient shapes */}
            <Shape position={[-2, -1, -6]} color="#FF4500" scale={0.6} speed={0.7} geometry="sphere" />
            <Shape position={[2.5, -3, -4]} color="#FFAA33" scale={0.8} speed={1.1} geometry="icosahedron" />
        </group>
    )
}
