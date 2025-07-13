import client from '$lib/api/client';

export async function GET(request: Request): Promise<Response> {
	const url = new URL(request.url);
	const first = url.searchParams.get('first') || '10';
	const collectionHandle = url.searchParams.get('collectionHandle');

	try {
		if (collectionHandle) {
			const { data } = await client.request(`
			query {
				collectionByHandle(handle: "${collectionHandle}") {
					title
					products(first: ${first}) {
						edges {
							node {
								id
								title
								description
								variants(first: 10) {
									edges {
										node {
											id
											title
											price {
												amount
												currencyCode
											}
										}
									}
								}
								priceRange {
									minVariantPrice {
										amount
										currencyCode
									}
									maxVariantPrice {
										amount
										currencyCode
									}
								}
								images(first: 10) {
									edges {
										node {
											id
											altText
											url
										}
									}
								}
							}
						}
					}
				}
			}
			`);

			return new Response(JSON.stringify(data), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		} else {
			const { data } = await client.request(`
			query {
				products(first: ${first}) {
					edges {
						node {
							id
							title
							description
							variants(first: 10) {
									edges {
										node {
											id
											title
											price {
												amount
												currencyCode
											}
										}
									}
								}
							priceRange {
									minVariantPrice {
										amount
										currencyCode
									}
									maxVariantPrice {
										amount
										currencyCode
									}
								}
							images(first: 10) {
								edges {
									node {
										id
										altText
										url
									}
								}
							}
						}
					}
				}
			}
			`);

			return new Response(JSON.stringify(data), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		}
	} catch (err) {
		console.error(err);
		return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
			status: 500
		});
	}
}
