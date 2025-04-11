import {DerivedUnit} from "./derived-unit";
import {Kilogram} from "../base-units/kilogram";
import {Metre} from "../base-units/metre";
import {Second} from "../base-units/second";

export class Watt extends DerivedUnit {
	/**
	 * @description
	 * @type {string}
	 */
	public readonly symbol: string = "W";
	public readonly quantity: string = "radiant flux";

	constructor(value: number | Kilogram, metre?: Metre, second?: Second) {
		super(0);
		if (typeof value === "number") {
			this.value = value;
		} else if (metre instanceof Metre && second instanceof Second) {
			this.value = (value.value * Math.pow(metre.value, 2)) / Math.pow(second.value, 3);
		} else {
			throw new Error("Invalid arguments for Watt constructor");
		}
	}
}