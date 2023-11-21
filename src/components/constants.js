import alligatorskin from '../assets/textures/alligator skin/a_skin.png'
import bluepinktie from '../assets/textures/blue pink tie/inlay_initialShadingGroup_Diffuse.png'
import greencamo from '../assets/textures/camo/green camo.jpg'
import blueshiny from '../assets/textures/blue shiny/base_base_BaseColor.png'
import graycamo from '../assets/textures/camo grey/grey camoflauge.jpg'
import redcamo from '../assets/textures/camo red/red camo.webp'
import furredskincow from '../assets/textures/Cow skin Furred/cow skin furred.png'
import crosspattern from '../assets/textures/cross pattern/cross.png'
import goldshiny from '../assets/textures/gold shiny/base_base_BaseColor.png'
import elephantskin from '../assets/textures/elephant skin/elephant skin.png'
import invertedelephaantskin from '../assets/textures/Interved Elephant Skin/invert-elephant-skin.jpg'
import redelephantskin from '../assets/textures/Red Elephant Skin/elephant skin.png'
import redshiny from '../assets/textures/red shiny/base_base_BaseColor.png'
import reptileskin from '../assets/textures/reptile skin/reptile.jpg'
import silvershiny from '../assets/textures/silver shiny/base_base_BaseColor.png'
import snakeblack from '../assets/textures/snake black/snake skin black.png'
import snakeblonde from '../assets/textures/snake blonde/snake skin blonde.png'
import snakebrown from '../assets/textures/snake brown/snake skin brown.png'
import snakegray from '../assets/textures/snake grey/snake skin grey.png'
import snakelblue from '../assets/textures/snake light blue/snake skin light blue.png'
import snakepink from '../assets/textures/snake pink/snake skin pink.png'
import snakepurple from '../assets/textures/snake purple/snake skin purple.png'
import snakered from '../assets/textures/snake red/snake skin red.png'
import snaketan from '../assets/textures/snake tan/snake skin tan.png'
import snaketeal from '../assets/textures/snake teal/snake skin teal.png'
import snakewhite from '../assets/textures/snake white/snake skin white.png'
import stripepattern from '../assets/textures/stripe pattern/stipe.jpg'


export const imagePaths = {
  "Shiny Silver": silvershiny,
  "Shiny Gold": goldshiny ,
  "Shiny Red": redshiny ,
  "Shiny Blue": blueshiny,
  "Blue Pink Tie": bluepinktie ,
  "Green Camo": greencamo ,
  "Gray Camo": graycamo ,
  "Red Camo": redcamo ,
  "Reptile Skin": reptileskin ,
  "Aligator Skin": alligatorskin,
  "Elephant Skin": elephantskin,
  "Black Snake": snakeblack ,
  "Gray Snake": snakegray ,
  "White Snake": snakewhite,
  "Red Snake": snakered,
  "Blue Snake": snakelblue ,
  "Blonde Snake": snakeblonde ,
  "Brown Snake": snakebrown ,
  "Pink Snake": snakepink ,
  "Purple Snake": snakepurple ,
  "Tan Snake": snaketan ,
  "Teal Snake": snaketeal ,
  "Cross Pattern": crosspattern ,
  "Stripe Pattern": stripepattern, 
  "Furred Cow Skin": furredskincow ,
  "Inverted Elephant Skin": invertedelephaantskin ,
  "Red Elephant Skin": redelephantskin ,
};

export const colorOptions = {
  "Black": "#1a1a1a",
    "Gray": "#84837E",
    "White": "#FFFFFF",
    "Blonde": "#FCD48F",
    "Yellow": "#EFD115",
    "Tan": "#E57E00",
    "Orange": "#FF6D1F",
    "Orange Tan": "#D3480F",
    "Oiled Chestnut": "#9B4E2B",
    "Brown": "#694E3B",
    "Red": "#D21E1E",
    "Maroon": "#943535",
    "Pink": "#F07693",
    "Purple": "#58357D",
    "Navy Blue": "#262740",
    "Royal Blue": "#2143BF",
    "Sky Blue": "#0BB4C7",
    "Forest Green": "#334F30",
    "Mint": "#65DDA3",
    "Light Gray": "#9D9D99",
    "Lime Green": "#29E600",
};

  export const colorData = {
    binding: "#E2E2E2",
    laces: "#E2E2E2",
    leather1: "#EBEBEB",
    leather2: "#EBEBEB",
    leather3: "#EBEBEB",
    leather4: "#EBEBEB",
    leather5: "#EBEBEB",
    leather6: "#EBEBEB",
    leather7: "#EBEBEB",
    leather8: "#EBEBEB",
    logo: "#E2E2E2", //Webbing Logo
    wristPlate: "#E1E1E1",
    palm: "#EBEBEB",
    stiches: "#D3D3D3",
    webStyle: "#f0f0f0",
    welt: "#E2E2E2", //Edgings
    wingtipThumb: "#EBEBEB",
    wingtipPinky: "#EBEBEB",
    wrist: "#EBEBEB",
    // logo4_replace: "#808080", //Palm Logo
    // slice: "#f8f8f8", //Extension of Palm to Back
    // blackPiece: "#f0f0f0", //Back Hole Cover
    // logo_02: "#C0C0C0", //Wrist Logo
    // logo_03: "#e0e0e0", //Side Logo
  };

  export const textureData = {
    binding: null,
    logo4_replace: null, 
    logo_03: null, 
    palm: null,
    slice: null, 
    welt: null, 
    blackPiece: null, 
    leather1: null,
    leather2: null,
    leather3: null,
    leather4: null,
    leather5: null,
    leather6: null,
    leather7: null,
    leather8: null,
    wingtipThumb: null,
    wingtipPinky: null,
    laces: null,
    logo_01: null, 
    stiches: null,
    webStyle: null,
    logo_02: null, 
    wrist: null,
  };

  export const baseOptions = {
    size: "11",
    logo_style: "Embroidered",
    // embroidered_flag: "USA",
    logo_outline: null,
    finger_option: "None",
    finger_hood_or_pad_placement: "Middle",
    inlay: null,
    lace_length: "Normal",
    wrist_linning: "Traditional Fur",
    dual_welting: null,
    web_style: "I-Web",
    glove_stiffness: null,
    throwing_hand: null,
  }

  export const Options = {
    size: ["11", "11.25", "11.5", "12", "12.25"],
    logo_style: ["Embroidered", "Embroidered Flag", "Square Patch"],
    embroidered_flag: ["USA", "Korea", "Venezuela", "Dominican Republic", "Japan", "Australia", "Mexico", "Canada", "Italy", "Puerto Rico", "Netherlands"],
    logo_outline: ["Enable Logo Outline"],
    finger_option: ["None", "Hood", "Pad"],
    finger_hood_or_pad_placement: ["Index Finger", "Middle Finger"],
    inlay: ["Inlay"],
    lace_length: ["Normal", "Long"],
    wrist_linning: ["Traditional Fur", "Moisture Wickening Performance Wrist Pad"],
    dual_welting: ["Dual Welting"],
    web_style: ["I-Web", "I-Web (No Logo)",  "I-Web (Spiral Lace)", "Y-Web", "E-Web", "H-Web", "Laced H-Web", "T-Web", "Basket Web", "Cross Web", "Net Style Web" ,"1 Piece Web", "2 Piece Web"],
    glove_stiffness: ["Pro Stiff", "Standard"],
    throwing_hand: ["Left", "Right"],
  }
  
  export const tabs = ["Base", "Color", "Personalize"];