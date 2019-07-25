import {BaseUnit} from "./base-unit";

export class Kelvin extends BaseUnit {
	public readonly unitSymbol: 'K' = 'K';
	public readonly dimensionSymbol: 'Θ' = 'Θ';
	public readonly quantityName: 'thermodynamic temperature' = 'thermodynamic temperature';
	public readonly definition: string = 'The kelvin is defined by setting the fixed numerical value of the Boltzmann constant k to 1.380649e−23 J⋅K−1, (J = kg⋅m2⋅s−2), given the definition of the kilogram, the metre, and the second.';
}