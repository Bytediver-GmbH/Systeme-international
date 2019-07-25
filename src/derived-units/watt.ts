import {DerivedUnit} from "./derived-unit";
import {Kilogram} from "../base-units/kilogram";
import {Metre} from "../base-units/metre";
import {Second} from "../base-units/second";

export class Watt extends DerivedUnit {
	/**
	 * @description
	 * @type {string}
	 */
	public readonly symbol: 'W' = 'W';
	public readonly quantity: 'radiant flux' = 'radiant flux';

	constructor(kilogram: Kilogram, metre: Metre, second: Second) {
		super(0);
		this.value = (kilogram.value * Math.pow(metre.value, 2)) / Math.pow(second.value, 3);
	}
}