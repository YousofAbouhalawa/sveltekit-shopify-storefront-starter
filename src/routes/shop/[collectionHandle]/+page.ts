import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const collectionHandle = params.collectionHandle;

	const res = await fetch(`/api/products?first=100&collectionHandle=${collectionHandle}`);
	const data = await res.json();

	const products = data.collectionByHandle.products.edges.map(
		(edge: {
			node: {
				id: string;
				title: string;
				description: string;
				images: {
					edges: {
						node: {
							id: string;
							altText: string;
							url: string;
						};
					}[];
				};
			};
		}) => edge.node
	);

	const collectionTitle = data.collectionByHandle.title;

	return {
		products,
		collectionTitle,
		collectionHandle
	};
};
