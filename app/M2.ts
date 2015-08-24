/**
 * M2 requires the external module M3
 */
import M3 = require("./M3");

export interface Itf2 {
	f2(name: string): string;
}

export class Cls2 implements Itf2 {
	f2(name: string): string {
		var c3 = new M3.Cls3();
		return "C2 ( " + c3.f3(name) + " )";
	}
}

export var Inst2 = new Cls2();
