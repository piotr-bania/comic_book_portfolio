import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const CanvasHero = () => {
return (
<div>
    {/* ---------------------- Canvas ---------------------- */}
    <Canvas className='canvasHero' style={{
            position: "absolute",
            top: "25vh",
            right: "25vw",
            width: "50vw",
            height: "50vh"
            }}>
        <ambientLight color="#FFFFFF" intensity={0.05} />
        <pointLight color="#D0D0D1" intensity={0.25} position={[-2, 0, 2]} />
        <directionalLight color="#697077" intensity={0.25} position={[-2, 0, 2]} />

        <OrbitControls autoRotate autoRotateSpeed={-0.25} />
    </Canvas>
</div>
)
}

export default CanvasHero