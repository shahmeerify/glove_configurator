import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function New({rot, colors}) {

  console.log(colors);

  const ref = useRef();
  const { nodes, materials } = useGLTF('./Model/new.glb')

  useFrame(() => {
    ref.current.rotation.y = rot
  })

  return (
    <group dispose={null} scale={[22, 22, 22]} position={[0, -1.6, 0]} ref={ref}>

      {/*Palm*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.body_palm.geometry}  material-color={colors.palm} material={materials.blinn78} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface307.geometry}  material-color={colors.palm} material={materials.blinn78} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Lining.geometry}  material-color={colors.palm} material={materials.inside} scale={0.025} />
      </group>
      
      {/*Laces*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Wire1.geometry}  material-color={colors.laces} material={materials.laces} scale={0.025} />
      </group>

      {/*Wrist*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Wrist.geometry}  material-color={colors.wrist} material={materials.wrist} scale={0.025} />
      </group>

      {/*Binding*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Dtail2.geometry}  material-color={colors.binding} material={materials.Dtail_3_fr} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Dtail3.geometry}  material-color={colors.binding} material={materials.Dtail_3_fr} scale={0.025} />
      </group>

      {/*Leathers*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Index_Inner.geometry}  material-color={colors.leather1} material={materials.Index_Inner1} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Index_Outer.geometry}  material-color={colors.leather1} material={materials.index_outer} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Thumb_Outer.geometry}  material-color={colors.leather1} material={materials.thumb_outer} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Middle_Inner.geometry}  material-color={colors.leather1} material={materials.middle_inner} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Middle_Outer.geometry}  material-color={colors.leather1} material={materials.middle_outer} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Ring_Inner.geometry}  material-color={colors.leather1} material={materials.ring_inner} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Ring_Outer.geometry}  material-color={colors.leather1} material={materials.ring_outer} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Pinky_Inner1.geometry}  material-color={colors.leather1} material={materials.pinky_inner} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Pinky_Outer.geometry}  material-color={colors.leather1} material={materials.pinky_outer} scale={0.025} />
      </group>


      {/*SideLogo with back*/}
      {/* <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.side_logo1.geometry}  material-color={colors.binding} material={materials.side_logo} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.thuimb.geometry}  material-color={colors.binding} material={materials.thumb_inner} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.logoback2.geometry}  material-color={colors.binding} material={materials.logo_back_2} scale={0.025} />
      </group> */}

      {/*SideLogo*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface332.geometry}  material-color={colors.logo_01} material={materials.thumb_inner} scale={0.025} />
      </group>
      <group position={[-0.039, -0.004, 0.008]} rotation={[3.082, 0.669, -2.905]} scale={0.471}>
        <mesh geometry={nodes.polySurface333.geometry}  material-color={colors.logo_01} material={materials.side_logo} scale={0.025} />
      </group>
      <group position={[-0.039, -0.004, 0.008]} rotation={[3.082, 0.669, -2.905]} scale={0.471}>
        <mesh geometry={nodes.polySurface334.geometry}  material-color={colors.logo_01} material={materials.side_logo} scale={0.025} />
      </group>

      {/*Stitches*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.stitches1.geometry}  material-color={colors.stiches} material={materials.stitches} scale={0.025} />
      </group>

      {/*Dual Welt*/}
      {/* <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface319.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface320.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface321.geometry}  material-color={colors.binding} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.strips.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.dual_welt001.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group> */}

      {/*Extra Graphic*/}
      {/* <group position={[0.021, -0.003, 0.012]} rotation={[-0.058, -0.399, -0.014]} scale={[0.407, 0.394, 0.394]}>
        <mesh geometry={nodes.index_top_mesh.geometry}  material-color={colors.binding} material={materials.Index_Inner1} scale={0.025} />
      </group>
      <group position={[-0.005, 0.003, -0.028]} rotation={[0.025, 0.763, -0.092]} scale={0.394}>
        <mesh geometry={nodes.pinky_mesh.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.017, 0.004, -0.009]} rotation={[0.091, 0.133, 0.193]} scale={0.394}>
        <mesh geometry={nodes.palm_mesh.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[-0.032, -0.058, 0.005]} scale={0.566}>
        <mesh geometry={nodes.thumb_mesh_top.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[-0.002, -0.001, 0.001]} scale={0.394}>
        <mesh geometry={nodes.thumb_mesh_bot.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group position={[0.005, -0.025, -0.008]} scale={[0.518, 0.555, 0.518]}>
        <mesh geometry={nodes.inside_palm_mesh.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group> */}

      {/*CrownPatch*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.crown_lace.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group scale={0.394}>
        <group scale={0.025}>
          <mesh geometry={nodes.crown_patch001_1.geometry}  material-color={colors.binding} material={materials.blinn75} />
          <mesh geometry={nodes.crown_patch001_2.geometry}  material-color={colors.binding} material={materials.lambert1} />
        </group>
      </group>
            <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface297001.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface299001.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface300001.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface301001.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface302001.geometry}  material-color={colors.binding} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Welt2001.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Welt3001.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Welt1001.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group>
      */}

      {/*Welt*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface297.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface298.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface299.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface300.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface301.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.polySurface302.geometry}  material-color={colors.welt} material={materials.lambert} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Welt1.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Welt2.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Welt3.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>

      {/*Wire-Welt*/}
      <group position={[-0.007, 0.013, 0.009]} rotation={[3.118, 0.689, -3.032]} scale={0.317}>
        <mesh geometry={nodes.Wire.geometry}  material-color={colors.welt} material={materials.welting} scale={0.025} />
      </group>

      {/*inlay*/}
      {/* <group position={[-0.071, 0.03, 0.01]} rotation={[0.903, 0.847, -1.41]} scale={[-0.394, 0.394, 0.394]}>
        <mesh geometry={nodes.polySurface328.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.inlay.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group> */}
      

      {/*Two Piece Web */}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web1_body.geometry}  material-color={colors.binding} material={materials.web1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web1_stitches.geometry}  material-color={colors.binding} material={materials.web_stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web1_laces.geometry}  material-color={colors.binding} material={materials.web_laces} scale={0.025} />
      </group> */}
      
      {/*One Piece Web */}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web2_body.geometry}  material-color={colors.binding} material={materials.onepiece} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web2_stitches.geometry}  material-color={colors.binding} material={materials.web2stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web2_laces.geometry}  material-color={colors.binding} material={materials.web2laces} scale={0.025} />
      </group> */}

      {/*Net Style*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web3_stitches.geometry}  material-color={colors.binding} material={materials.web3stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web3_laces.geometry}  material-color={colors.binding} material={materials.web3_laces1} scale={0.025} />
      </group>
      <group rotation={[Math.PI, 0.691, -Math.PI]} scale={0.394}>
        <mesh geometry={nodes.web3.geometry}  material-color={colors.binding} material={materials.net_style1} scale={0.025} />
      </group> */}

      {/*LaceH*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web4.geometry}  material-color={colors.binding} material={materials.laceH1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web4_stitches.geometry}  material-color={colors.binding} material={materials.web4_stitches1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web4_laces_fr.geometry}  material-color={colors.binding} material={materials.web4_laces} scale={0.025} />
      </group> */}

      {/*ISpiral Web*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web_5_stitches.geometry}  material-color={colors.binding} material={materials.web5stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web_5_laces.geometry}  material-color={colors.binding} material={materials.web5laces} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web5.geometry}  material-color={colors.binding} material={materials.ispiral} scale={0.025} />
      </group> */}

      {/*WebH*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web6_stitches.geometry}  material-color={colors.binding} material={materials.web6stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web6_laces.geometry}  material-color={colors.binding} material={materials.web6laces} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web6.geometry}  material-color={colors.binding} material={materials.lambert} scale={0.025} />
      </group> */}

      {/*WebT*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web7_stitches.geometry}  material-color={colors.binding} material={materials.lambert} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web7_laces.geometry}  material-color={colors.binding} material={materials.lambert} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web7.geometry}  material-color={colors.binding} material={materials.blinn72} scale={0.025} />
      </group> */}

      {/*EWeb*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web8.geometry}  material-color={colors.binding} material={materials.eweb} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web8_laces.geometry}  material-color={colors.binding} material={materials.web8laces} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web8_stitches.geometry}  material-color={colors.binding} material={materials.web8stitches} scale={0.025} />
      </group> */}

      {/*cross*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web9_stitches.geometry}  material-color={colors.binding} material={materials.web9stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web9_laces.geometry}  material-color={colors.binding} material={materials.lambert} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web9.geometry}  material-color={colors.binding} material={materials.cross1} scale={0.025} />
      </group> */}

      {/*Basket_fr*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web10_stitches.geometry}  material-color={colors.binding} material={materials.web10stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web10_laces.geometry}  material-color={colors.binding} material={materials.web10laces} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web10.geometry}  material-color={colors.binding} material={materials.basket} scale={0.025} />
      </group> */}

      {/*IWeb with Logo} */}
      <group scale={0.394}>
        <mesh geometry={nodes.web11.geometry}  material-color={colors.webStyle} material={materials.base1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web11_stitches.geometry}  material-color={colors.webStyle} material={materials.web11stitches} scale={0.025} />
      </group>
      <group position={[-0.007, 0, -0.006]} rotation={[Math.PI, 0.691, -Math.PI]} scale={0.394}>
        <mesh geometry={nodes.weblogo.geometry}  material-color={colors.webStyle} material={materials.blinn76} scale={0.025} />
      </group>
      <group position={[-0.007, 0, -0.006]} rotation={[Math.PI, 0.691, -Math.PI]} scale={0.394}>
        <mesh geometry={nodes.logoback.geometry}  material-color={colors.webStyle} material={materials.blinn77} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web11_laces.geometry}  material-color={colors.webStyle} material={materials.web11laces} scale={0.025} />
      </group>

      {/*LaceY1*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web12_laces.geometry}  material-color={colors.binding} material={materials.web12laces} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web12.geometry}  material-color={colors.binding} material={materials.laceY} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web12_stitches.geometry}  material-color={colors.binding} material={materials.web12stitches} scale={0.025} />
      </group> */}

      {/*I Web Without Logo*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.web11_stitches001.geometry}  material-color={colors.binding} material={materials.web11stitches} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.web11_laces001.geometry}  material-color={colors.binding} material={materials.web11laces} scale={0.025} />
      </group>
      <group position={[0.046, 0.114, 0.036]} rotation={[0.083, 0.786, -0.406]} scale={[0.83, 0.73, 0.039]}>
        <mesh geometry={nodes.pCube1.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.polySurface335.geometry}  material-color={colors.binding} material={materials.base1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.polySurface337.geometry}  material-color={colors.binding} material={materials.base1} scale={0.025} />
      </group> */}
    

      {/*Circle Logo*/}
      <group scale={0.394}>
        <mesh geometry={nodes.legend_logo.geometry}  material-color={colors.logo1} material={materials.circle_logo_fr} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.circle_logo001.geometry}  material-color={colors.logo1} material={materials.circle_logo1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.logo_stitch_round.geometry}  material-color={colors.logo1} material={materials.blinn18} scale={0.025} />
      </group>

      {/*Logo with outline*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.legend_logo1.geometry}  material-color={colors.binding} material={materials.logo_with_outline1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.logo_outline314.geometry}  material-color={colors.binding} material={materials.logo_outline_fr} scale={0.025} />
      </group> */}
      
      {/* <group scale={0.394}>
        <mesh geometry={nodes.logo_without_outline001.geometry}  material-color={colors.binding} material={materials.logo_without_outline_fr} scale={0.025} />
      </group> */}

      {/*Square Logo*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.square_logo_3.geometry}  material-color={colors.binding} material={materials.square_lgo} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.square_logo_patch.geometry}  material-color={colors.binding} material={materials.Square_logo_patch} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.outside_line_square_logo.geometry}  material-color={colors.binding} material={materials.outside_line} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.inside_line_square_logo.geometry}  material-color={colors.binding} material={materials.blinn8} scale={0.025} />
      </group> */}

      {/*IndexHood*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.index_finger_hood.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.MASH1_ReproMesh.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.polySurface312.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group> */}

      {/*IndexPad*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.index_finger_pad.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.MASH1_ReproMesh1.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.polySurface311.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group> */}

      {/*MidHood*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.middle_finger_pad.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.MASH2_ReproMesh1.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group> */}

      {/*Mid Pad*/}
      {/* <group scale={0.394}>
        <mesh geometry={nodes.middle_finger_pad1.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.MASH2_ReproMesh.geometry}  material-color={colors.binding} material={materials.lambert1} scale={0.025} />
      </group>
      <group scale={0.394}>
        <mesh geometry={nodes.polySurface313.geometry}  material-color={colors.binding} material={materials.welting} scale={0.025} />
      </group> */}
    </group>
  )
}

useGLTF.preload('./Model/new.glb')
