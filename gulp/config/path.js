// получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`
export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${buildFolder}/assets/css/`,
        images: `${buildFolder}/assets/images/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/assets/fonts/`,
        content: `${buildFolder}/assets/content/`
    },
    src: {
        js: `${srcFolder}/assets/js/script.js`,
        jsInjectWebP: `${srcFolder}/assets/js/modules/InjectWebP.js`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        css: `${srcFolder}/assets/css/**/*.css`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/images/**/*.svg`,
        icons: `${srcFolder}/assets/images/icons/**/*.svg`,
        html: `${srcFolder}/*.html`,
        fonts: `${srcFolder}/assets/fonts/**/*.*`,
        content: `${srcFolder}/assets/content/**/*.*`
    },
    watch: {
        js: `${srcFolder}/assets/js/**/*.js`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/assets/content/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}
