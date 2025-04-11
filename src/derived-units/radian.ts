import {DerivedUnit} from "./derived-unit";
import {Metre} from "../base-units/metre";

export class Radian extends DerivedUnit {
	public readonly symbol: string = "rad";
	public readonly quantity: string = "plane angle";

	constructor(value: number | Metre, radius?: Metre) {
		super(0);
		if (typeof value === "number") {
			this.value = value;
		} else if (radius instanceof Metre) {
			this.value = value.value / radius.value;
		} else {
			throw new Error("Invalid arguments for Radian constructor");
		}
	}
}