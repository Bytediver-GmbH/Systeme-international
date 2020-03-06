import {FaradPerMetre} from "./relative-units/farad-per-metre";
import {JoulesPerSecond} from "./relative-units/joules-per-second";
import {Metre} from "./base-units/metre";
import {MetresPerSecond} from "./relative-units/metres-per-second";

export const BOHR_RADIUS: Metre = new Metre(5.29e-11);
export const FINE_STRUCTURE_CONSTANT = "4π × 1.00000000082(20)×10^−7 H⋅m^−1";
export const AVOGADRO_CONSTANT = "6,022 140 76 · 1023 mol−1";
export const GRAVIATION = "6.674×10^−11 m^3⋅kg^−1⋅s^−2";
export const PLANCK_CONSTANT = new JoulesPerSecond(6.62607015e-34);
export const SPEED_OF_LIGHT = new MetresPerSecond(22979248);
export const VACUUM_PERMITTIVITY = new FaradPerMetre(8.854187812813e-12, 1e-1);