import React, { FunctionComponent } from 'react';
import Link from "next/link";
import {PostOrPage} from "@tryghost/content-api";

interface OwnProps {
    event: PostOrPage;
}

type Props = OwnProps;

const EventCard: FunctionComponent<Props> = ({ event }) => {
    const href = "/events/" + event.slug;

    return (<div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-sm md:col-span-6 lg:col-span-4">

        <Link href={href}>
            <a className="block transition duration-500 ease-out transform hover:scale-110 w-full">
                {event.feature_image && <img className="object-cover w-full shadow-sm max-h-56 filter grayscale" src={event.feature_image} alt={event.title} />}
            </a>
        </Link>

        <div className="relative flex flex-col items-start px-6 bg-gray-700 border border-t-0 border-gray-800 py-7 rounded-b-sm">
            <div className="bg-red-800 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                <span>Inspiration</span>
            </div>

            <h2 className="text-base font-bold sm:text-lg md:text-xl">
                <Link href={href}>
                    <a>
                        { event.title }
                    </a>
                </Link>
            </h2>
            <p className="mt-2 text-sm text-gray-500">
                Check out these inspiring workstations to get ideas on how to level-up your workstation.
            </p>

        </div>
    </div>);
};

export default EventCard;
