import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function FirstBase({rot}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('./Model/firstbasecom.glb')
  useFrame(() => {
    ref.current.rotation.y = rot
  })
  return (
    <group dispose={null} scale={[0.18, 0.18, 0.18]} position={[-1.2, -3.2, 0]} ref={ref}>
      <mesh geometry={nodes.logo4_replace.geometry} material={materials['default']} position={[12.583, 16.204, 2.237]} rotation={[-1.867, 0.161, 0.025]} scale={1.309} />
      <mesh geometry={nodes.webCrown.geometry} material={materials.WebCrown} position={[12.981, 0, 2.728]} rotation={[Math.PI / 2, 0, -0.609]} />
      <mesh geometry={nodes.leather1.geometry} material={materials.leather1} position={[12.981, 0, 2.728]} rotation={[Math.PI / 2, 0, -0.609]} />
      <mesh geometry={nodes.binding.geometry} material={materials.binding} position={[12.981, 0, 2.728]} rotation={[Math.PI / 2, 0, -0.609]} />
      <mesh geometry={nodes.Box.geometry} material={materials['default']} position={[31.695, 27.752, -0.25]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.wrist.geometry} material={materials.wrist} position={[12.981, 0, 2.728]} rotation={[Math.PI / 2, 0, -0.609]} />
      <mesh geometry={nodes.logo.geometry} material={materials.logo} position={[11.359, 12.418, -2.37]} rotation={[1.701, 0.132, 2.717]} scale={[3.455, 7.451, 3.519]} />
      <mesh geometry={nodes.logo2.geometry} material={materials.logo2} position={[8.566, 13.096, 3.94]} rotation={[0.888, 0.315, 1.19]} scale={[4.905, 10.578, 4.996]} />
      <mesh geometry={nodes.logoCircle.geometry} material={materials.Logo_circle} position={[8.772, 13.016, 4.082]} rotation={[Math.PI / 2, 0, -0.609]} scale={1.079} />
      <mesh geometry={nodes.palm.geometry} material={materials.palm} position={[12.981, 0, 2.728]} rotation={[Math.PI / 2, 0, -0.609]} />
      <mesh geometry={nodes.black_Piece.geometry} material={materials.blackPiece} position={[12.981, 0, 2.728]} rotation={[Math.PI / 2, 0, -0.609]} />
      <mesh geometry={nodes.stiches.geometry} material={materials.stiches} position={[8.493, 22.97, -1.464]} />
      <mesh geometry={nodes.web.geometry} material={materials.web} position={[7.076, 20.349, 2.1]} />
      <mesh geometry={nodes.laces.geometry} material={materials.laces} position={[14.074, 13.407, 3.991]} rotation={[2.944, 0.746, -1.21]} scale={0.893} />
      <mesh geometry={nodes.web001.geometry} material={materials['web.001']} position={[6.439, 24.583, 4.53]} rotation={[1.575, -0.032, -0.593]} />
      <mesh geometry={nodes.stiches001.geometry} material={materials['stiches.001']} position={[8.493, 22.97, -1.464]} />
      <mesh geometry={nodes.laces001.geometry} material={materials['laces.001']} position={[14.074, 13.407, 3.991]} rotation={[2.944, 0.746, -1.21]} scale={0.893} />
      <mesh geometry={nodes.web002.geometry} material={materials['web.002']} position={[5.449, 25.852, 6.434]} rotation={[0.477, -0.104, 0.054]} />
      <mesh geometry={nodes.stiches002.geometry} material={materials['stiches.002']} position={[8.493, 22.97, -1.464]} />
      <mesh geometry={nodes.palm001.geometry} material={materials['palm.001']} position={[12.981, 0, 2.728]} rotation={[Math.PI / 2, 0, -0.609]} />
      <mesh geometry={nodes.laces002.geometry} material={materials['laces.002']} position={[14.074, 13.407, 3.991]} rotation={[2.944, 0.746, -1.21]} scale={0.893} />
    </group>
  )
}

useGLTF.preload('./Model/firstbasecom.glb')
