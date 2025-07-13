import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
	const collections = await fetch('/api/collections')
		.then((res) => res.json())
		.then((data) =>
			data.collections.edges.map(
				(edge: {
					node: { id: string; title: string; image: { id: string; altText: string; url: string } };
				}) => edge.node
			)
		);

	return {
		collections,
		params
	};
};
