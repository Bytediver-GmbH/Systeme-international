import {UnitPerUnit} from "./unit-per-unit";
import {Farad} from "../derived-units/farad";
import {Metre} from "../base-units/metre";

export class FaradPerMetre extends UnitPerUnit<Farad, Metre> {

	constructor(farad: number, metres?: number)
	constructor(farad: number, metres?: Metre)
	constructor(farad: Farad, metres?: number)
	constructor(farad: Farad, metres?: Metre)
	constructor(farad: Farad | number, metres?: Metre | number) {
		super(farad, metres);
	}

	public forMetres(metres: number): Farad
	public forMetres(metres: Metre): Farad
	public forMetres(metres: Metre | number): Farad {
		return new Farad(this.forB(metres));
	}

	public forFarads(farad: number): Metre
	public forFarads(farad: Farad): Metre
	public forFarads(farad: Farad | number): Metre {
		return new Metre(this.forA(farad));
	}
}