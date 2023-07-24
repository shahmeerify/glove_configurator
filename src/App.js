import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GloveModel } from "./components/GloveModel";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

const colorOptions = [
  "#1A1A1A",
  "#908F88",
  "#FFFFFF",
  "#FFEDCC",
  "#FEF043",
  "#EEA144",
  "#EE722F",
  "#FF6300",
  "#9B4E2B",
  "#694E3B",
  "#D21E1E",
  "#813D3D",
  "#F07693",
  "#58357D",
  "#262740",
  "#2143BF",
  "#07C9DE",
  "#334F30",
  "#A9DCC3",
];

const colorMesh = [
  "binding",
  "logo04_replace",
  "logo_03",
  "palm",
  "slice",
  "welt",
  "blackPiece",
  "leather1",
  "leather2",
  "leather3",
  "leather4",
  "leather5",
  "leather6",
  "leather7",
  "leather8",
  "wingtipThumb",
  "wingtipPinky",
  "laces",
  "logo_01", //Webbing Logo
  "stiches",
  "webStyle",
  "logo_02", //Wrist Logo
  "wrist",
];

export default function App() {
  const [rotationValue, setRotationValue] = useState(31.05);
  const [currentMesh, setCurrentMesh] = useState("binding");
  const [colors, setColors] = useState({
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
    logo_02: "#C0C0C0", //Wrist Logo
    wrist: "#f8f8f8",
  });

  const rotateLeft = () => {
    setRotationValue(
      (prevVal) => (prevVal - Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)
    );
  };

  const rotateRight = () => {
    setRotationValue((prevVal) => (prevVal + Math.PI / 2) % (2 * Math.PI));
  };

  const handleColorChange = (meshName, newColor) => {
    setColors((prevColors) => ({
      ...prevColors,
      [meshName]: newColor,
    }));
  };

  const handlePreviousMeshClick = () => {
    const currentMeshIndex = colorMesh.indexOf(currentMesh);
    const previousMeshIndex =
      currentMeshIndex !== -1
        ? (currentMeshIndex - 1 + colorMesh.length) % colorMesh.length
        : 0;
    setCurrentMesh(colorMesh[previousMeshIndex]);
  };

  const handleNextMeshClick = () => {
    const currentMeshIndex = colorMesh.indexOf(currentMesh);
    const nextMeshIndex =
      currentMeshIndex !== -1 ? (currentMeshIndex + 1) % colorMesh.length : 0;
    setCurrentMesh(colorMesh[nextMeshIndex]);
  };

  return (
    <div className="glove py-12">
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="md:col-span-7 xl:col-span-8">
            <div className="canvas-carousel sc-jWBwVP kufCep flickity-enabled">
              <div
                className="flickity-viewport"
                style={{ height: "752px", touchAction: "pan-y" }}
              >
                <div
                  className="flickity-slider"
                  style={{ left: "0px", transform: "translateX(0%)" }}
                >
                  <div
                    aria-selected="true"
                    className="is-selected"
                    style={{ position: "absolute", left: "0%" }}
                  >
                    <div
                      id="canvas--BASEBALL_FIELDING_PRO_44--BACK"
                      className="responsive-canvas-wrap sc-brqgnP hDShiW"
                      style={{ height: "752px" }}
                    >
                      <Canvas
                        shadows
                        dpr={[1, 2]}
                        width={750}
                        height={750}
                        className="sc-cMljjf jjRdFm lower-canvas"
                        style={{ width: "750px", height: "750px" }}
                      >
                        <ambientLight intensity={0.7} />
                        <directionalLight
                          intensity={1}
                          position={[10, 15, 10]}
                        />
                        <pointLight intensity={1} position={[-10, 10, -10]} />
                        <GloveModel rot={rotationValue} colors={colors} />
                        {/* <Environment preset="city" /> */}
                        <OrbitControls
                          minPolarAngle={Math.PI / 2}
                          maxPolarAngle={Math.PI / 2}
                          enableZoom={true}
                          enablePan={false}
                        />
                      </Canvas>
                    </div>
                  </div>
                </div>
                <button
                  onClick={rotateLeft}
                  className="flickity-button flickity-prev-next-button previous"
                  type="button"
                  aria-label="Previous"
                >
                  <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                    />
                  </svg>
                </button>
                <button
                  onClick={rotateRight}
                  className="flickity-button flickity-prev-next-button next"
                  type="button"
                  aria-label="Next"
                >
                  <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path
                      d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                      className="arrow"
                      transform="translate(100, 100) rotate(180) "
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 xl:col-span-4">
            <div className="color-picker-container">
              <h3>Color Customization</h3>
              <div className="mesh-navigation">
                <button
                  onClick={handlePreviousMeshClick}
                  className="nav-button"
                  disabled={colorMesh.indexOf(currentMesh) === 0}
                >
                  {"< Previous Mesh"}
                </button>
                <button
                  onClick={handleNextMeshClick}
                  className="nav-button"
                  disabled={colorMesh.indexOf(currentMesh) === colorMesh.length - 1}
                >
                  {"Next Mesh >"}
                </button>
              </div>
              <div className="color-options">
                <div className="mesh-label">Current Mesh: {currentMesh}</div>
                {colorOptions.map((color) => (
                  <div
                    key={color}
                    className={`color-option ${colors[currentMesh] === color ? "selected" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(currentMesh, color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
