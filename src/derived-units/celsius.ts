import {DerivedUnit} from "./derived-unit";

export class Celsius extends DerivedUnit {
	public readonly symbol: string = "°C";
	public readonly quantity: string = "temperature relative to 273.15 K";
}