module.exports = function (Folder, args) {
    const jshint = Folder.plugins.jshint;
    jshint.options.esversion = 6;
    jshint.globals.push("m");
}
