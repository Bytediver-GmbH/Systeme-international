import {Unit} from "../unit";

export abstract class BaseUnit extends Unit {
	public abstract readonly unitSymbol: string;
	public abstract readonly dimensionSymbol: string;
	public abstract readonly quantityName: string;
	public abstract readonly definition: string;
}