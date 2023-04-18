"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

// see src/blendMode.js for available blend modes
// documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

/*************************************************
 ************* Generator Options *****************
 ************************************************/

const description =
  "This is the description of your NFT project. Repalce this with an initial description for your project, but this part will be replaced by the Marsyas story generator";
const baseUri = "ipfs://NewUriToReplace";

// false = the generator outputs png's
//true = generator outputs JPEGs
const outputJPEG = false; 

/**
 * Set your tokenID index start number.
 * ⚠️ Be sure it matches your smart contract!
 * Pls remember ERC-721 contracts start with tokenID 0 :)
*/ 
const startIndex = 0;


//for best results...
//make sure your layers are the same width and height as your format output 
const format = {
  width: 512,
  height: 512,
  // set to false when up-scaling pixel art.
  smoothing: true, 
};

//generates random color background for your NFT
//with an opacity control
const background = {
  generate: false,
  brightness: "80%",
};


//  This is how I would lay out the layers to properly utilize storytelling and proper formatting
//
//
// const layerConfigurations = [
//   {
//     growEditionSizeTo: 1500,
//     namePrefix: "Divine Nymph",
//     layersOrder: [
//       { name: "A-Background", trait: "Background"},
//       { name: "A-Hair_Back", trait: "Hair Back"},
//       { name: "A-Body", trait: "Skin"},
//       { name: "A-Body_type", trait: "Body Type"},
//       { name: "A-Skin_Texture", trait: "Skin Texture" },
//       { name: "A-Tattoo", trait: "Tattoo"  },
//       { name: "A-Lips" , trait: "Lips"},
//       { name: "A-Makeup", opacity: 0.8, trait: "Makeup" },
//       { name: "A-Eyes", trait: "Eyes"},
//       { name: "A-Eyebrows", trait: "Eyebrows" },
//       { name: "A-Clothing_Under", trait: "Clothing Under"},
//       { name: "A-Body_Jewels", trait: "Body Adornment"},
//       { name: "A-Clothing_Over", trait: "Clothing Over" },
//       { name: "A-Hair_Facial", opacity: 0.95, trait: "Facial Hair" },
//       { name: "A-Hair_Front", trait: "Hair"},
//       { name: "A-Nose", trait: "Nose"},
//       { name: "A-Ears", trait: "Ears"},
//       { name: "A-Hair_Special", trait: "Hair Special"},
//       { name: "A-Piercing", trait: "Piercing" },
//       { name: "A-Accessories", trait: "Adornment" },
//       { name: "A-Over_Face", trait: "Over Face" },
//       { name: "A-Hair_Strand", trait: "Hair Strand"},
//       { name: "A-Foreground", trait: "Foreground" },
//       { name: "A-Type", trait: "Family", bypassDNA: true },
//       { name: "A-First", trait: "First Name", bypassDNA: true },
//       { name: "A-Middle", trait: "Middle Name", bypassDNA: true },
//       { name: "A-Last", trait: "Surname", bypassDNA: true  },
//       { name: "A-Lucky_Number", trait: "Lucky Number", bypassDNA: true  },
//       { name: "A-Feels_Level", trait: "Feels Level", bypassDNA: true  },
//       { name: "A-Power", trait: "Power", bypassDNA: true  },
//       { name: "A-Essence", trait: "Essence", bypassDNA: true  },
//       { name: "A-Life_force", trait: "Life Force", bypassDNA: true  },
//       { name: "A-Zodiac_Birth", trait: "Zodiac Year", bypassDNA: true  },
//       { name: "A-Zodiac_Sun", trait: "Zodiac Month", bypassDNA: true  },
//       { name: "A-Zodiac_Moon", trait: "Planet", bypassDNA: true  },
//       { name: "A-Experience", trait: "Characteristics", bypassDNA: true  },
//     ],
//   },
//
//
//
// If you want to utilize  the resetNameIndex feature of the NFT Chef generator, format like this:
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },


const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    namePrefix: "Series 2", // Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "Background" },
      {
        name: "Back Accessory",
        // options: {
        //   bypassDNA: true,
        // },
      },
      { name: "Head" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Hair" },
      { name: "Accessory" },
      { name: "Shirt Accessories" },
    ],
  },
  
  
];

/**
 * Set to true for when using multiple layersOrder configuration
 * and you would like to shuffle all the artwork together
 */
const shuffleLayerConfigurations = false;

const debugLogs = true;

/*********************
 * Advanced Generator Options
 ***********************/

// if you use an empty/transparent file, set the name here.
// it is possible to set more than one blank file name
// IE if you want none of the "Skunk_tattoo" traits to show up, put it here as an emptyLayerName and it won't show up in the metadata
// like const = emptyLayerName = ["NONE", "Skunk_tattoo"]
const emptyLayerName = "NONE";

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 * 
 * This is a very powerful tool you should be using.
 */
const incompatible = {
  //   Red: ["Dark Long"],
  //   // directory incompatible with directory example
  //   White: ["rare-Pink-Pompadour"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
};

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 * 
 * * This is another very powerful tool you should be using.
 * 
 */
const traitValueOverrides = {
  Helmet: "Space Helmet",
  "gold chain": "GOLDEN NECKLACE",
};

const extraMetadata = {};


// Outputs an Keccack256 hash for the image. Required for provenance hash
const hashImages = true;

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_type
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  hashImages,
  incompatible,
  layerConfigurations,
  layersDir,
  outputJPEG,
  preview,
  preview_gif,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
