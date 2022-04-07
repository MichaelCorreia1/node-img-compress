import { compress } from "compress-images/promise.js";
import rm from "./rename.js";
const INPUT_path_to_your_images = "assets/*.{jpg,JPG,jpeg,JPEG,png}";
const OUTPUT_path = "build/";

const processImages = async (onProgress) => {
  const [node, project, path] = process.argv;
  console.log();
  const result = await compress({
    source: INPUT_path_to_your_images,
    destination: OUTPUT_path,
    onProgress,
    enginesSetup: {
      jpg: { engine: "mozjpeg", command: ["-quality", "60"] },
      png: { engine: "pngquant", command: ["--quality=20-50", "-o"] },
    },
  });

  rm();
};

processImages((error, statistic, completed) => {
  if (error) {
    console.log("Error happen while processing file");
    console.log(error);
    return;
  }

  console.log("Sucefully processed file");

  console.log(statistic);
});
