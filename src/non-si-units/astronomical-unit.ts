import {NonSiUnit} from "./non-si-unit";

export class AstronomicalUnit extends NonSiUnit {
	public readonly symbol: string = "au";
	public readonly quantity: string = "length (SI unit multiple)";
}