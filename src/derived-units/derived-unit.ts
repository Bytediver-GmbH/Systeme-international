export abstract class DerivedUnit {
	public abstract readonly symbol: string;
	public abstract readonly quantity: string;


	constructor(private _value: number) {
	}


	get value(): number {
		return this._value;
	}

	set value(value: number) {
		this._value = value;
	}
}