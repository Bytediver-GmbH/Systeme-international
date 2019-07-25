export abstract class BaseUnit {
	public abstract readonly unitSymbol: string;
	public abstract readonly dimensionSymbol: string;
	public abstract readonly quantityName: string;
	public abstract readonly definition: string;

	constructor(private _value: number) {
	}


	get value(): number {
		return this._value;
	}
}