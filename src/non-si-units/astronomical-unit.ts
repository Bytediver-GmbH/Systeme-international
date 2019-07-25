import {NonSiUnit} from "./non-si-unit";

export class AstronomicalUnit extends NonSiUnit {
	public readonly symbol: 'au' = 'au';
	public readonly quantity: 'length (SI unit multiple)' = 'length (SI unit multiple)';
}