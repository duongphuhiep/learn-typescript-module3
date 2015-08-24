/**
 * M1 requires the external module M2
 */
import M2 = require("./M2");

export interface Itf1 {
	f1(name: string): string;
};	

export class Cls1 implements Itf1 {
	f1(name: string): string {
		var c2 = new M2.Cls2();
		return "C1 ( " + c2.f2(name) + " )";
	}
}

export var Inst1 = new Cls1();
