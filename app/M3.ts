/**
 * An external module
 */
export interface Itf3 {
	f3(name: string): string;
}

export class Cls3 implements Itf3 {
	f3(name: string): string {
		return "C3 ( "+name+" )";
	}
}

export var Inst3 = new Cls3();
