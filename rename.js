import { readdirSync, rename, renameSync } from "fs";
const rm = () => {
  try {
    const files = readdirSync("./build/", { encoding: "utf-8" });

    files.forEach((file, index) => {
      if (file.startsWith(`.`)) return;

      renameSync(`./build/${file}`, `./build/${file.replace(/ /g, "")}`);
      console.log(`\n ${file.replace(/ /g, "")} File Renamed\n`);
    });
    console.log(readdirSync("./build/"));
  } catch (error) {
    console.error({ error });
  }
};

export default rm;
