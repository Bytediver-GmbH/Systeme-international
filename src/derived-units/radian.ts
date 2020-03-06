import {DerivedUnit} from "./derived-unit";
import {Metre} from "../base-units/metre";

export class Radian extends DerivedUnit {
	public readonly symbol: string = "rad";
	public readonly quantity: string = "plane angle";

	constructor(s: Metre, r: Metre) {
		super(0);
		this.value = s.value / r.value;
	}
}