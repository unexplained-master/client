import GhostContentAPI, { GhostContentAPIOptions } from "@tryghost/content-api";

const url =  process.env.GHOST_CONTENT_API_URL;
const key =  process.env.GHOST_CONTENT_API_KEY;
const version =  process.env.GHOST_CONTENT_API_VERSION;

const api = new GhostContentAPI({url, key, version} as GhostContentAPIOptions);

export default api;
