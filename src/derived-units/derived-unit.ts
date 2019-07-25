import {Unit} from "../unit";

export abstract class DerivedUnit extends Unit {
	public abstract readonly symbol: string;
	public abstract readonly quantity: string;
}