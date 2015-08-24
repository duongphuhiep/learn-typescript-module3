(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "./M3"], function (require, exports) {
    /**
     * M2 requires the external module M3
     */
    var M3 = require("./M3");
    var Cls2 = (function () {
        function Cls2() {
        }
        Cls2.prototype.f2 = function (name) {
            var c3 = new M3.Cls3();
            return "C2 ( " + c3.f3(name) + " )";
        };
        return Cls2;
    })();
    exports.Cls2 = Cls2;
    exports.Inst2 = new Cls2();
});
