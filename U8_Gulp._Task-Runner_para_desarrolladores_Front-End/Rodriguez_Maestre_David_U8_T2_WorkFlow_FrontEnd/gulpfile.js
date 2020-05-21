const { series, parallel, src, dest } = require("gulp");
const compilar = require("gulp-dart-sass");
const sassdoc = require("sassdoc");

function copiar_html() {
  return src("cv.html").pipe(dest("dist/"));
}

function copiar_img() {
  return src("img/*.png").pipe(dest("dist/img/"));
}

function copiar_css() {
  return src("scss/cv.css").pipe(dest("dist/"));
}

function generar_css() {
  return src("scss/cv.scss").pipe(compilar()).pipe(dest("scss/"));
}

function generar_docs() {
  var doc_options = {
  dest : "./dist/docs",
  verbose: true
  }
  return src("./scss/*.scss")
  .pipe(sassdoc(doc_options));
}

exports.default = series(parallel(copiar_img, generar_css, generar_docs),parallel(copiar_css, copiar_html));
exports.copiar_img = copiar_img; //funciona
exports.generar_css = generar_css; //funciona
exports.generar_docs = generar_docs; //funciona
exports.copiar_css = copiar_css; //funciona
exports.copiar_html = copiar_html; //funciona