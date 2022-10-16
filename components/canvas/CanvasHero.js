import { Canvas  } from '@react-three/fiber'
import { useFrame, OrbitControls } from '@react-three/drei'

import Model from '../../public/models/Model'
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
            <ambientLight color="#FFFFFF" intensity={1} />
            <pointLight color="#D0D0D1" intensity={1} position={[-2, 0, 2]} />
            <directionalLight color="#697077" intensity={1} position={[-2, 0, 2]} />

            <OrbitControls autoRotate autoRotateSpeed={-1} />

            <Creative />

        </Canvas>
    </div>
)}

export default CanvasHero