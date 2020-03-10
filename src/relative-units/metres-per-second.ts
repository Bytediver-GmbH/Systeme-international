import {Metre} from "../base-units/metre";
import {Second} from "../base-units/second";
import {UnitPerUnit} from "./unit-per-unit";

export class MetresPerSecond extends UnitPerUnit<Metre, Second> {

	constructor(metres: Metre | number, seconds?: Second | number) {
		super(metres, seconds);
	}

	public forSeconds(seconds: Second | number): Metre {
		return new Metre(this.forB(seconds));
	}

	public forMetres(metres: Metre | number): Second {
		return new Second(this.forA(metres));
	}
}