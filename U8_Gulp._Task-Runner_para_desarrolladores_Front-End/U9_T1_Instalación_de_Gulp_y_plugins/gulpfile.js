const { series, parallel, src, dest } = require("gulp");

function inicio(cb) {
    console.log("Generando proyecto CV");
    cb();
}

function final(cb) {
    console.log("Proyecto CV generado");
    cb();
}

function mover_html() {
    return src("*.html").pipe(dest("dist/"));
};

function mover_css() {
    return src("*.css").pipe(dest("dist/"));
};

exports.inicio = inicio;
exports.final = final;
exports.default = parallel(mover_html, mover_css);