interface ProductAttributes {
	id: number;
	name: string;
	cost: number;
}

export class Product {
	#id: number;
	#name: string;
	#cost: number;

	public constructor({ id, name, cost }: ProductAttributes) {
		this.#id = id;
		this.#name = name;
		this.#cost = cost;
	}

	public get name(): string {
		return this.#name;
	}

	public get cost(): number {
		return this.#cost;
	}

	public get id(): number {
		return this.#id;
	}
}
