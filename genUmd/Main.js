/* Main requires the external module M1 and M3 */
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "./M1", "./M2"], function (require, exports) {
    var M1 = require("./M1");
    var M2 = require("./M2");
    console.log(M1.Inst1.f1("foo"));
    console.log(M2.Inst2.f2("bar"));
});
