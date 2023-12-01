import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { New } from "../customizers/NewModel" ;
import { OrbitControls } from "@react-three/drei";
import { colorOptions, colorData, tabs, textureData, imagePaths, colorStepsConfig, baseOptions, Options, baseStepsConfig, flags } from "../constants";

export default function Fielder() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [rotationValue, setRotationValue] = useState(0.35);
  const [currentMesh, setCurrentMesh] = useState("binding");
  const [colors, setColors] = useState(colorData);
  const [textures, setTextures] = useState(textureData);
  const [colorSteps, setColorSteps] = useState(colorStepsConfig);
  const [currentBase, setCurrentBase] = useState("size");
  const [baseConfig, setBaseConfig] = useState(baseOptions);
  const [baseSteps, setBaseSteps] = useState(baseStepsConfig);
  
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
    if (baseConfig[option] === value) {
      // If clicking on already selected option, set to null 
      value = null; 
    }
    setBaseConfig((prevOption) => ({
      ...prevOption,
      [option]: value,
    }));

    // Update baseSteps when logo_style changes
    if(option === 'logo_style' && value === 'Embroidered Flag') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,
        embroidered_flag: true
      }));
    } else if(option === 'logo_style' && value !== 'Embroidered Flag') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,  
        embroidered_flag: false
      }));
    }
    if(option === 'logo_style' && value === 'Embroidered') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,
        logo_outline: true
      }));
    } else if(option === 'logo_style' && value !== 'Embroidered') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,  
        logo_outline: false
      }));
    }
    if(option === 'logo_style' && value === "Circle Patch") {
      console.log("here")
      setColorSteps(prevSteps => ({
        ...prevSteps,
        wristPlate: true
      }));
    } else if(option === 'logo_style' && value !== "Circle Patch") {
      setColorSteps(prevSteps => ({
        ...prevSteps,  
        wristPlate: false
      }));
    }

    if(option === 'finger_option' && value !== 'None') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,
        finger_hood_or_pad_placement: true
      }));
    } else if(option === 'finger_option' && value === 'None') {
      setBaseSteps(prevSteps => ({
        ...prevSteps,  
        finger_hood_or_pad_placement: false
      }));
    }

    if(option === 'logo_outline' && value === 'Enable Logo Outline') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        logo_outline_color: true
      }));
    } else if(option === 'logo_outline' && value === null) {
      setColorSteps(prevSteps => ({
        ...prevSteps,  
        logo_outline_color: false
      }));
    }

    if(option === 'finger_option' && value === 'Hood') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_hood: true
      }));
    } else if(option === 'finger_option' && value !== 'Hood') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_hood: false
      }));
    }

    if(option === 'finger_option' && value === 'Pad') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_pad: true
      }));
    } else if(option === 'finger_option' && value !== 'Pad') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        finger_pad: false
      }));
    }

    if(option === 'inlay' && value === 'Inlay') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        inlay: true
      }));
    } else if(option === 'inlay' && value !== 'Inlay') {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        inlay: false
      }));
    }

    if(option === "dual_welting" && value === "Dual Welting") {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Finger Strip": true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather2: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather3: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather4: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather5: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather6: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather7: false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather8: false
      }));
    } else if(option === "dual_welting" && value !== "Dual Welting") {
      setColorSteps(prevSteps => ({
        ...prevSteps,
        "Finger Strip": false
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather2: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather3: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather4: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather5: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather6: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather7: true
      }));
      setColorSteps(prevSteps => ({
        ...prevSteps,
        leather8: true
      }));
    }

  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handlePreviousClick = (options, current, setCurrent, steps) => {
    const keys = Object.keys(options);
    
    let index = keys.indexOf(current);
    if(index === -1) return;
  
    let prevEnabled;
    
    do {
      index--;
      if(index < 0) index = keys.length - 1;
      
      prevEnabled = steps[keys[index]];
    }
    while(!prevEnabled && index !== keys.indexOf(current))
    
    setCurrent(keys[index]);
  }

  const handleNextClick = (options, current, setCurrent, steps) => {

    const keys = Object.keys(options);
    
    let index = keys.indexOf(current);
    if(index === -1) return;
  
    let nextEnabled;
    
    do {
      index++;
      if(index >= keys.length) index = 0;
  
      nextEnabled = steps[keys[index]];
    }
    while(!nextEnabled && index !== keys.indexOf(current));
  
    setCurrent(keys[index]);
  }

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

                        <directionalLight 
                          intensity={0.25 * Math.PI} // convert direct intensity to radians
                          color={'#ffffff'}
                          position={[-0.5, 0, -0.866]} // 60 degrees
                        />

                        {/* <pointLight /> */}
                    
                        <New rot={rotationValue} base={baseConfig} colors={colors} textures={textures} flags={flags} />
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
                      onClick={() => {handlePreviousClick(baseOptions, currentBase, setCurrentBase, baseSteps)}}
                      className="nav-button"
                      disabled={Object.keys(baseOptions).indexOf(currentBase) === 0}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {handleNextClick(baseOptions, currentBase, setCurrentBase, baseSteps)}}
                      className="nav-button"
                      disabled={
                        Object.keys(baseOptions).indexOf(currentBase) ===  Object.keys(baseOptions).length - 1
                      }
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="base-options">
                    <div className="mesh-label">
                      Current: {currentBase}
                    </div>
                    <div>
                      {Options[currentBase].map(option => (
                        <div> 
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
                      onClick={() => {handlePreviousClick(colorData, currentMesh, setCurrentMesh, colorSteps)}}
                      className="nav-button"
                      disabled={Object.keys(colorData).indexOf(currentMesh) === 0}
                    >
                      {"<"}
                    </button>
                    <button
                      onClick={() => {handleNextClick(colorData, currentMesh, setCurrentMesh, colorSteps)}}
                      className="nav-button"
                      disabled={
                        Object.keys(colorData).indexOf(currentMesh) ===  Object.keys(colorData).length - 1
                      }
                    >
                      {">"}
                    </button>
                  </div>
                  <div className="mesh-label">
                    Current Mesh: {currentMesh}
                  </div>
                  <div className="color-options">
                    {Object.entries(colorOptions).map(([label, color]) => (
                      <div class="color-option-wrapper">
                        <div
                          key={color}
                          className={`color-option ${
                            colors[currentMesh] === color ? "selected" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorChange(currentMesh, color)}
                        /> 
                        <div className="color-label">
                          {label} 
                        </div>
                      </div>
                    ))}
                    <br/>
                    {Object.entries(imagePaths).slice(0,-3).map(([label, img]) => (
                      <div class="texture-option-wrapper">
                        <img
                          className={`texture-option ${
                            textures[currentMesh] === img ? "selected" : ""  
                          }`}
                          key={img}
                          src={img}
                          alt='texture'
                          onClick={() => handleTextureChange(currentMesh, img)}
                        />
                        <div className="texture-label">
                          {label}
                        </div>
                      </div>
                    ))}
                    
                    <div className="exclusive-textures"> 
                    <div className="exclusive-label">Exclusive Textures</div>

                      {Object.entries(imagePaths).slice(-3).map(([label, img]) => (
                        <div class="texture-option-wrapper">
                          <img
                            className={`texture-option ${
                              textures[currentMesh] === img ? "selected" : ""  
                            }`}
                            key={img}
                            src={img}
                            alt='texture'
                            onClick={() => handleTextureChange(currentMesh, img)}
                          />
                          <div className="texture-label">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>

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
