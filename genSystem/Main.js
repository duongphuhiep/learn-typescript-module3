/* Main requires the external module M1 and M3 */
System.register(["./M1", "./M2"], function(exports_1) {
    var M1, M2;
    return {
        setters:[
            function (_M1) {
                M1 = _M1;
            },
            function (_M2) {
                M2 = _M2;
            }],
        execute: function() {
            console.log(M1.Inst1.f1("foo"));
            console.log(M2.Inst2.f2("bar"));
        }
    }
});
