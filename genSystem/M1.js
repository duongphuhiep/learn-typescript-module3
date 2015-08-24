System.register(["./M2"], function(exports_1) {
    var M2;
    var Cls1, Inst1;
    return {
        setters:[
            function (_M2) {
                M2 = _M2;
            }],
        execute: function() {
            ;
            Cls1 = (function () {
                function Cls1() {
                }
                Cls1.prototype.f1 = function (name) {
                    var c2 = new M2.Cls2();
                    return "C1 ( " + c2.f2(name) + " )";
                };
                return Cls1;
            })();
            exports_1("Cls1", Cls1);
            exports_1("Inst1", Inst1 = new Cls1());
        }
    }
});
