/* Main requires the external module M1 and M3 */
define(["require", "exports", "./M1", "./M2"], function (require, exports, M1, M2) {
    console.log(M1.Inst1.f1("foo"));
    console.log(M2.Inst2.f2("bar"));
});
