import { defineStore } from "pinia";

interface Product {
	id: number;
	title: string;
	price: number;
	img: string;
	description: string;
}

export const useCartStore = defineStore("cart", {
	state: () => ({
		cart: [] as Product[],
	}),
	actions: {
		async addToCart(product: Product) {
			this.cart.push({
				id: product.id,
				title: product.title,
				price: product.price,
				img: product.img,
				description: product.description,
			});
		},
	},
});
