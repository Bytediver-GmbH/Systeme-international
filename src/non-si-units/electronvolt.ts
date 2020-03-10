import {NonSiUnit} from "./non-si-unit";
import {Joule} from "../derived-units/joule";

export class Electronvolt extends NonSiUnit {
	public readonly symbol: string = "eV";
	public readonly quantity: string = "energy";

	/**
	 * @description
	 * Applying the rules of the unit
	 * @return {number}
	 */
	get value(): number {
		return this._value * (new Joule(1.602176634e-19)).value * Math.pow(10, this.exponent);
	}
}