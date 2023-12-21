/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-check

/* eslint-disable no-console */
/**
 * How to implement Abstract Factory?
 *
 * 1. Declare base products classes/interfaces for each product
 *  in the catalog.
 *
 * Base products:
 *  - MastodonCar
 *  - RhinoCar
 *
 * 2. Implement concrete products classes that inherits/implements
 *  base products classes/interfaces, the number of concrete prodcuts
 *  will depend on the number of families.
 *
 * Concrete products:
 *  - MastodonSedanCar
 *  - MastodonHatchbackCar
 *  - RhinoSedanCar
 *  - RhinoHatchbackCar
 *
 * 3. Declare abstract factory class/interface that declare creation
 *  methods for each base product. The return value could be the base
 *  products types or concrete products types.
 *
 * Abstract Factory:
 *   - CarFactory
 *      createMastodonCar(): MastodonCar
 *      createRhinoCar(): RhinoCar
 *
 * 4. Create concrete factories that implements/inherits from the
 *  abstract factory behaviour and implements all the products creation
 *  methods. The number of concrete factories will depend of the number
 *  of product families.
 *
 * Concrete Factories:
 *  - SedanCarFactory
 *  - HatchbackCarFactory
 *
 */

// STEP 1
class MastodonCar {
	useGPS() {
		throw new Error('Method not implemented!');
	}
}

class RhinoCar {
	useGPS() {
		throw new Error('Method not implemented!');
	}
}

// STEP 2
class MastodonSedanCar extends MastodonCar {
	/**
	 * @override
	 */
	useGPS() {
		console.log('[SEDAN] Mastodon GPS');
	}
}

class MastodonHatchbackCar extends MastodonCar {
	/**
	 * @override
	 */
	useGPS() {
		console.log('[HATCHBACK] Mastodon GPS');
	}
}

class RhinoSedanCar extends RhinoCar {
	/**
	 * @override
	 */
	useGPS() {
		console.log('[SEDAN] Rhino GPS');
	}
}

class RhinoHatchbackCar extends RhinoCar {
	/**
	 * @override
	 */
	useGPS() {
		console.log('[HATCHBACK] Rhino GPS');
	}
}

// STEP 3
/** @interface */
class CarAbstractFactory {
	createMastodon() {
		throw new Error('Method not implemented!');
	}

	createRhino() {
		throw new Error('Method not implemented!');
	}
}

// STEP 4
class SedanCarFactory {
	/**
	 * @returns {MastodonSedanCar} MastodonSedanCar
	 */
	createMastodon() {
		return new MastodonSedanCar();
	}

	/**
	 * @returns {RhinoSedanCar} RhinoSedanCar
	 */
	createRhino() {
		return new RhinoSedanCar();
	}
}

class HatchbackCarFactory {
	/**
	 * @returns {MastodonHatchbackCar} MastodonHatchbackCar
	 */
	createMastodon() {
		return new MastodonHatchbackCar();
	}

	/**
	 * @returns {RhinoHatchbackCar} RhinoHatchbackCar
	 */
	createRhino() {
		return new RhinoHatchbackCar();
	}
}

/**
 * Main function
 * @param {CarAbstractFactory} factory Car factory
 */
function appAbstractFactory(factory) {
	console.log('--- [JS] Calling appAbstractFactory ---\n');

	if (!factory) {
		console.log('--- No factory provided ---');

		return;
	}

	const mastodon = factory.createMastodon();
	const rhino = factory.createRhino();

	// @ts-ignore
	mastodon.useGPS();
	// @ts-ignore
	rhino.useGPS();
}

/**
 * You could change the Factory as you wish since
 * all of them implement the same behavior.
 */
appAbstractFactory(new HatchbackCarFactory());
appAbstractFactory(new SedanCarFactory());

/**
 *
 * @param {string} name type of factory family to create
 * @returns {SedanCarFactory | HatchbackCarFactory} A car factory instance
 */
function createFactory(name) {
	const factories = {
		sedan: SedanCarFactory,
		hatchback: HatchbackCarFactory,
	};

	const Factory = factories[name];

	return new Factory();
}

/**
 * Instead of using new() operator, we abstract the
 * factories creation and we just indicate the type
 * as a parameter
 */
appAbstractFactory(createFactory('hatchback'));
appAbstractFactory(createFactory('sedan'));
