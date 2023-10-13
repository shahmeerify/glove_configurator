import React, { useRef } from 'react'
import { useGLTF, useTexture, Text } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import alaska from '../../assets/flags/alaska.png'
import { PlaneGeometry, MeshBasicMaterial, TextureLoader } from 'three';

const MeshWithTexture = ({ geometry, material, color, position, rotation, texture, scale }) => {
  const textureMap = useTexture(texture);
  return (
    <mesh geometry={geometry} material={material} material-color={color} position={position} rotation={rotation} scale={scale}>
      <meshBasicMaterial map={textureMap} />
    </mesh>
  );
};
const MeshWithoutTexture = ({ geometry, material, color, position, rotation, scale }) => {
  return (
    <mesh geometry={geometry} material={material} material-color={color} position={position} rotation={rotation} scale={scale} >
    </mesh>
  );
};

const PalmMesh = ({ nodes, materials, colors, texture }) => {
  const textureMap = useTexture(texture);
  return (
    <mesh geometry={nodes.palm.geometry} material={materials.palm} material-color={colors.palm} rotation={[Math.PI / 2, 0, -0.44]}>
      <meshBasicMaterial map={textureMap} />
      <mesh geometry={nodes.Slice.geometry} material={materials.palm} color={colors.slice} >
        <meshBasicMaterial map={textureMap} />
      </mesh>  
    </mesh>
  )
}

export function GloveModel({rot, colors, textures, base}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('./Model/GloveModelFUV.glb');

  const flagTexture = useLoader(TextureLoader, alaska);
  const flagGeometry = new PlaneGeometry(1.3, 1); // Adjust the size as needed
  const flagMaterial = new MeshBasicMaterial({ map: flagTexture });

  useFrame(() => {
    ref.current.rotation.y = rot
  })
  
  return (
    <group dispose={null} scale={[0.25, 0.25, 0.25]} position={[0, -2.2, 0]} ref={ref} >
      {textures.binding ? (
        <MeshWithTexture geometry={nodes.binding.geometry} material={materials.Binding} color={colors.binding} position={[0.011, 0.012, -0.023]} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.binding} />
      ) : (
        <MeshWithoutTexture geometry={nodes.binding.geometry} material={materials.Binding} color={colors.binding} position={[0.011, 0.012, -0.023]} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      
      <mesh geometry={nodes.logo4_replace.geometry} material={materials.logo2} position={[-0.902, 6.75, -1.363]} material-color={colors.logo4_replace} rotation={[-0.385, 0.382, 0.027]} scale={1.309} />
      <mesh geometry={nodes.logo_03.geometry} material={materials.logoColor} position={[-4.369, 2.649, 1.831]} material-color={colors.logo_03} rotation={[-2.6, -0.759, 2.616]} scale={[-5.958, -12.848, -6.068]} />
      
      {textures.palm ? (
        <PalmMesh nodes={nodes} materials={materials} colors={colors} texture={textures.palm}/>
      ) : (
        <mesh geometry={nodes.palm.geometry} material={materials.palm} material-color={colors.palm} rotation={[Math.PI / 2, 0, -0.44]}>
          <mesh geometry={nodes.Slice.geometry} material={materials.palm} color={colors.slice} />
        </mesh>
      )}
      
      {textures.welt ? (
        <MeshWithTexture geometry={nodes.welt.geometry} material={materials.welt} color={colors.welt} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.welt} />
      ) : (
        <MeshWithoutTexture geometry={nodes.welt.geometry} material={materials.welt} color={colors.welt} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      <mesh geometry={nodes.blackPiece.geometry} material={materials['black piece']} position={[0.011, 0.012, -0.023]} material-color={colors.blackPiece} rotation={[Math.PI / 2, 0, -0.44]} />

      <mesh 
        geometry={flagGeometry}
        material={flagMaterial}
        position={[-4.9, 13.5, -4.75]}
        scale = {[2, 2, 2]}
        rotation = {[0.1, 3.6, -Math.PI/2]}
      />
{/* 
    <Text
      position={[-6, 5.45, -1.8]}
      rotation={[0.2, -1.7, 1.5]}
      fontSize={1} // Adjust the font size as needed
      color="black" // Adjust the color as needed
      >
    </Text> */}
    <Text
      position={[-6.15, 5.45, 2.8]}
      rotation={[0.91, -1.3, 2.05]}
      fontSize={1.5} // Adjust the font size as needed
      color="black" // Adjust the color as needed
    >
      {"44"}
    </Text>
      
      {textures.leather1 ? (
        <MeshWithTexture geometry={nodes.leather1.geometry} material={materials.leather1} color={colors.leather1} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather1} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather1.geometry} material={materials.leather1} color={colors.leather1} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather2 ? (
        <MeshWithTexture geometry={nodes.leather2.geometry} material={materials.leather2} color={colors.leather2} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather2} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather2.geometry} material={materials.leather2} color={colors.leather2} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather2 ? (
        <MeshWithTexture geometry={nodes.leather2.geometry} material={materials.leather2} color={colors.leather2} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather2} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather2.geometry} material={materials.leather2} color={colors.leather2} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather3 ? (
        <MeshWithTexture geometry={nodes.leather3.geometry} material={materials.leather3} color={colors.leather3} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather3} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather3.geometry} material={materials.leather3} color={colors.leather3} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather4 ? (
        <MeshWithTexture geometry={nodes.leather4.geometry} material={materials.leather4} color={colors.leather4} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather4} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather4.geometry} material={materials.leather4} color={colors.leather4} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather5 ? (
        <MeshWithTexture geometry={nodes.leather5.geometry} material={materials.leather5} color={colors.leather5} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather5} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather5.geometry} material={materials.leather5} color={colors.leather5} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather6 ? (
        <MeshWithTexture geometry={nodes.leather6.geometry} material={materials.leather6} color={colors.leather6} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather6} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather6.geometry} material={materials.leather6} color={colors.leather6} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather7 ? (
        <MeshWithTexture geometry={nodes.leather7.geometry} material={materials.leather7} color={colors.leather7} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather7} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather7.geometry} material={materials.leather7} color={colors.leather7} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.leather8 ? (
        <MeshWithTexture geometry={nodes.leather8.geometry} material={materials.leather8} color={colors.leather8} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.leather8} />
      ) : (
        <MeshWithoutTexture geometry={nodes.leather8.geometry} material={materials.leather8} color={colors.leather8} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.wingtipThumb ? (
        <MeshWithTexture geometry={nodes.wingtipThumb.geometry} material={materials.wingtipThumb} color={colors.wingtipThumb} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.wingtipThumb} />
      ) : (
        <MeshWithoutTexture geometry={nodes.wingtipThumb.geometry} material={materials.wingtipThumb} color={colors.wingtipThumb} rotation={[Math.PI / 2, 0, -0.44]} />
      )}
      {textures.wingtipPinky ? (
        <MeshWithTexture geometry={nodes.wingtipPinky.geometry} material={materials.wingtipPinky} color={colors.wingtipPinky} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.wingtipPinky} />
      ) : (
        <MeshWithoutTexture geometry={nodes.wingtipPinky.geometry} material={materials.wingtipPinky} color={colors.wingtipPinky} rotation={[Math.PI / 2, 0, -0.44]} />
      )}

      {/* Web Styles */}

      {/* base web */}
      
      {textures.laces ? (
        <MeshWithTexture geometry={nodes.laces.geometry} material={materials.laces} color={colors.laces} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.laces} />
      ) : (
        <MeshWithoutTexture geometry={nodes.laces.geometry} material={materials.laces} color={colors.laces} rotation={[Math.PI / 2, 0, -0.44]} />
      )}

      <mesh geometry={nodes.logo_01.geometry} material={materials.logoColor} position={[-6.745, 12.807, 0.794]} material-color={colors.logo_01} rotation={[-0.835, -0.052, 2.896]} scale={[-4.93, -10.633, -5.022]} />
      
      {textures.stiching ? (
        <MeshWithTexture geometry={nodes.stiches.geometry} material={materials.stiching} color={colors.stiches} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} texture={textures.stiches} />
      ) : (
        <MeshWithoutTexture geometry={nodes.stiches.geometry} material={materials.stiching} color={colors.stiches} position={[-6.29, 14.743, 1.171]} rotation={[0, -0.003, 0]} />
      )}

      {textures.webStyle ? (
        <MeshWithTexture geometry={nodes.webStyle.geometry} material={materials.web} color={colors.webStyle} position={[-6.229, 10.342, -0.197]} rotation={[-1.162, -1.39, -1.645]} texture={textures.webStyle} />
      ) : (
        <MeshWithoutTexture geometry={nodes.webStyle.geometry} material={materials.web} color={colors.webStyle} position={[-6.229, 10.342, -0.197]} rotation={[-1.162, -1.39, -1.645]} />
      )}
      
      
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
      {base.logo_style === "Embroidered" && (
        <>
          <mesh geometry={nodes.logo_02.geometry} material={materials.logoColor} position={[-0.727, 0.89, -3.739]} material-color={colors.logo_02} rotation={[1.756, 0.233, 2.664]} scale={[3.455, 7.451, 3.519]} />
          {textures.wrist ? (
            <MeshWithTexture geometry={nodes.wrist.geometry} material={materials.wrist} color={colors.wrist} rotation={[Math.PI / 2, 0, -0.44]} texture={textures.wrist} />
          ) : (
            <MeshWithoutTexture geometry={nodes.wrist.geometry} material={materials.wrist} color={colors.wrist} rotation={[Math.PI / 2, 0, -0.44]} />
          )}
        </>
      )}


      {/* Circle backwrist Logo Part */}
      {base.logo_style === "Circle Patch" && (
        <>
          <mesh geometry={nodes.inner_circle.geometry} material={materials.LogoOuterCircle} material-color={colors.logo_02} rotation={[Math.PI / 2, 0, -0.44]} />
          <mesh geometry={nodes.logo.geometry} material={materials.Logo4} position={[-0.517, 1.098, -3.791]} material-color={colors.logo_02} rotation={[1.734, 0.157, 2.589]} scale={[2.816, 6.074, 2.869]} />
          <mesh geometry={nodes.middle_logo_circle.geometry} material={materials.logoMiddleCircle} material-color={colors.logo_02} rotation={[Math.PI / 2, 0, -0.44]} />
          <mesh geometry={nodes.stiches013.geometry} material={materials['stiching.012']} position={[-6.29, 14.743, 1.171]} material-color={colors.stiches} rotation={[0, -0.003, 0]} />
          <mesh geometry={nodes.wrist001.geometry} material={materials['wrist.001']} material-color={colors.wrist} rotation={[Math.PI / 2, 0, -0.44]} />
        </>
      )}

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

useGLTF.preload('./Model/GloveModelFUV.glb')
