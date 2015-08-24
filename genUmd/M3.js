(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    var Cls3 = (function () {
        function Cls3() {
        }
        Cls3.prototype.f3 = function (name) {
            return "C3 ( " + name + " )";
        };
        return Cls3;
    })();
    exports.Cls3 = Cls3;
    exports.Inst3 = new Cls3();
});
