import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Catcher({rot}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('./Model/Catchercom.glb')

  useFrame(() => {
    ref.current.rotation.y = rot
  })

  return (
    <group dispose={null} scale={[0.30, 0.30, 0.30]} position={[0, -1.2, 0]} ref={ref}>
      <mesh geometry={nodes.web.geometry} material={materials.web} position={[-3.956, 10.113, -0.918]} />
      <mesh geometry={nodes.stiches.geometry} material={materials.stiches} position={[3.425, 2.728, -1.054]} />
      <mesh geometry={nodes.binding.geometry} material={materials.binding} position={[4.421, 1.72, 3.883]} />
      <mesh geometry={nodes.logo.geometry} material={materials.logo} position={[1.77, 0.928, -1.422]} rotation={[1.66, 0.192, 3.007]} scale={[3.943, 8.504, 4.016]} />
      <mesh geometry={nodes.crown.geometry} material={materials.crown} position={[-0.572, 5.774, 1.148]} />
      <mesh geometry={nodes.wrist.geometry} material={materials.wrist} position={[0.784, 3.995, 0.17]} />
      <mesh geometry={nodes.logo001.geometry} material={materials['logo.001']} position={[-0.392, 5.094, 0.371]} rotation={[-0.416, 0, -0.419]} scale={1.043} />
      <mesh geometry={nodes.laces.geometry} material={materials.laces} position={[1.943, 2.582, 1.474]} />
      <mesh geometry={nodes.palm.geometry} material={materials.palm} position={[-0.572, 5.774, 1.148]} />
      <mesh geometry={nodes.leather1.geometry} material={materials.leather1} position={[0.784, 3.995, 0.17]} />
    </group>
  )
}

useGLTF.preload('./Model/Catchercom.glb')


