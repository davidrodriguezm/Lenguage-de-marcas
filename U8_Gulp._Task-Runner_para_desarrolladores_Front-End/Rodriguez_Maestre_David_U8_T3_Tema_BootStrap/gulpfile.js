const { series, parallel, src, dest, watch } = require("gulp");
const compilar = require("gulp-dart-sass");

function copiar_js() {
    return src("bootstrap-master/dist/js/**").pipe(dest("js/"));
}

function compilar_scss() {
    return src("bootstrap-master/scss/bootstrap.scss").pipe(compilar()).pipe(dest("css/"));
}

exports.copiar_js = copiar_js;
exports.compilar_scss = compilar_scss;
exports.default = function() {
    watch("bootstrap-master/scss/*.scss", compilar_scss);
  };