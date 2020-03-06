import {BaseUnit} from "./base-unit";

export class Metre extends BaseUnit {
	public readonly unitSymbol: string = "m";
	public readonly dimensionSymbol: string = "L";
	public readonly quantityName: string = "length";
	public readonly definition: string = "The distance travelled by light in vacuum in 1/299792458 second.";
}