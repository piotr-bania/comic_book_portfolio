import { Suspense } from 'react'
import { Canvas, useLoader  } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import img from '../../public/logo.svg'

const CanvasHero = () => {
return (
<div>
    {/* ---------------------- Canvas ---------------------- */}
    <Canvas className='canvasHero' style={{
            position: "absolute",
            top: "0vh",
            right: "0vw",
            width: "100vw",
            height: "100vh"
            }}>
        <ambientLight color="#FFFFFF" intensity={0.05} />
        <pointLight color="#D0D0D1" intensity={0.25} position={[-2, 0, 2]} />
        <directionalLight color="#697077" intensity={0.25} position={[-2, 0, 2]} />

        <OrbitControls autoRotate autoRotateSpeed={-0.25} />

        <mesh>
            <planeBufferGeometry attach="geometry" args={[2, 2]} />
            <meshPhongMaterial attach="material" color="green" />
        </mesh>

    </Canvas>
</div>
)
}

export default CanvasHero