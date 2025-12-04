import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Loader, Environment, Stars, ContactShadows, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import FloatingShapes from './FloatingShapes'

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 2]}
            >
                {/* Background */}
                <color attach="background" args={['#000000']} />
                <fog attach="fog" args={['#000000', 5, 20]} />

                {/* Lighting - warm tones matching logo */}
                <ambientLight intensity={0.3} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.3}
                    penumbra={1}
                    intensity={2}
                    castShadow
                    color="#FFD700"
                />
                <spotLight
                    position={[-10, -10, -5]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1.5}
                    color="#FF6B35"
                />
                <pointLight position={[0, 5, 5]} intensity={1} color="#DC143C" />

                <Suspense fallback={null}>
                    <FloatingShapes />
                    <Stars
                        radius={150}
                        depth={80}
                        count={8000}
                        factor={6}
                        saturation={0}
                        fade
                        speed={1.5}
                    />
                    <Environment preset="night" />
                    <ContactShadows
                        position={[0, -5, 0]}
                        opacity={0.5}
                        scale={30}
                        blur={2.5}
                        far={5}
                    />

                    {/* Subtle camera controls - very slow auto-rotation */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.3}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />

                    {/* Post-processing effects */}
                    <EffectComposer>
                        <Bloom
                            intensity={0.5}
                            luminanceThreshold={0.2}
                            luminanceSmoothing={0.9}
                        />
                    </EffectComposer>
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    )
}
