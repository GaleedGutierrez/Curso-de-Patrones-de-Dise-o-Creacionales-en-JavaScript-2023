/* eslint-disable no-use-before-define */
import { Product } from './Product.ts';

export class ShoppingCart {
	#products: Product[] = [];
	static #instance: ShoppingCart;

	private constructor() {}

	public getProducts(): Product[] {
		return this.#products;
	}

	public add(product: Product): void {
		this.#products.push(product);
	}

	public deleteById(id: number): void {
		const INDEX_DELETED = this.#products.findIndex(
			(product) => product.id === id,
		);

		if (~INDEX_DELETED /* INDEX_DELETED !== -1 */) {
			this.#products.splice(INDEX_DELETED, 1);
		}
	}

	public static getInstance(): ShoppingCart {
		if (!this.#instance) {
			this.#instance = new ShoppingCart();
		}

		return this.#instance;
	}
}
