export class Product {
	#id;
	#name;
	#cost;
	constructor({ id, name, cost }) {
		this.#id = id;
		this.#name = name;
		this.#cost = cost;
	}

	get name() {
		return this.#name;
	}

	get cost() {
		return this.#cost;
	}

	get id() {
		return this.#id;
	}
}
