import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { New } from "../customizers/NewModel" ;
import { OrbitControls } from "@react-three/drei";
import { colorOptions, colorData, tabs, textureData, imagePaths, baseOptions, Options } from "../constants";

export default function Fielder() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [rotationValue, setRotationValue] = useState(0.35);
  const [currentMesh, setCurrentMesh] = useState("binding");
  const [colors, setColors] = useState(colorData);
  const [textures, setTextures] = useState(textureData);
  const [currentBase, setCurrentBase] = useState("size");
  const [baseConfig, setBaseConfig] = useState(baseOptions);

  const rotateLeft = () => {
    setRotationValue(
      (prevVal) => (prevVal - Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)
    );
  };

  const rotateRight = () => {
    setRotationValue((prevVal) => (prevVal + Math.PI / 2) % (2 * Math.PI));
  };

  const handleColorChange = (meshName, newColor) => {
    setTextures((prevData) => ({
      ...prevData,
      [meshName]: null,
    }));
    setColors((prevColors) => ({
      ...prevColors,
      [meshName]: newColor,
    }));

  };

  const handleTextureChange = (meshName, img) => {
    setColors((prevColors) => ({
      ...prevColors,
      [meshName]: colorData[meshName],
    }));
    setTextures((prevData) => ({
      ...prevData,
      [meshName]: img,
    }));

  };

  const handleBaseChange = (option, value) => {
    setBaseConfig((prevOption) => ({
      ...prevOption,
      [option]: value,
    }));
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handlePreviousClick = (customOptions, current, setCurrentOption) => {
    const optionKeys = Object.keys(customOptions);
    const currentMeshIndex = optionKeys.indexOf(current);
    const previousMeshIndex =
      currentMeshIndex !== -1
        ? (currentMeshIndex - 1 + optionKeys.length) % optionKeys.length
        : 0;
    setCurrentOption(optionKeys[previousMeshIndex]);
  };

  const handleNextClick = (customOptions, current, setCurrentOption) => {
    const optionKeys = Object.keys(customOptions);
    const currentMeshIndex = optionKeys.indexOf(current);
    const nextMeshIndex =
      currentMeshIndex !== -1 ? (currentMeshIndex + 1) % optionKeys.length : 0;
    setCurrentOption(optionKeys[nextMeshIndex]);
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
                        / Add ambient light
                        <ambientLight intensity={0.3} color={'#ffffff'} />

                        <directionalLight 
                          intensity={0.25 * Math.PI} // convert direct intensity to radians
                          color={'#ffffff'}
                          position={[0.5, 0, 0.866]} // 60 degrees
                        />
                    
                        <New rot={rotationValue} colors={colors} />
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
            <div className="configurator-container">
              <div className="tab-buttons">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`tab-button ${
                      currentTab === tab ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {currentTab === tabs[0] && (
                <div className="Base">
                  <h3 className="tab-heading">Base Personalization</h3>
                  <div className="mesh-navigation">
                    <button
                      onClick={() => {handlePreviousClick(baseOptions, currentBase, setCurrentBase)}}
                      className="nav-button"
                      disabled={Object.keys(baseOptions).indexOf(currentBase) === 0}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {handleNextClick(baseOptions, currentBase, setCurrentBase)}}
                      className="nav-button"
                      disabled={
                        Object.keys(baseOptions).indexOf(currentBase) ===  Object.keys(baseOptions).length - 1
                      }
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="color-options">
                    <div className="mesh-label">
                      Current: {currentBase}
                    </div>
                    <div>
                      {Options[currentBase].map((option) => (
                        <div key={option} className="radio-container">
                          <input
                            type="radio"
                            id={`radio-${option}`}
                            className="radio-input"
                            value={option}
                            checked={baseConfig[currentBase] === option}
                            onClick={()=>{handleBaseChange(currentBase, option)}}
                          />
                          <label htmlFor={`radio-${option}`} className="radio-label">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {currentTab === tabs[1] && (
                <div className="Color">
                  <h3 className="tab-heading">Color Customization</h3>
                  <div className="mesh-navigation">
                    <button
                      onClick={() => {handlePreviousClick(colorData, currentMesh, setCurrentMesh)}}
                      className="nav-button"
                      disabled={Object.keys(colorData).indexOf(currentMesh) === 0}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {handleNextClick(colorData, currentMesh, setCurrentMesh)}}
                      className="nav-button"
                      disabled={
                        Object.keys(colorData).indexOf(currentMesh) ===  Object.keys(colorData).length - 1
                      }
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="color-options">
                    <div className="mesh-label">
                      Current Mesh: {currentMesh}
                    </div>
                    {colorOptions.map((color) => (
                      <div
                        key={color}
                        className={`color-option ${
                          colors[currentMesh] === color ? "selected" : ""
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(currentMesh, color)}
                      />
                    ))}
                    <br/>
                    {imagePaths.map((img) => (
                      <img
                        className={`color-option ${
                          textures[currentMesh] === img ? "selected" : ""}`}
                        key={img}
                        src={img}
                        alt='texture'
                        onClick={() => handleTextureChange(currentMesh, img)}
                      />
                    ))}
                  </div>
                </div>
              )}
               {currentTab === tabs[2] && (
                <div className="Personalize">
                  <h3 className="tab-heading">Personalization</h3>
                  {/* Add your custom Base Personalization UI here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div> 

    </div>
  );
}
