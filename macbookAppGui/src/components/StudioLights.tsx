import { Environment, Lightformer } from "@react-three/drei"


const StudioLights = () => {
  return (
    <group name='lights'>
         <Environment resolution={256}>
            <group>
               <Lightformer
                  form='rect'
                  intensity={6}
                  position={[15,6,-5]}
                  scale={10}
                  rotation-y={Math.PI / 2}
               />

               <Lightformer
                  form='rect'
                  intensity={4}
                  position={[-15,6,-5]}
                  scale={10}
                  rotation-y={Math.PI / 2}
               />
            </group>
         </Environment>
         <spotLight 
               position={[0,-20,10]}
               angle={0.15}
               decay={0}
               intensity={Math.PI * 0.2}
         />
         <spotLight 
               position={[0,15,5]}
               angle={0.15}
               decay={0.1}
               intensity={Math.PI * 0.3}
         />
    </group>
  )
}

export default StudioLights