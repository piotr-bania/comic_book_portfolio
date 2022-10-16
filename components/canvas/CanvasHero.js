import { Canvas  } from '@react-three/fiber'
import { useFrame, OrbitControls } from '@react-three/drei'

import Model from '../../public/models/Model'
import Plane from '../../public/models/Plane'

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

            <OrbitControls />
            {/* <OrbitControls autoRotate autoRotateSpeed={-0.25} /> */}

            <Model/>                        
        </Canvas>
    </div>
)}

export default CanvasHero