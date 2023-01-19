// @import cssnano = cssnano();
// const cssnano = require("cssnano");
// const postcssPresetEnv = require("postcss-preset-env");
//vite and other bundlers use es6 modules insted of common modules 
import cssnano from "cssnano"
import postcssPresetEnv from "postcss-preset-env"

// module.exports
export default{
    plugins: [
        cssnano({
            preset: 'default',
        }),
        postcssPresetEnv({
            stage: 1,
        }),
    ],
};