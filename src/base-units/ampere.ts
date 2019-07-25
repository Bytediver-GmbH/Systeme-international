import {BaseUnit} from "./base-unit";

export class Ampere extends BaseUnit {
	public readonly unitSymbol: 'A' = 'A';
	public readonly dimensionSymbol: 'I' = 'I';
	public readonly quantityName: 'electric current' = 'electric current';
	public readonly definition: string = 'The flow of 1/1.602176634e-19 times the elementary charge e per second.';
}