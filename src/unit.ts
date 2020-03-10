export class Unit {
	constructor(protected _value: number, protected exponent: number = 0) {
	}

	public get value(): number {
		return this._value;
	}

	public set value(value: number) {
		this._value = value;
	}
}