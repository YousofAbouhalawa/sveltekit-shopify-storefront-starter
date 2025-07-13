import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { SHOPIFY_PRIVATE_ACCESS_TOKEN, SHOPIFY_API_VERSION, SHOPIFY_STORE_DOMAIN } from '$env/static/private';

const client = createStorefrontApiClient({
	storeDomain: SHOPIFY_STORE_DOMAIN,
	apiVersion: SHOPIFY_API_VERSION,
	privateAccessToken: SHOPIFY_PRIVATE_ACCESS_TOKEN,
	customFetchApi: fetch
});

export default client;
