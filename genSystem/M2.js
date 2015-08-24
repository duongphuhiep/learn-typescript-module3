System.register(["./M3"], function(exports_1) {
    var M3;
    var Cls2, Inst2;
    return {
        setters:[
            function (_M3) {
                M3 = _M3;
            }],
        execute: function() {
            Cls2 = (function () {
                function Cls2() {
                }
                Cls2.prototype.f2 = function (name) {
                    var c3 = new M3.Cls3();
                    return "C2 ( " + c3.f3(name) + " )";
                };
                return Cls2;
            })();
            exports_1("Cls2", Cls2);
            exports_1("Inst2", Inst2 = new Cls2());
        }
    }
});
