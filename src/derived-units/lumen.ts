import {Candela} from "../base-units/candela";
import {Steradiant} from "./steradiant";
import {Metre} from "../base-units/metre";
import {DerivedUnit} from "./derived-unit";

export class Lumen extends DerivedUnit {
	public readonly symbol: string = "lm";
	public readonly quantity: string = "luminous flux";

	constructor(value: number)
	constructor(candela: Candela, steradiant: Steradiant)
	constructor(candela: Candela, calotteArea: Metre, sphereRadius: Metre)
	constructor(candelaOrValue: Candela | number, calotteAreaOrSteradiant?: Metre | Steradiant, sphereRadius?: Metre) {
		super(typeof candelaOrValue === "number" ? candelaOrValue : 0);
		if (typeof candelaOrValue !== "number") {
			if (calotteAreaOrSteradiant instanceof Steradiant) {
				this.value = candelaOrValue.value * calotteAreaOrSteradiant.value
			} else if (calotteAreaOrSteradiant instanceof Metre && sphereRadius instanceof Metre) {
				this.value = candelaOrValue.value * (new Steradiant(calotteAreaOrSteradiant, sphereRadius)).value;
			}
		}
	}
}