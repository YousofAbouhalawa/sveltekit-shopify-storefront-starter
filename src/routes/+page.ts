import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const collections = await fetch('/api/collections')
		.then((res) => res.json())
		.then((data) =>
			data.collections.edges.map(
				(edge: {
					node: { id: string; title: string; image: { id: string; altText: string; url: string } };
				}) => edge.node
			)
		);

	const products = await fetch('/api/products?first=3')
		.then((res) => res.json())
		.then((data) =>
			data.products.edges.map(
				(edge: {
					node: {
						id: string;
						title: string;
						description: string;
						images: { edges: { node: { id: string; altText: string; url: string } }[] };
					};
				}) => edge.node
			)
		);

	return {
		collections,
		products
	};
};
