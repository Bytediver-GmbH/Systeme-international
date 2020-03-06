import {BaseUnit} from "./base-unit";

export class Second extends BaseUnit {
	public readonly unitSymbol: string = "s";
	public readonly dimensionSymbol: string = "T";
	public readonly quantityName: string = "time";
	public readonly definition: string = "The duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.";
}