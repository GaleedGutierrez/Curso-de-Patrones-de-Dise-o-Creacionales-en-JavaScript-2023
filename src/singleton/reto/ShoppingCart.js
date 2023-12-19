/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
import { Product } from './Product.ts';

export class ShoppingCart {
	#products = [];
	static #instance;
	constructor() {}
	getProducts() {
		return this.#products;
	}

	add(product) {
		this.#products.push(product);
	}

	deleteById(id) {
		const INDEX_DELETED = this.#products.findIndex(
			(product) => product.id === id,
		);

		if (~INDEX_DELETED /* INDEX_DELETED !== -1 */) {
			this.#products.splice(INDEX_DELETED, 1);
		}
	}

	static getInstance() {
		if (!this.#instance) {
			this.#instance = new ShoppingCart();
		}

		return this.#instance;
	}
}

(() => {
	const cart = ShoppingCart.getInstance();
	const cart2 = ShoppingCart.getInstance();
	const prod1 = new Product({ id: 1, name: 'mate', cost: 3000 });
	const prod2 = new Product({ id: 2, name: 'bombilla', cost: 2900 });
	const prod3 = new Product({ id: 3, name: 'matera', cost: 2400 });

	// agregamos products al cart
	cart.add(prod1);
	cart.add(prod2);
	cart.add(prod3);
	// console.log(cart.getProducts());
	// borramos por id
	cart.deleteById(2);
	// console.log(cart.getProducts()[1].name);
	// verificamos que ambos cart tienen la misma instancia, por tanto ambos tienen los mismos products
	console.log(cart === cart2);
	console.log(cart.getProducts()[1]);
	console.log(cart2.getProducts()[1]);
})();
