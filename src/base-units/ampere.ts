import {BaseUnit} from "./base-unit";

export class Ampere extends BaseUnit {
	public readonly unitSymbol: string = "A";
	public readonly dimensionSymbol: string = "I";
	public readonly quantityName: string = "electric current";
	public readonly definition: string = "The flow of 1/1.602176634e-19 times the elementary charge e per second.";
}