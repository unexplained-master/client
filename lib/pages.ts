import { Nullable, Params } from "@tryghost/content-api";
import api from "./api";

export const getPages = async () => {
  return await api.pages
    .browse({
      limit: "all"
    })
    .catch(console.error);
};

export const getPage = async (data: { id: Nullable<string> } | { slug: Nullable<string> }, options?: Params) => {
  return await api.pages.read(data, options).catch(console.error);
}
