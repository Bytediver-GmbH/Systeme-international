import {DerivedUnit} from "./derived-unit";
import {Metre} from "../base-units/metre";

export class Steradiant extends DerivedUnit {
	public readonly symbol: 'sr' = 'sr';
	public readonly quantity: 'solid angle' = 'solid angle';

	constructor(calotteArea: Metre, sphereRadius: Metre) {
		super(0);
		this.value = calotteArea.value / Math.pow(sphereRadius.value, 2);
	}
}