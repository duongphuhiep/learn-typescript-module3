define(["require", "exports", "./M2"], function (require, exports, M2) {
    ;
    var Cls1 = (function () {
        function Cls1() {
        }
        Cls1.prototype.f1 = function (name) {
            var c2 = new M2.Cls2();
            return "C1 ( " + c2.f2(name) + " )";
        };
        return Cls1;
    })();
    exports.Cls1 = Cls1;
    exports.Inst1 = new Cls1();
});
