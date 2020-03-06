import {NonSiUnit} from "./non-si-unit";

export class VoltAmpereReactive extends NonSiUnit {
	public readonly symbol: string = "var";
	public readonly quantity: string = "reactive power";
}