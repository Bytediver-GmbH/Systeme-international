import {DerivedUnit} from "./derived-unit";

export class Tesla extends DerivedUnit {
	public readonly symbol: string = "T";
	public readonly quantity: string = "magnetic flux density";
}