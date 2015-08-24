define(["require", "exports", "./M3"], function (require, exports, M3) {
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
