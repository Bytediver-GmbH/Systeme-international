import {Metre} from "../base-units/metre";
import {Second} from "../base-units/second";

export class MetresPerSecond {
	constructor(metres: Metre)
	constructor(seconds: Second)
	constructor(metreOrSecond: Second | Metre) {
		// @todo: return something useful
	}
}