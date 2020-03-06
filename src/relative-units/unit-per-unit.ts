import {Unit} from "../unit";

/**
 * @description
 * This class represents a value that can only be expressed by two related values.
 * Like metres per second (e.g. 5ms)
 */
export abstract class UnitPerUnit<T extends Unit, K extends Unit> {
	/**
	 * @description
	 * The base is being calculated when the class is instantiated.
	 * This unit is used to calculated related values.
	 * For instance if you want to know how much seconds passed if you walk 10 metres
	 * => 2 seconds for 5ms
	 * @type {number}
	 */
	protected base: number = 0;

	constructor(a: T | number, b?: K | number) {
		const per = typeof b === "undefined" ? 1 : b; // if b is not set, then use "1" instead
		this.base = UnitPerUnit.toNumber(a) / UnitPerUnit.toNumber(per);
	}

	protected forA(unitOrNumber: T | number): number {
		return this.base / UnitPerUnit.toNumber(unitOrNumber);
	}

	protected forB(unitOrNumber: K | number): number {
		return this.base * UnitPerUnit.toNumber(unitOrNumber);
	}

	/**
	 * @description
	 * Formats the passed value (which could be a number or a unit) into a number
	 * @param {Unit | number} unitOrNumber
	 * @return {number}
	 */
	private static toNumber(unitOrNumber: Unit | number): number {
		return unitOrNumber instanceof Unit ? unitOrNumber.value : unitOrNumber;
	}
}