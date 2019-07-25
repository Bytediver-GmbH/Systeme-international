import {Second} from "./base-units/second";
import {Steradiant} from "./derived-units/steradiant";
import {Metre} from "./base-units/metre";

const sec = new Second(3);
const st = new Steradiant(new Metre(3.996), new Metre(3));

console.log(st);