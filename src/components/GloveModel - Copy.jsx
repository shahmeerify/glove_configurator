import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GloveModel() {
  const ref = useRef();
  const { nodes, materials } = useGLTF('./Model/GloveModel.glb');
  
  return (
    <group dispose={null} scale={[0.17, 0.17, 0.17]} position={[0, -0.2, 0]} ref={ref}>
      <mesh geometry={nodes.palm.geometry} material={materials.palm} rotation={[Math.PI / 2, 0, -0.44]}>
        <mesh geometry={nodes.Slice.geometry} material={materials.palm} />
      </mesh>
      <mesh geometry={nodes.binding.geometry} material={materials.Binding} position={[0.011, 0.012, -0.023]} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo_03.geometry} material={materials.logoColor} position={[-4.369, 2.649, 1.831]} rotation={[-2.6, -0.759, 2.616]} scale={[-5.958, -12.848, -6.068]} />
      <mesh geometry={nodes.welt.geometry} material={materials.welt} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo4_replace.geometry} material={materials.logo2} position={[-0.902, 6.75, -1.363]} rotation={[-0.385, 0.382, 0.027]} scale={1.309} />
      <mesh geometry={nodes.wingtipThumb.geometry} material={materials.wingtipThumb} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather2.geometry} material={materials.leather2} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather3.geometry} material={materials.leather3} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather4.geometry} material={materials.leather4} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather5.geometry} material={materials.leather5} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather6.geometry} material={materials.leather6} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather7.geometry} material={materials.leather7} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather8.geometry} material={materials.leather8} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather1.geometry} material={materials.leather1} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.wingtipPinky.geometry} material={materials.wingtipPinky} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.blackPiece.geometry} material={materials['black piece']} position={[0.011, 0.012, -0.023]} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web009.geometry} material={materials['web.009']} position={[-5.808, 14.691, 1.519]} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches010.geometry} material={materials['stiching.010']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces010.geometry} material={materials['laces.010']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web008.geometry} material={materials['web.008']} position={[-6.184, 14.691, 1.519]} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches009.geometry} material={materials['stiching.009']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces009.geometry} material={materials['laces.009']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web007.geometry} material={materials['web.007']} position={[-6.031, 11.884, 0.559]} rotation={[0.48, 0.016, -1.635]} scale={[1, 1, 1.111]} />
      <mesh geometry={nodes.stiches008.geometry} material={materials['stiching.008']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces008.geometry} material={materials['laces.008']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web006.geometry} material={materials['web.006']} />
      <mesh geometry={nodes.stiches007.geometry} material={materials['stiching.007']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces007.geometry} material={materials['laces.007']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web005.geometry} material={materials['web.005']} />
      <mesh geometry={nodes.stiches006.geometry} material={materials['stiching.006']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces006.geometry} material={materials['laces.006']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web004.geometry} material={materials['web.004']} position={[-6.182, 14.691, 1.523]} rotation={[-1.075, -1.273, -1.557]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches005.geometry} material={materials['stiching.005']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces005.geometry} material={materials['laces.005']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web003.geometry} material={materials['web.003']} position={[-6.241, 11.559, 0.492]} rotation={[0.44, -0.01, -1.589]} scale={[1, 1, 1.111]} />
      <mesh geometry={nodes.stiches004.geometry} material={materials['stiching.004']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces004.geometry} material={materials['laces.004']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web002.geometry} material={materials['web.002']} position={[-6.184, 14.691, 1.519]} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches003.geometry} material={materials['stiching.003']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces003.geometry} material={materials['laces.003']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web001.geometry} material={materials['web.001']} position={[-6.184, 14.691, 1.519]} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches002.geometry} material={materials['stiching.002']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces002.geometry} material={materials['laces.002']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.web.geometry} material={materials.Web} position={[-6.585, 10.762, -0.41]} rotation={[0.441, 0, 0]} />
      <mesh geometry={nodes.stiches001.geometry} material={materials['stiching.001']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces001.geometry} material={materials['laces.001']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo_01.geometry} material={materials.logoColor} position={[-6.745, 12.807, 0.794]} rotation={[-0.835, -0.052, 2.896]} scale={[-4.93, -10.633, -5.022]} />
      <mesh geometry={nodes.webStyle.geometry} material={materials.web} position={[-6.229, 10.342, -0.197]} rotation={[-1.162, -1.39, -1.645]} />
      <mesh geometry={nodes.laces.geometry} material={materials.laces} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.stiches.geometry} material={materials.stiching} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.web010.geometry} material={materials['web.010']} position={[-6.325, 14.643, 1.519]} rotation={[-1.022, -1.309, -1.501]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches011.geometry} material={materials['stiching.011']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces011.geometry} material={materials['laces.011']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.wrist001.geometry} material={materials['wrist.001']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.middle_logo_circle.geometry} material={materials.logoMiddleCircle} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo.geometry} material={materials.Logo4} position={[-0.517, 1.098, -3.791]} rotation={[1.734, 0.157, 2.589]} scale={[2.816, 6.074, 2.869]} />
      <mesh geometry={nodes.inner_circle.geometry} material={materials.LogoOuterCircle} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.stiches013.geometry} material={materials['stiching.012']} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.wrist002.geometry} material={materials['wrist.002']} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.outerLinesLogo.geometry} material={materials.OuterLinesLogo} position={[0.067, 0.705, -2.862]} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logoStiches.geometry} material={materials['stiching.014']} position={[-2.158, -0.419, -1.905]} />
      <mesh geometry={nodes.logo_patch.geometry} material={materials.logoPatch} position={[0.087, 0.629, -2.794]} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo001.geometry} material={materials.logo} position={[-0.932, -0.053, -3.14]} rotation={[1.783, 0.263, 3.04]} scale={[2.221, 4.789, 2.262]} />
      <mesh geometry={nodes.InnerLinesLogo.geometry} material={materials.InnerLinesLogo} position={[0.067, 0.705, -2.862]} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo_02.geometry} material={materials.logoColor} position={[-0.727, 0.89, -3.739]} rotation={[1.756, 0.233, 2.664]} scale={[3.455, 7.451, 3.519]} />
      <mesh geometry={nodes.wrist.geometry} material={materials.wrist} rotation={[Math.PI / 2, 0, -0.44]} />
    </group>
  )
}

useGLTF.preload('/GloveModel.glb')
