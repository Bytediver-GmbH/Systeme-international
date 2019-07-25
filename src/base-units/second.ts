import {BaseUnit} from "./base-unit";

export class Second extends BaseUnit {
	public readonly unitSymbol: 's' = 's';
	public readonly dimensionSymbol: 'T' = 'T';
	public readonly quantityName: 'time' = 'time';
	public readonly definition: string = 'The duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.';
}