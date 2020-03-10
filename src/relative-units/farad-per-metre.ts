import {Farad} from "../derived-units/farad";
import {Metre} from "../base-units/metre";
import {UnitPerUnit} from "./unit-per-unit";

export class FaradPerMetre extends UnitPerUnit<Farad, Metre> {

	constructor(farad: Farad | number, metres?: Metre | number) {
		super(farad, metres);
	}

	public forMetres(metres: Metre | number): Farad {
		return new Farad(this.forB(metres));
	}

	public forFarads(farad: Farad | number): Metre {
		return new Metre(this.forA(farad));
	}
}