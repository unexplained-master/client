import React, { FunctionComponent } from 'react';
import Link from "next/link";
import {PostOrPage} from "@tryghost/content-api";

interface OwnProps {
    post: PostOrPage;
}

type Props = OwnProps;

const PostCard: FunctionComponent<Props> = ({ post }) => {
    const href = `/posts/${post.slug}`;

    return (<div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-sm md:col-span-6 lg:col-span-4 w-full">
        <Link href={href}>
            <a className="block transition duration-500 ease-out transform hover:scale-110 w-full">
                {post.feature_image && <img className="object-cover w-full shadow-sm max-h-56 filter grayscale" src={post.feature_image} alt={post.title} />}
            </a>
        </Link>

        <div className="relative flex flex-col items-start px-6 bg-gray-700 border border-t-0 border-gray-800 py-7 rounded-b-sm w-full" style={{ maxHeight: "250px" }}>
            {post.tags?.length && <div
                className="bg-red-800 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                {post.tags?.map(tag => <span key={tag.id}>{tag.name}</span>)}
            </div>}

            <h2 className="text-base font-bold sm:text-lg md:text-xl w-full line-clamp-2">
                <Link href={href}>
                    <a>
                        { post.title }
                    </a>
                </Link>
            </h2>
            <p className="mt-2 text-sm text-gray-500 w-full line-clamp-5">
                { post.excerpt }
            </p>
        </div>

    </div>);
};

export default PostCard;
