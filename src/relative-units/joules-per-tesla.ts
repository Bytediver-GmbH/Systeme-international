import {UnitPerUnit} from "./unit-per-unit";
import {Joule} from "../derived-units/joule";
import {Tesla} from "../derived-units/tesla";

export class JoulesPerTesla extends UnitPerUnit<Joule, Tesla> {

	constructor(metres: Joule | number, tesla?: Tesla | number) {
		super(metres, tesla);
	}

	public forSeconds(tesla: Tesla | number): Joule {
		return new Joule(this.forB(tesla));
	}

	public forJoules(joules: Joule | number): Tesla {
		return new Tesla(this.forA(joules));
	}
}