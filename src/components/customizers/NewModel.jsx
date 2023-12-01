import React, { useRef } from 'react'
import { useGLTF,  useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
// import { PlaneGeometry, MeshBasicMaterial, TextureLoader } from 'three';
import * as THREE from 'three';
import { flags } from "../constants";

const MeshWithTexture = ({ geometry, material, color, position, rotation, scale, texture, tsize=9.25 }) => {
  const textureMap = useTexture(texture);
  textureMap.repeat.set(tsize, tsize)
  textureMap.wrapS = THREE.RepeatWrapping 
  textureMap.wrapT = THREE.RepeatWrapping
  return (
    <mesh geometry={geometry} material={material} material-color={color} position={position} rotation={rotation} scale={scale} >
      <meshBasicMaterial map={textureMap} />
    </mesh> 
  );
};
const EmbroideredLogo = ({ geometry, material, color, position, rotation, scale, texture }) => {
  const textureMap = useTexture(flags[texture]);
  return (
    <mesh geometry={geometry} material={material} material-color={color} position={position} rotation={rotation} scale={scale} >
      <meshBasicMaterial map={textureMap} />
    </mesh> 
  );
};

// const MeshWithoutTexture = ({ geometry, material, color, position, rotation, scale }) => {
//   return (
//     <mesh geometry={geometry} material={material} material-color={color} position={position} rotation={rotation} scale={scale} >
//     </mesh>
//   );
// };

// const saveToFile = (data, fileName) => {
//   const jsonContent = JSON.stringify(data, null, 2);
//   const blob = new Blob([jsonContent], { type: 'application/json' });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = fileName;
//   link.click();
// };

export function New({rot, base, colors, textures }) {

  // const fileName = 'materials.json';

  const ref = useRef();
  const { nodes, materials } = useGLTF('./Model/NewTest.glb')

  for (const materialName in materials) {
    materials[materialName].metalness = 0;
    materials[materialName].roughness = 0.5; 
  }

  // saveToFile(materials.Middle_Inner, 'materials_orignal.json');

  useFrame(() => {
    ref.current.rotation.y = rot
  })


  return (
    <group dispose={null} position={[0, -2.1, 0]} scale={[26, 26, 26]} ref={ref}>

      {/*Extras*/}
      {/* <mesh geometry={nodes.palm_mesh.geometry} material-color={colors.palm} material={materials['Details 2']} position={[0.017, 0.004, -0.009]} rotation={[1.688, 0.191, -0.136]} scale={0.01} />
      <mesh geometry={nodes.thumb_mesh_bot.geometry} material-color={colors.palm} material={materials['Details 2']} position={[-0.002, -0.001, 0.001]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.thumb_mesh_top.geometry} material-color={colors.palm} material={materials['Details 2']} position={[-0.032, -0.058, 0.005]} rotation={[Math.PI / 2, 0, 0]} scale={0.014} />
      <mesh geometry={nodes.inside_palm_mesh.geometry} material-color={colors.palm} material={materials['Details 2']} position={[0.005, -0.025, -0.008]} rotation={[Math.PI / 2, 0, 0]} scale={[0.013, 0.013, 0.014]} />
      <mesh geometry={nodes.index_top_mesh.geometry} material-color={colors.palm} material={materials.Index_Inner1} position={[0.021, -0.003, 0.012]} rotation={[1.518, -0.013, 0.399]} scale={0.01} />
      <mesh geometry={nodes.pinky_mesh.geometry} material-color={colors.palm} material={materials['Details 2']} position={[-0.005, 0.003, -0.028]} rotation={[1.532, -0.067, -0.765]} scale={0.01} /> */}

      {/*Body Palm*/}
      {textures.palm ? (
        <>
          <MeshWithTexture geometry={nodes.polySurface307.geometry} material={materials.Palm} color={colors.palm} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.palm} />
          <MeshWithTexture geometry={nodes.body_palm.geometry} material-color={colors.palm} material={materials.Palm} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.palm} />
        </>
      ) : (
        <>
          <mesh geometry={nodes.polySurface307.geometry} material-color={colors.palm} material={materials.Palm} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          <mesh geometry={nodes.body_palm.geometry} material-color={colors.palm} material={materials.Palm} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
        </>   
      )}
      <mesh geometry={nodes.Lining.geometry} material-color={'#000000'} material={materials.Inside} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />

      {/*CrownPatch*/}
      {/* <mesh geometry={nodes.crown_patch001.geometry} material-color={colors.palm} material={materials.Crown_Patch} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.crown_lace.geometry} material-color={colors.palm} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} /> */}

      {/*Bindings*/}
      {textures.binding ? (
        <>
          <MeshWithTexture geometry={nodes.Dtail3.geometry} material-color={colors.binding} material={materials.Details} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.binding} />
          <MeshWithTexture geometry={nodes.Dtail2.geometry} material-color={colors.binding} material={materials.Details} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.binding} />
        </>
      ) : (
        <>
          <mesh geometry={nodes.Dtail3.geometry} material-color={colors.binding} material={materials.Details} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          <mesh geometry={nodes.Dtail2.geometry} material-color={colors.binding} material={materials.Details} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
        </>   
      )}
     

      {/*Index Hood or Pad*/}
      {base.finger_option === "Hood" ? (
        <>
          {base.finger_hood_or_pad_placement === "Index Finger" ? (
            <>
              {textures.finger_hood ? (
                <MeshWithTexture geometry={nodes.index_finger_hood.geometry} material-color={colors.finger_hood} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.finger_hood} tsize={2} />
              ) :(
                <mesh geometry={nodes.index_finger_hood.geometry} material-color={colors.finger_hood} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              )}
              <mesh geometry={nodes.MASH1_ReproMesh.geometry} material-color={colors.Stiches} material={materials.Stitches} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              {!base.dual_welting && (
                <mesh geometry={nodes.polySurface311.geometry} material-color={colors.welt} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              )}
              </>
          ) :(
            <>
             {!base.dual_welting && (
              <mesh geometry={nodes.polySurface298.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
             )}
            </>
          )}
          {base.finger_hood_or_pad_placement === "Middle Finger" ? (
            <>
              {textures.finger_hood ? (
                <MeshWithTexture geometry={nodes.middle_finger_pad.geometry} material-color={colors.finger_hood} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.finger_hood} tsize={2} />
              ) :(
                <mesh geometry={nodes.middle_finger_pad.geometry} material-color={colors.finger_hood} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              )}
              <mesh geometry={nodes.MASH2_ReproMesh.geometry} material-color={colors.Stiches} material={materials.Stitches} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              {!base.dual_welting && (
              <mesh geometry={nodes.polySurface313.geometry} material-color={colors.welt} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              )}
              </>
          ) :(
            <>
             {!base.dual_welting && (
               <mesh geometry={nodes.polySurface299.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
             )}
            </>
          )}

        </>
      ) :(
        <>
          {base.finger_option === "Pad" ? (
            <>
              {base.finger_hood_or_pad_placement === "Index Finger" ? (
                <>
                  {textures.finger_pad ? (
                    <MeshWithTexture geometry={nodes.index_finger_pad.geometry} material-color={colors.finger_pad} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.finger_pad} tsize={1.5} />
                  ) :(
                    <mesh geometry={nodes.index_finger_pad.geometry} material-color={colors.finger_pad} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
                  )}
                  <mesh geometry={nodes.MASH1_ReproMesh.geometry} material-color={colors.Stiches} material={materials.Stitches} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
                  {!base.dual_welting && (
                    <mesh geometry={nodes.polySurface311.geometry} material-color={colors.welt} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
                  )}
                </>
              ) :(
                <>
                  {!base.dual_welting && (
                  <mesh geometry={nodes.polySurface298.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
                  )}                
                </>
              )}
              {base.finger_hood_or_pad_placement === "Middle Finger" ? (
                <>
                  {textures.finger_pad ? (
                    <MeshWithTexture geometry={nodes.middle_finger_pad1.geometry} material-color={colors.finger_pad} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.finger_pad} tsize={1.5} />
                  ) :(
                    <mesh geometry={nodes.middle_finger_pad1.geometry} material-color={colors.finger_pad} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
                  )}
                  <mesh geometry={nodes.MASH2_ReproMesh.geometry} material-color={colors.Stiches} material={materials.Stitches} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
                  {!base.dual_welting && (
                  <mesh geometry={nodes.polySurface313.geometry} material-color={colors.welt} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
                  )}    
                </>
              ) :(
                <>
                  {!base.dual_welting && (
                  <mesh geometry={nodes.polySurface299.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
                  )}    
                </>
              )}
            </>
          ):(
            <>
              {!base.dual_welting && (
                <>
                  <mesh geometry={nodes.polySurface299.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
                  <mesh geometry={nodes.polySurface298.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
                </>
              )}
            </>
          )}
        </>
      )}
      
      
      {/*Middle Hood or Pad*/}
      {/* <mesh geometry={nodes.polySurface311.geometry} material-color={colors.palm} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.polySurface313.geometry} material-color={colors.palm} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />  */}

      {/*Leathers*/}
      {!base.dual_welting && (
        <>
          {textures.leather2 ? (
            <MeshWithTexture geometry={nodes.Index_Inner.geometry} material-color={colors.leather2} material={materials.Index_Inner1} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather2} />
          ) : (
            <mesh geometry={nodes.Index_Inner.geometry} material-color={colors.leather2} material={materials.Index_Inner1} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.leather3 ? (
            <MeshWithTexture geometry={nodes.Index_Outer.geometry} material-color={colors.leather3} material={materials.Index_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather3} />
          ) : (
            <mesh geometry={nodes.Index_Outer.geometry} material-color={colors.leather3} material={materials.Index_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.leather4 ? (
            <MeshWithTexture geometry={nodes.Middle_Inner.geometry} material-color={colors.leather4} material={materials.Middle_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather4} />
          ) : (
            <mesh geometry={nodes.Middle_Inner.geometry} material-color={colors.leather4} material={materials.Middle_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.leather5 ? (
            <MeshWithTexture geometry={nodes.Middle_Outer.geometry} material-color={colors.leather5} material={materials['Middle Outer']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather5} />
          ) : (
            <mesh geometry={nodes.Middle_Outer.geometry} material-color={colors.leather5} material={materials['Middle Outer']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.leather6 ? (
            <MeshWithTexture geometry={nodes.Ring_Inner.geometry} material-color={colors.leather6} material={materials.Ring_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather6} />
          ) : (
            <mesh geometry={nodes.Ring_Inner.geometry} material-color={colors.leather6} material={materials.Ring_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.leather7 ? (
            <MeshWithTexture geometry={nodes.Ring_Outer.geometry} material-color={colors.leather7} material={materials.Ring_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather7} />
          ) : (
            <mesh geometry={nodes.Ring_Outer.geometry} material-color={colors.leather7} material={materials.Ring_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.leather8 ? (
            <MeshWithTexture geometry={nodes.Pinky_Inner1.geometry} material-color={colors.leather8} material={materials.Pink_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather8} />
          ) : (
            <mesh geometry={nodes.Pinky_Inner1.geometry} material-color={colors.leather8} material={materials.Pink_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.wingtipPinky ? (
            <MeshWithTexture geometry={nodes.Pinky_Outer.geometry} material-color={colors.wingtipPinky} material={materials.Pink_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.wingtipPinky} />
          ) : (
            <mesh geometry={nodes.Pinky_Outer.geometry} material-color={colors.wingtipPinky} material={materials.Pink_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {textures.wingtipThumb ? (
            <MeshWithTexture geometry={nodes.Thumb_Outer.geometry} material-color={colors.wingtipThumb} material={materials.Thumb_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.wingtipThumb} />
          ) : (
            <mesh geometry={nodes.Thumb_Outer.geometry} material-color={colors.wingtipThumb} material={materials.Thumb_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
        </>
      )}

      {/*Inlay*/}
      {base.inlay ?(
        <>
          <mesh geometry={nodes.inlay.geometry} material-color={colors.inlay} material={materials['Details 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.polySurface328.geometry} material-color={colors.inlay} material={materials['Details 2']} position={[-0.071, 0.03, 0.01]} rotation={[-2.025, 0.713, 1.43]} scale={-0.01} />
        </>
      ):(
        <></>
        )}

      {/*Stiches*/}
      {textures.Stiches ? (
        <MeshWithTexture geometry={nodes.stitches1.geometry} material-color={colors.Stiches} material={materials.Stitches} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.Stiches} />
      ) : (
        <mesh geometry={nodes.stitches1.geometry} material-color={colors.Stiches} material={materials.Stitches} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
      )}

      {/*Dual Welting*/}
      {/*Welt*/}
      {base.dual_welting ? (
        <>
          <mesh geometry={nodes.polySurface297001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} /> */}
          <mesh geometry={nodes.polySurface301.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          <mesh geometry={nodes.polySurface319.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          <mesh geometry={nodes.polySurface320.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          <mesh geometry={nodes.polySurface321.geometry} material-color={colors.welt} material={materials.Knots} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          {textures["Finger Strip"] ? (
            <MeshWithTexture geometry={nodes.strips.geometry} material-color={colors["Finger Strip"]} material={materials['Details 2']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures["Finger Strip"]} />
          ) : (
            <mesh geometry={nodes.strips.geometry} material-color={colors["Finger Strip"]} material={materials['Details 2']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          {/* <mesh geometry={nodes.dual_welt002.geometry} material-color={colors.welt} material={materials['lambert1.001']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} /> */}
          {textures.welt ? (
            <MeshWithTexture geometry={nodes.dual_welt001.geometry} material-color={colors.welt} material={materials['Details 2.001']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} tsize={1}/>
          ) : (
            <mesh geometry={nodes.dual_welt001.geometry} material-color={colors.welt} material={materials['Details 2.001']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          )}
          <mesh geometry={nodes.Wire001.geometry} material-color={colors.welt} material={materials.welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          <mesh geometry={nodes.Welt3.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
          <>
            {textures.leather1 ? (
              <MeshWithTexture geometry={nodes.Index_Inner.geometry} material-color={colors.leather1} material={materials.Index_Inner1} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
            ) : (
              <mesh geometry={nodes.Index_Inner.geometry} material-color={colors.leather1} material={materials.Index_Inner1} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.leather1 ? (
              <MeshWithTexture geometry={nodes.Index_Outer.geometry} material-color={colors.leather1} material={materials.Index_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
            ) : (
              <mesh geometry={nodes.Index_Outer.geometry} material-color={colors.leather1} material={materials.Index_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.leather1 ? (
              <MeshWithTexture geometry={nodes.Middle_Inner.geometry} material-color={colors.leather1} material={materials.Middle_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
            ) : (
              <mesh geometry={nodes.Middle_Inner.geometry} material-color={colors.leather1} material={materials.Middle_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.leather1 ? (
              <MeshWithTexture geometry={nodes.Middle_Outer.geometry} material-color={colors.leather1} material={materials['Middle Outer']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
            ) : (
              <mesh geometry={nodes.Middle_Outer.geometry} material-color={colors.leather1} material={materials['Middle Outer']} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.leather1 ? (
              <MeshWithTexture geometry={nodes.Ring_Inner.geometry} material-color={colors.leather1} material={materials.Ring_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
            ) : (
              <mesh geometry={nodes.Ring_Inner.geometry} material-color={colors.leather1} material={materials.Ring_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.leather1 ? (
              <MeshWithTexture geometry={nodes.Ring_Outer.geometry} material-color={colors.leather1} material={materials.Ring_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
            ) : (
              <mesh geometry={nodes.Ring_Outer.geometry} material-color={colors.leather1} material={materials.Ring_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.leather1 ? (
              <MeshWithTexture geometry={nodes.Pinky_Inner1.geometry} material-color={colors.leather1} material={materials.Pink_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
            ) : (
              <mesh geometry={nodes.Pinky_Inner1.geometry} material-color={colors.leather1} material={materials.Pink_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.wingtipPinky ? (
              <MeshWithTexture geometry={nodes.Pinky_Outer.geometry} material-color={colors.wingtipPinky} material={materials.Pink_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.wingtipPinky} />
            ) : (
              <mesh geometry={nodes.Pinky_Outer.geometry} material-color={colors.wingtipPinky} material={materials.Pink_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
            {textures.wingtipThumb ? (
              <MeshWithTexture geometry={nodes.Thumb_Outer.geometry} material-color={colors.wingtipThumb} material={materials.Thumb_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.wingtipThumb} />
            ) : (
              <mesh geometry={nodes.Thumb_Outer.geometry} material-color={colors.wingtipThumb} material={materials.Thumb_Inner} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            )}
          </>
        </>
      ) : (
        <>
          {textures.welt ? (
            <>
              {/* <MeshWithTexture geometry={nodes.polySurface302001.geometry} material-color={colors.welt} material={materials.Knots} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface301001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface300001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface299001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface297001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} /> */}
              <MeshWithTexture geometry={nodes.polySurface302.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface301.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface300.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface299.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface298.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface297.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.polySurface312.geometry} material-color={colors.welt} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.Welt3001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.Welt2001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.Welt1001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.Welt3.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.Welt2.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.Welt1.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
              <MeshWithTexture geometry={nodes.Wire001.geometry} material-color={colors.welt} material={materials.welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.welt} />
            </>
          ) : (
            <>
              {/* <mesh geometry={nodes.polySurface302001.geometry} material-color={colors.welt} material={materials.Knots} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.polySurface301001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.polySurface300001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.polySurface299001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.polySurface297001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} /> */}
              <mesh geometry={nodes.polySurface302.geometry} material-color={colors.welt} material={materials.Knots} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.polySurface301.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.polySurface300.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              {/* <mesh geometry={nodes.polySurface299.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} /> */}
              {/* <mesh geometry={nodes.polySurface298.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} /> */}
              <mesh geometry={nodes.polySurface297.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.polySurface312.geometry} material-color={colors.welt} material={materials.Welting} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              <mesh geometry={nodes.Welt3001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.Welt2001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.Welt1001.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.Welt3.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.Welt2.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.Welt1.geometry} material-color={colors.welt} material={materials.Welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
              <mesh geometry={nodes.Wire001.geometry} material-color={colors.welt} material={materials.welting} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
            </>   
          )}
        </>
      )}

      {/*Side Logo*/}
      {textures.leather1 ? (
        <MeshWithTexture geometry={nodes.polySurface332.geometry} material-color={colors.leather1} material={materials.Thumb_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
      ) : (
        <mesh geometry={nodes.polySurface332.geometry} material-color={colors.leather1} material={materials.Thumb_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
      )}
      <mesh geometry={nodes.polySurface333.geometry} material-color={colors.logo} material={materials.Side_Logo} position={[-0.039, -0.004, 0.008]} rotation={[1.659, -0.185, -2.459]} scale={0.012} />
      <mesh geometry={nodes.polySurface334.geometry} material-color={colors.logo} material={materials.Side_Logo} position={[-0.039, -0.004, 0.008]} rotation={[1.659, -0.185, -2.459]} scale={0.012} />
      
      {/*Side Logo with back*/}
      {/* {textures.leather1 ? (
        <>
        <MeshWithTexture geometry={nodes.thuimb.geometry} material-color={colors.leather1} material={materials.Thumb_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
        <MeshWithTexture geometry={nodes.logoback2.geometry} material-color={colors.leather1} material={materials.Logo_Back} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.leather1} />
        </>
      ) : (
        <>
        <mesh geometry={nodes.thuimb.geometry} material-color={colors.leather1} material={materials.Thumb_Outer} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
        <mesh geometry={nodes.logoback2.geometry} material-color={colors.leather1} material={materials.Logo_Back} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
        </>
      )}
      <mesh geometry={nodes.side_logo1.geometry} material-color={colors.logo} material={materials.Side_Logo} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} /> */}
      
      {/*Two Piece Web */}
      {base.web_style === '2 Piece Web' && (
        <> 
        {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web1_body.geometry} material-color={colors.webStyle} material={materials.Web} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web1_body.geometry} material-color={colors.webStyle} material={materials.Web} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web1_stitches.geometry} material-color={colors.Stiches} material={materials['Web_Stitches.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web1_stitches.geometry} material-color={colors.Stiches} material={materials['Web_Stitches.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )} 
          <mesh geometry={nodes.web1_laces.geometry} material-color={colors.laces} material={materials.Web_Stitches} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*One Piece Web */}
      {base.web_style === '1 Piece Web' && (
        <>
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web2_body.geometry} material-color={colors.webStyle} material={materials.Web_Body} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web2_body.geometry} material-color={colors.webStyle} material={materials.Web_Body} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web2_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_3} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web2_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_3} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )} 
          <mesh geometry={nodes.web2_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_6} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*Net Style*/}
      {base.web_style === 'Net Style Web' && (
        <>
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web3.geometry} material-color={colors.webStyle} material={materials.Net_Style} rotation={[Math.PI / 2, 0, -2.451]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web3.geometry} material-color={colors.webStyle} material={materials.Net_Style} rotation={[Math.PI / 2, 0, -2.451]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web3_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_4} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web3_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_4} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}  
          <mesh geometry={nodes.web3_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_5} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*LaceH*/}
      {base.web_style === 'Laced H-Web' && (
        <>
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web4.geometry} material-color={colors.webStyle} material={materials.Web_Body_2} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web4.geometry} material-color={colors.webStyle} material={materials.Web_Body_2} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web4_stitches.geometry} material-color={colors.Stiches} material={materials['Web_Stitches 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web4_stitches.geometry} material-color={colors.Stiches} material={materials['Web_Stitches 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}  
          <mesh geometry={nodes.web4_laces_fr.geometry} material-color={colors.laces} material={materials.Web_Laces_4} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*ISpiral Web*/}
      {base.web_style === 'I-Web (Spiral Lace)' && (
        <>
        {textures.webStyle ? (
          <MeshWithTexture geometry={nodes.web5.geometry} material-color={colors.webStyle} material={materials.Web_Body_3} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
        ) : (
          <mesh geometry={nodes.web5.geometry} material-color={colors.webStyle} material={materials.Web_Body_3} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        )}
        {textures.Stiches ? (
          <MeshWithTexture geometry={nodes.web_5_stitches.geometry} material-color={colors.Stiches} material={materials.web5stitches} rotation={[Math.PI / 2, 0, 0]} texture={textures.Stiches} />
        ) : (
          <mesh geometry={nodes.web_5_stitches.geometry} material-color={colors.Stiches} material={materials.web5stitches} rotation={[Math.PI / 2, 0, 0]} />
        )} 
          <mesh geometry={nodes.web_5_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_7} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*WebH*/}
      {base.web_style === 'H-Web' && (
        <> 
          {/* <mesh geometry={nodes.web6.geometry} material-color={colors.webStyle} material={materials.Knots} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.web6_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_3} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.web6_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_7} rotation={[Math.PI / 2, 0, 0]} scale={0.01} /> */}
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web6001.geometry} material-color={colors.webStyle} material={materials['Knots.002']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web6001.geometry} material-color={colors.webStyle} material={materials['Knots.002']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web6_stitches001.geometry} material-color={colors.Stiches} material={materials['Web_Stitches_7.001']} rotation={[Math.PI / 2, 0, 0]} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web6_stitches001.geometry} material-color={colors.Stiches} material={materials['Web_Stitches_7.001']} rotation={[Math.PI / 2, 0, 0]} />
          )} 
          <mesh geometry={nodes.web6_laces001.geometry} material-color={colors.laces} material={materials['Web_Laces_3.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}
      
      {/*WebT*/}
      {base.web_style === 'T-Web' && (
        <> 
          {/* <mesh geometry={nodes.web7.geometry} material-color={colors.webStyle} material={materials['Web 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.web7_laces.geometry} material-color={colors.laces} material={materials.Knots} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.web7_stitches.geometry} material-color={colors.Stiches} material={materials.Knots} rotation={[Math.PI / 2, 0, 0]} scale={0.01} /> */}
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web7001.geometry} material-color={colors.webStyle} material={materials['Web 2.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web7001.geometry} material-color={colors.webStyle} material={materials['Web 2.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web7_stitches001.geometry} material-color={colors.Stiches} material={materials['Web_Stitches_7.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web7_stitches001.geometry} material-color={colors.Stiches} material={materials['Web_Stitches_7.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )} 
          <mesh geometry={nodes.web7_laces001.geometry} material-color={colors.laces} material={materials['Knots.004']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*EWeb*/}
      {base.web_style === 'E-Web' && (
        <>
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web8.geometry} material-color={colors.webStyle} material={materials.Web_Body_4} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web8.geometry} material-color={colors.webStyle} material={materials.Web_Body_4} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web8_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_6} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web8_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_6} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )} 
          <mesh geometry={nodes.web8_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_2} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}
      
      {/*cross*/}
      {base.web_style === 'Cross Web' && (
        <> 
          {/* <mesh geometry={nodes.web9.geometry} material-color={colors.webStyle} material={materials.Web_Body_5a} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.web9_laces.geometry} material-color={colors.laces} material={materials.Knots} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.web9_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_5} rotation={[Math.PI / 2, 0, 0]} scale={0.01} /> */}
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web9001.geometry} material-color={colors.webStyle} material={materials['Web_Body_5a.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web9001.geometry} material-color={colors.webStyle} material={materials['Web_Body_5a.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web9_stitches001.geometry} material-color={colors.Stiches} material={materials['Web_Stitches_5.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
            ) : (
              <mesh geometry={nodes.web9_stitches001.geometry} material-color={colors.Stiches} material={materials['Web_Stitches_5.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )} 
          <mesh geometry={nodes.web9_laces001.geometry} material-color={colors.laces} material={materials['Knots.003']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*Basket_fr*/}
      {base.web_style === 'Basket Web' && (
        <>
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web10.geometry} material-color={colors.webStyle} material={materials.Basket} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
            ) : (
              <mesh geometry={nodes.web10.geometry} material-color={colors.webStyle} material={materials.Basket} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web10_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_9} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
            ) : (
              <mesh geometry={nodes.web10_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_9} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )} 
          <mesh geometry={nodes.web10_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_9} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {/*I Web Without Logo*/}
      {base.web_style === 'I-Web (No Logo)' && (
        <>
          {textures.webStyle ? (
            <>
              <MeshWithTexture geometry={nodes.web11.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
              <MeshWithTexture geometry={nodes.polySurface337.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
              <MeshWithTexture geometry={nodes.polySurface335.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
              <MeshWithTexture geometry={nodes.pCube1.geometry} material-color={colors.webStyle} material={materials.Web_Base} position={[0.046, 0.114, 0.036]} rotation={[1.359, -0.283, -0.829]} scale={[0.021, 0.001, 0.019]} texture={textures.webStyle} />
            </>
          ) : (
            <>
              <mesh geometry={nodes.web11.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              <mesh geometry={nodes.polySurface337.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              <mesh geometry={nodes.polySurface335.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              <mesh geometry={nodes.pCube1.geometry} material-color={colors.webStyle} material={materials.Web_Base} position={[0.046, 0.114, 0.036]} rotation={[1.359, -0.283, -0.829]} scale={[0.021, 0.001, 0.019]} />
            </>
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web11_stitches001.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_8} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web11_stitches001.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_8} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          
          <mesh geometry={nodes.web11_laces001.geometry} material-color={colors.laces} material={materials.Web_Laces_8} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}
    
      {/*IWeb with Logo} */}
      {base.web_style === 'I-Web' && (
        <>
        {textures.webStyle ? (
          <MeshWithTexture geometry={nodes.web11.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web11.geometry} material-color={colors.webStyle} material={materials.Web_Base} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        )}
        {textures.Stiches ? (
          <MeshWithTexture geometry={nodes.web11_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_8} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web11_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_8} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        )}
        <mesh geometry={nodes.weblogo.geometry} material-color={colors.logo} material={materials.Web_Logo} position={[-0.007, 0, -0.006]} rotation={[Math.PI / 2, 0, -2.451]} scale={0.01} />
        <mesh geometry={nodes.logoback.geometry} material-color={colors.webStyle} material={materials['Logo Back 2']} position={[-0.007, 0, -0.006]} rotation={[Math.PI / 2, 0, -2.451]} scale={0.01} />
        <mesh geometry={nodes.web11_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_8} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}
 
      {/*LaceY1*/}
      {base.web_style === 'Y-Web' && (
        <>
          {textures.webStyle ? (
            <MeshWithTexture geometry={nodes.web12.geometry} material-color={colors.webStyle} material={materials.Web_Body_Y} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.webStyle} />
          ) : (
            <mesh geometry={nodes.web12.geometry} material-color={colors.webStyle} material={materials.Web_Body_Y} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          {textures.Stiches ? (
            <MeshWithTexture geometry={nodes.web12_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_10} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.Stiches} />
          ) : (
            <mesh geometry={nodes.web12_stitches.geometry} material-color={colors.Stiches} material={materials.Web_Stitches_10} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          <mesh geometry={nodes.web12_laces.geometry} material-color={colors.laces} material={materials.Web_Laces_10} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}
      
      {/*Laces*/}
      {textures.laces ? (
        <MeshWithTexture geometry={nodes.Wire1.geometry} material-color={colors.laces} material={materials.Laces} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.laces} />
      ) : (
        <mesh geometry={nodes.Wire1.geometry} material-color={colors.laces} material={materials.Laces} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
      )}

      {/*Wrist*/}
      {textures.wrist ? (
        <MeshWithTexture geometry={nodes.Wrist.geometry} material-color={colors.wrist} material={materials.Wrist} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} texture={textures.wrist} />
      ) : (
        <mesh geometry={nodes.Wrist.geometry} material-color={colors.wrist} material={materials.Wrist} position={[-0.007, 0.013, 0.009]} rotation={[1.617, -0.085, -2.45]} scale={0.008} />
      )}

      {/*Circle Logo*/}
      {base.logo_style === "Circle Patch" && (
        <>
          {textures.wristPlate ? (
            <MeshWithTexture geometry={nodes.circle_logo001.geometry} material-color={colors.wristPlate} material={materials.Circle_Logo} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={textures.wristPlate} />
          ) : (
            <mesh geometry={nodes.circle_logo001.geometry} material-color={colors.wristPlate} material={materials.Circle_Logo} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
          <mesh geometry={nodes.logo_stitch_round.geometry} material-color={colors.Stiches} material={materials['Logo Stitches']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.logo_without_outline001.geometry} material-color={colors.logo} material={materials['Logo Without Outline']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </>
      )}

      {base.logo_style === "Embroidered" && (
        <>
          {/*Logo with outline*/}
          {base.logo_outline ? (
            <>
              <mesh geometry={nodes.legend_logo.geometry} material-color={colors.logo} material={materials['Logo Without Outline 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
              <mesh geometry={nodes.logo_outline314.geometry} material-color={colors.logo_outline_color} material={materials['Logo Outline']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            </>
            // <mesh geometry={nodes.legend_logo.geometry} material-color={colors.logo} material={materials.Circle_Logo_Lettersa} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            ) : (
            <mesh geometry={nodes.logo_without_outline001.geometry} material-color={colors.logo} material={materials['Logo Without Outline']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            // <mesh geometry={nodes.legend_logo.geometry} material-color={colors.logo} material={materials['Logo Without Outline 2']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          )}
        </>
      )}

      {base.logo_style === "Embroidered Flag" && (
        <>
          <mesh geometry={nodes.circle_logo001.geometry} material-color={colors.wristPlate} material={materials.Circle_Logo} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.logo_stitch_round.geometry} material-color={colors.Stiches} material={materials['Logo Stitches']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <EmbroideredLogo geometry={nodes.flag_logo.geometry} material={materials.logo_with_outline1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} texture={base.embroidered_flag}/>
          {/* <mesh geometry={nodes.flag_logo.geometry} material={materials.logo_with_outline1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} >
             <meshBasicMaterial map={textureMap} />
          </mesh> */}
        </>
      )}


      {/*Square Logo*/}
      {base.logo_style === "Square Patch" && (
        <>
          <mesh geometry={nodes.square_logo_patch.geometry} material-color={colors.palm} material={materials['Square Logo Patch']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.outside_line_square_logo.geometry} material-color={colors.palm} material={materials['Logo Outside Line']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.inside_line_square_logo.geometry} material-color={colors.palm} material={materials['Logo Inner Line']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          <mesh geometry={nodes.square_logo_3.geometry} material-color={colors.palm} material={materials.Square_Logo_Letters} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
          {/* {base.logo_outline && (
            <>
            <mesh geometry={nodes.square_logo_outline.geometry} material-color={colors.logo} material={materials['Logo Outline.001']} position={[-0.002, 0.005, 0.013]} rotation={[Math.PI / 2, 0, 0]} scale={0.006} />
            </>
          )} */}
        </>
      )}
  
    </group>
  )
}

useGLTF.preload('./Model/NewTest.glb')