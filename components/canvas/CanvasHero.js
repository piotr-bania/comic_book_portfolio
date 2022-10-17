import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Creative from '../../public/models/Creative'

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
            <ambientLight color="#FFFFFF" intensity={0.5} />
            <pointLight color="#D0D0D1" intensity={0.5} position={[-2, 0, 2]} />
            <directionalLight color="#697077" intensity={0.5} position={[-2, 0, 2]} />

            <OrbitControls autoRotate autoRotateSpeed={-1} />
            {/* <OrbitControls /> */}

            <Creative />

        </Canvas>
    </div>
)}

export default CanvasHero