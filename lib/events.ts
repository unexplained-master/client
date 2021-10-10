import { Nullable, Params } from "@tryghost/content-api";
import api from "./api";

export const getPastEvents = async () => {
    return await api.posts
        .browse({
            limit: "all",
            filter: "tags:[events, past]"
        })
        .catch(err => {
            console.error(err);
        });
};

export const getUpcomingEvents = async () => {
    return await api.posts
        .browse({
            limit: "all",
            filter: "tags:[events, upcoming]"
        })
        .catch(err => {
            console.error(err);
        });
};

export const getEvents = async () => {
    return await api.posts
        .browse({
            limit: "all",
            filter: "tags:[events]"
        })
        .catch(err => {
            console.error(err);
        });
};

export const getEvent = async (data: { id: Nullable<string> } | { slug: Nullable<string> }, options?: Params) => {
    return await api.posts.read(data, options).catch(console.error);
}
