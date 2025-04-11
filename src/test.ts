// Test script for SI units
import {
  Ampere,
  Becquerel,
  BohrMagneton,
  Candela,
  Celsius,
  Coulomb,
  CubicMetre,
  Farad,
  Gray,
  Henry,
  Hertz,
  Joule,
  Katal,
  Kelvin,
  Kilogram,
  Lumen,
  Lux,
  Metre,
  Mole,
  Newton,
  Ohm,
  Pascal,
  Radian,
  Second,
  Siemens,
  Sievert,
  SquareMetre,
  Steradiant,
  Tesla,
  Volt,
  Watt,
  Weber,
  MetresPerSecond,
  JoulesPerSecond,
  JoulesPerTesla,
  FaradPerMetre
} from './main';

console.log('=== Testing SI Base Units ===');
const metre = new Metre(5);
console.log('Metre:', metre.value);

const second = new Second(2);
console.log('Second:', second.value);

const kilogram = new Kilogram(10);
console.log('Kilogram:', kilogram.value);

const ampere = new Ampere(1);
console.log('Ampere:', ampere.value);

const kelvin = new Kelvin(273.15);
console.log('Kelvin:', kelvin.value);

const mole = new Mole(1);
console.log('Mole:', mole.value);

const candela = new Candela(1);
console.log('Candela:', candela.value);

console.log('\n=== Testing SI Derived Units ===');
const newton = new Newton(20);
console.log('Newton:', newton.value);

const pascal = new Pascal(101325); // standard atmospheric pressure
console.log('Pascal:', pascal.value);

const joule = new Joule(100);
console.log('Joule:', joule.value);

const watt = new Watt(60);
console.log('Watt:', watt.value);

// Also test the full constructor
const kg = new Kilogram(2);
const m = new Metre(3);
const s = new Second(1);
const wattFromUnits = new Watt(kg, m, s);
console.log('Watt from kg·m²/s³:', wattFromUnits.value);

const coulomb = new Coulomb(1);
console.log('Coulomb:', coulomb.value);

const volt = new Volt(220);
console.log('Volt:', volt.value);

const farad = new Farad(0.001);
console.log('Farad:', farad.value);

const ohm = new Ohm(1000);
console.log('Ohm:', ohm.value);

const siemens = new Siemens(0.001);
console.log('Siemens:', siemens.value);

const weber = new Weber(1);
console.log('Weber:', weber.value);

const tesla = new Tesla(1);
console.log('Tesla:', tesla.value);

const henry = new Henry(1);
console.log('Henry:', henry.value);

const celsius = new Celsius(20);
console.log('Celsius:', celsius.value);

const lumen = new Lumen(800);
console.log('Lumen:', lumen.value);

const lux = new Lux(500);
console.log('Lux:', lux.value);

const becquerel = new Becquerel(1000);
console.log('Becquerel:', becquerel.value);

const gray = new Gray(1);
console.log('Gray:', gray.value);

const sievert = new Sievert(0.001);
console.log('Sievert:', sievert.value);

const katal = new Katal(1);
console.log('Katal:', katal.value);

const hertz = new Hertz(50);
console.log('Hertz:', hertz.value);

const radian = new Radian(Math.PI);
console.log('Radian:', radian.value);

const circleArc = new Metre(10); // Arc length
const circleRadius = new Metre(5); // Radius
const radianFromArc = new Radian(circleArc, circleRadius);
console.log('Radian from arc/radius:', radianFromArc.value);

const steradiant = new Steradiant(1);
console.log('Steradiant:', steradiant.value);

const calotteSurfaceArea = new Metre(12); // Surface area in m²
const sphereRadius = new Metre(2); // Radius in m
const steradiantFromSurface = new Steradiant(calotteSurfaceArea, sphereRadius);
console.log('Steradiant from area/radius:', steradiantFromSurface.value);

const squareMetre = new SquareMetre(25);
console.log('Square Metre:', squareMetre.value);

const cubicMetre = new CubicMetre(8);
console.log('Cubic Metre:', cubicMetre.value);

const bohrMagneton = new BohrMagneton(1);
console.log('Bohr Magneton:', bohrMagneton.value);

console.log('\n=== Testing Relative Units ===');

// Test MetresPerSecond
const speed = new MetresPerSecond(5); // 5 m/s
console.log('Speed (m/s):', speed);

const distanceTraveled = speed.forSeconds(10); // How far in 10 seconds
console.log('Distance traveled in 10 seconds:', distanceTraveled.value, 'metres');

const timeRequired = speed.forMetres(100); // How long to travel 100 metres
console.log('Time required for 100 metres:', timeRequired.value, 'seconds');

// Test JoulesPerSecond
const power = new JoulesPerSecond(100); // 100 J/s (100 W)
console.log('Power (J/s):', power);

const energyUsed = power.forSeconds(60); // Energy used in 60 seconds
console.log('Energy used in 60 seconds:', energyUsed.value, 'joules');

const timeToUseEnergy = power.forJoules(1000); // Time to use 1000 joules
console.log('Time to use 1000 joules:', timeToUseEnergy.value, 'seconds');

// Test JoulesPerTesla
const magneticMoment = new JoulesPerTesla(2); // 2 J/T
console.log('Magnetic Moment (J/T):', magneticMoment);

const energyInField = magneticMoment.forTesla(0.5); // Energy in 0.5 T field
console.log('Energy in 0.5 Tesla field:', energyInField.value, 'joules');

const fieldForEnergy = magneticMoment.forJoules(4); // Field needed for 4 joules
console.log('Field needed for 4 joules:', fieldForEnergy.value, 'tesla');

// Test FaradPerMetre
const permittivity = new FaradPerMetre(8.85e-12); // Vacuum permittivity
console.log('Permittivity (F/m):', permittivity);

const capacitanceForDistance = permittivity.forMetres(1); // Capacitance per metre
console.log('Capacitance for 1 metre:', capacitanceForDistance.value, 'farads');

const distanceForCapacitance = permittivity.forFarads(1e-9); // Distance for 1 nF
console.log('Distance for 1 nanofarad:', distanceForCapacitance.value, 'metres');

console.log('\n=== All tests completed ===');