/* eslint-disable @typescript-eslint/no-var-requires */
const fse = require("fs-extra");
const path = require("path");

const root = process.cwd();
const srcRoot = path.join(root, "src");
const packageRoot = path.join(root, "packages");

const moveFiles = () => {
  fse.removeSync(path.join(packageRoot, "components"));
  fse.copySync(
    path.join(srcRoot, "components"),
    path.join(packageRoot, "components")
  );
};

const makeOutput = async () => {
  const files = await fse.readdir(path.join(packageRoot, "components"));
  const imports = files
    // filter the ui-xxx formart components
    .filter((fileName) => fileName.startsWith("ui-"))
    .map((fileName) => {
      return `"${fileName}": () => import("./components/${fileName}/index.vue")`;
    });
  fse.writeFileSync(
    `${packageRoot}/output.js`,
    `export const components = {\n\t${imports.join(",\n\t")}\n}`
  );
};
const buildPkg = () => {
  moveFiles();
  makeOutput();
};

module.exports = buildPkg;
