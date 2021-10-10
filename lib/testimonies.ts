import api from "./api";

export const getTestimonies = async () => {
    return await api.posts
        .browse({
            limit: "all",
            filter: "tags:[testimonies]"
        })
        .catch(err => {
            console.error(err);
        });
};

