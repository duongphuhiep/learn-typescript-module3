System.register([], function(exports_1) {
    var Cls3, Inst3;
    return {
        setters:[],
        execute: function() {
            Cls3 = (function () {
                function Cls3() {
                }
                Cls3.prototype.f3 = function (name) {
                    return "C3 ( " + name + " )";
                };
                return Cls3;
            })();
            exports_1("Cls3", Cls3);
            exports_1("Inst3", Inst3 = new Cls3());
        }
    }
});
