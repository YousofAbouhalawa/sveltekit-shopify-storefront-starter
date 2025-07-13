import client from '$lib/api/client';

export async function GET() {
	try {
		const { data } = await client.request(`
			#graphql
			query {
				collections(first: 10) {
					edges {
						node {
							id
							handle
							title
							description
							image {
								id
								altText
								url
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
	} catch (err) {
		console.error(err);
		return new Response(JSON.stringify({ error: 'Failed to fetch collections' }), {
			status: 500
		});
	}
}
