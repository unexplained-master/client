import { Nullable, Params } from "@tryghost/content-api";
import api from "./api";

export const getEvents = async () => {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
};

export const getEvent = async (data: { id: Nullable<string> } | { slug: Nullable<string> }, options?: Params) => {
    return await api.posts.read(data, options).catch(console.error);
}
