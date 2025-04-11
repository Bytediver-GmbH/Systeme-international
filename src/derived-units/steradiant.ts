import {DerivedUnit} from "./derived-unit";
import {Metre} from "../base-units/metre";

export class Steradiant extends DerivedUnit {
	public readonly symbol: string = "sr";
	public readonly quantity: string = "solid angle";

	constructor(value: number | Metre, sphereRadius?: Metre) {
		super(0);
		if (typeof value === "number") {
			this.value = value;
		} else if (sphereRadius instanceof Metre) {
			// Calculate from surface area (calotte) and sphere radius
			this.value = value.value / Math.pow(sphereRadius.value, 2);
		} else {
			throw new Error("Invalid arguments for Steradiant constructor");
		}
	}
}