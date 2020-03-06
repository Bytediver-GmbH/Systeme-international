import {DerivedUnit} from "./derived-unit";

export class Volt extends DerivedUnit {
	public readonly symbol: string = "V";
	public readonly quantity: string = "voltage (electrical potential), emf";
}