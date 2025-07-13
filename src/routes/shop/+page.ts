import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const products = await fetch('/api/products?first=100')
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
		products
	};
};
