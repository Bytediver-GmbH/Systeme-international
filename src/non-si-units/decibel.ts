import {NonSiUnit} from "./non-si-unit";

export class Decibel extends NonSiUnit {
	public readonly symbol: string = "B";
	public readonly quantity: string = "level of a field quantity";
}