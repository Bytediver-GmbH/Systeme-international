import {DerivedUnit} from "./derived-unit";

export class Ohm extends DerivedUnit {
	public readonly symbol: string = "Ω";
	public readonly quantity: string = "resistance, impedance, reactance";
}