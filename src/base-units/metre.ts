import {BaseUnit} from "./base-unit";

export class Metre extends BaseUnit {
	public readonly unitSymbol: 'm' = 'm';
	public readonly dimensionSymbol: 'L' = 'L';
	public readonly quantityName: 'length' = 'length';
	public readonly definition: string = 'The distance travelled by light in vacuum in 1/299792458 second.';
}