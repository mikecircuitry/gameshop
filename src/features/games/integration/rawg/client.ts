import "server-only";
import type { paths } from "@features/games/integration/rawg/schema";
import createClient, { type Middleware } from "openapi-fetch";

const baseUrl = process.env.RAWG_API_URL;
const apiKey = process.env.RAWG_API_KEY ?? "";

const apiKeyMiddleware: Middleware = {
  async onRequest({ request }) {
    const url = new URL(request.url);
    url.searchParams.set("key", apiKey);
    return new Request(url, request);
  },
};

const rawgClient = createClient<paths>({
  baseUrl: baseUrl,
});

rawgClient.use(apiKeyMiddleware);

export default rawgClient;
