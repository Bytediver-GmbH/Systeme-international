import {DerivedUnit} from "./derived-unit";

export class Celsius extends DerivedUnit {
	public readonly symbol: '°C' = '°C';
	public readonly quantity: 'temperature relative to 273.15 K' = 'temperature relative to 273.15 K';
}