/* Main requires the external module M1 and M3 */

import M1 = require("./M1");
import M2 = require("./M2");

console.log(M1.Inst1.f1("foo"));
console.log(M2.Inst2.f2("bar"));


