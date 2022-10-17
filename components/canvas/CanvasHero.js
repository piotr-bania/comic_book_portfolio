
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Creative from '../../public/models/Creative'

const CanvasHero = () => {

    return (
        <div>
            {/* ---------------------- Canvas ---------------------- */}
            <Canvas
                className='canvasHero'
                style={{
                    position: "absolute",
                    top: "0vh",
                    right: "0vw",
                    width: "100vw",
                    height: "100vh"
                }}
                camera={{
                    fov: 25,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 15]
                }}>

                <ambientLight color="#FFFFFF" intensity={1} />

                <Creative position={[-3, 1, 0]}/>
                <Creative position={[0, 0, 2]}/>
                <Creative position={[2, -1, 4]}/>
            </Canvas>
        </div>
    )
}

export default CanvasHero