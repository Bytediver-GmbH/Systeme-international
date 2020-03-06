import {BaseUnit} from "./base-unit";

export class Candela extends BaseUnit {
	public readonly unitSymbol: string = "cd";
	public readonly dimensionSymbol: string = "J";
	public readonly quantityName: string = "luminous intensity";
	public readonly definition: string = "The luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 5.4e14 hertz and that has a radiant intensity in that direction of 1/683 watt per steradian.";
}