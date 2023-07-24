import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  items: {
    binding: "#f5f5f5",
    logo4_replace: "#808080", //Palm Logo
    logo_03: "#e0e0e0", //Side Logo 
    palm: "#f8f8f8",
    slice: "#f8f8f8", //Extension of Palm to Back
    welt: "#e0e0e0", //Edgings
    blackPiece: "#f0f0f0", //Back Hole Cover
    leather1: "#f8f8f8",
    leather2: "#f8f8f8",
    leather3: "#f8f8f8",
    leather4: "#f8f8f8",
    leather5: "#f8f8f8",
    leather6: "#f8f8f8",
    leather7: "#f8f8f8",
    leather8: "#f8f8f8",
    wingtipThumb: "#f8f8f8",
    wingtipPinky: "#f8f8f8",
    laces: "#e0e0e0", 
    logo_01: "#f0f0f0", //Webbing Logo
    stiches: "#808080", 
    webStyle: "#f0f0f0", 
    logo_02: "#C0C0C0",  //Wrist Logo
    wrist: "#f8f8f8", 
  },
})
export function GloveModel({rot, colors}) {
  const ref = useRef();
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('./Model/GloveModel.glb');

  useFrame(() => {
    ref.current.rotation.y = rot
  })
  
  return (
    <group dispose={null} scale={[0.25, 0.25, 0.25]} position={[0, -2.2, 0]} ref={ref} >
      <mesh geometry={nodes.binding.geometry} material={materials.Binding} material-color={colors.binding} position={[0.011, 0.012, -0.023]} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo4_replace.geometry} material={materials.logo2} position={[-0.902, 6.75, -1.363]} material-color={colors.logo4_replace} rotation={[-0.385, 0.382, 0.027]} scale={1.309} />
      <mesh geometry={nodes.logo_03.geometry} material={materials.logoColor} position={[-4.369, 2.649, 1.831]} material-color={colors.logo_03} rotation={[-2.6, -0.759, 2.616]} scale={[-5.958, -12.848, -6.068]} />
      <mesh geometry={nodes.palm.geometry} material={materials.palm} material-color={colors.palm} rotation={[Math.PI / 2, 0, -0.44]}>
        <mesh geometry={nodes.Slice.geometry} material={materials.palm} material-color={colors.slice} />
      </mesh>
      <mesh geometry={nodes.welt.geometry} material={materials.welt} material-color={colors.welt} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.blackPiece.geometry} material={materials['black piece']} position={[0.011, 0.012, -0.023]} material-color={colors.blackPiece} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather1.geometry} material={materials.leather1} material-color={colors.leather1} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather2.geometry} material={materials.leather2} material-color={colors.leather2} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather3.geometry} material={materials.leather3} material-color={colors.leather3} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather4.geometry} material={materials.leather4} material-color={colors.leather4} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather5.geometry} material={materials.leather5} material-color={colors.leather5} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather6.geometry} material={materials.leather6} material-color={colors.leather6} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather7.geometry} material={materials.leather7} material-color={colors.leather7} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.leather8.geometry} material={materials.leather8} material-color={colors.leather8} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.wingtipThumb.geometry} material={materials.wingtipThumb} material-color={colors.wingtipThumb} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.wingtipPinky.geometry} material={materials.wingtipPinky} material-color={colors.wingtipPinky} rotation={[Math.PI / 2, 0, -0.44]} />

      {/* Web Styles */}

      {/* base web */}
      <mesh geometry={nodes.laces.geometry} material={materials.laces} material-color={colors.laces} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo_01.geometry} material={materials.logoColor} position={[-6.745, 12.807, 0.794]} material-color={colors.logo_01} rotation={[-0.835, -0.052, 2.896]} scale={[-4.93, -10.633, -5.022]} />
      <mesh geometry={nodes.stiches.geometry} material={materials.stiching} position={[-6.29, 14.743, 1.171]} material-color={colors.stiches} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.webStyle.geometry} material={materials.web} position={[-6.229, 10.342, -0.197]} material-color={colors.webStyle} rotation={[-1.162, -1.39, -1.645]} />

      {/* 2pieceweb */}
      {/* <mesh geometry={nodes.web009.geometry} material={materials['web.009']} position={[-5.808, 14.691, 1.519]} material-color={colors.binding} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches010.geometry} material={materials['stiching.010']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces010.geometry} material={materials['laces.010']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* onepieceweb */}
      {/* <mesh geometry={nodes.web008.geometry} material={materials['web.008']} position={[-6.184, 14.691, 1.519]} material-color={colors.binding} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches009.geometry} material={materials['stiching.009']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces009.geometry} material={materials['laces.009']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* netStyle */}
      {/*<mesh geometry={nodes.web007.geometry} material={materials['web.007']} position={[-6.031, 11.884, 0.559]} material-color={colors.binding} rotation={[0.48, 0.016, -1.635]} scale={[1, 1, 1.111]} />
      <mesh geometry={nodes.stiches008.geometry} material={materials['stiching.008']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} /> 
      <mesh geometry={nodes.laces008.geometry} material={materials['laces.008']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* lacedH */}
      {/* <mesh geometry={nodes.web006.geometry} material={materials['web.006']} />
      <mesh geometry={nodes.stiches007.geometry} material={materials['stiching.007']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces007.geometry} material={materials['laces.007']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* spiral lace */}
      {/* <mesh geometry={nodes.web005.geometry} material={materials['web.005']} />
      <mesh geometry={nodes.stiches006.geometry} material={materials['stiching.006']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces006.geometry} material={materials['laces.006']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* webH */}
      {/* <mesh geometry={nodes.web004.geometry} material={materials['web.004']} position={[-6.182, 14.691, 1.523]} material-color={colors.binding} rotation={[-1.075, -1.273, -1.557]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches005.geometry} material={materials['stiching.005']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces005.geometry} material={materials['laces.005']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* gloveT */}
      {/* <mesh geometry={nodes.web003.geometry} material={materials['web.003']} position={[-6.241, 11.559, 0.492]} material-color={colors.binding} rotation={[0.44, -0.01, -1.589]} scale={[1, 1, 1.111]} />
      <mesh geometry={nodes.stiches004.geometry} material={materials['stiching.004']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces004.geometry} material={materials['laces.004']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* Eweb */}
      {/* <mesh geometry={nodes.web002.geometry} material={materials['web.002']} position={[-6.184, 14.691, 1.519]} material-color={colors.binding} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches003.geometry} material={materials['stiching.003']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces003.geometry} material={materials['laces.003']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* cross web */}
      {/* <mesh geometry={nodes.web001.geometry} material={materials['web.001']} position={[-6.184, 14.691, 1.519]} material-color={colors.binding} rotation={[-1.089, -1.275, -Math.PI / 2]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches002.geometry} material={materials['stiching.002']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces002.geometry} material={materials['laces.002']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* basket web */}
      {/* <mesh geometry={nodes.web.geometry} material={materials.Web} position={[-6.585, 10.762, -0.41]} material-color={colors.binding} rotation={[0.441, 0, 0]} />
      <mesh geometry={nodes.stiches001.geometry} material={materials['stiching.001']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces001.geometry} material={materials['laces.001']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* Yweb */}
      {/* <mesh geometry={nodes.web010.geometry} material={materials['web.010']} position={[-6.325, 14.643, 1.519]} material-color={colors.binding} rotation={[-1.022, -1.309, -1.501]} scale={[4.138, 2.179, 2.195]} />
      <mesh geometry={nodes.stiches011.geometry} material={materials['stiching.011']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.laces011.geometry} material={materials['laces.011']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* Backwrist with Logo Part */}

      {/* base backwrist logo */}
      <mesh geometry={nodes.logo_02.geometry} material={materials.logoColor} position={[-0.727, 0.89, -3.739]} material-color={colors.logo_02} rotation={[1.756, 0.233, 2.664]} scale={[3.455, 7.451, 3.519]} />
      <mesh geometry={nodes.wrist.geometry} material={materials.wrist} material-color={colors.wrist} rotation={[Math.PI / 2, 0, -0.44]} />

      {/* Circle backwrist Logo Part */}
      {/* <mesh geometry={nodes.inner_circle.geometry} material={materials.LogoOuterCircle} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo.geometry} material={materials.Logo4} position={[-0.517, 1.098, -3.791]} material-color={colors.binding} rotation={[1.734, 0.157, 2.589]} scale={[2.816, 6.074, 2.869]} />
      <mesh geometry={nodes.middle_logo_circle.geometry} material={materials.logoMiddleCircle} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.stiches013.geometry} material={materials['stiching.012']} position={[-6.29, 14.743, 1.171]} material-color={colors.binding} rotation={[0, -0.003, 0]} />
      <mesh geometry={nodes.wrist001.geometry} material={materials['wrist.001']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

      {/* Square backwrist Logo */}
      {/* <mesh geometry={nodes.wrist002.geometry} material={materials['wrist.002']} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.outerLinesLogo.geometry} material={materials.OuterLinesLogo} position={[0.067, 0.705, -2.862]} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logoStiches.geometry} material={materials['stiching.014']} position={[-2.158, -0.419, -1.905]} />
      <mesh geometry={nodes.logo_patch.geometry} material={materials.logoPatch} position={[0.087, 0.629, -2.794]} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} />
      <mesh geometry={nodes.logo001.geometry} material={materials.logo} position={[-0.932, -0.053, -3.14]} material-color={colors.binding} rotation={[1.783, 0.263, 3.04]} scale={[2.221, 4.789, 2.262]} />
      <mesh geometry={nodes.InnerLinesLogo.geometry} material={materials.InnerLinesLogo} position={[0.067, 0.705, -2.862]} material-color={colors.binding} rotation={[Math.PI / 2, 0, -0.44]} /> */}

    </group>
  )
}

useGLTF.preload('./Model/GloveModel.glb')
