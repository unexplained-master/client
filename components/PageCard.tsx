import React, { FunctionComponent } from 'react';
import Link from "next/link";
import {PostOrPage} from "@tryghost/content-api";
import {useEnvironment} from "contexts/EnvironmentContext";

interface OwnProps {
    page: PostOrPage;
}

type Props = OwnProps;

const PageCard: FunctionComponent<Props> = ({ page }) => {
    const { environment: { GHOST_CONTENT_API_URL } } = useEnvironment();

    const href = `/pages/${page.slug}`;

  return (<div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-sm md:col-span-6 lg:col-span-4">
      <Link href={href}>
          <a className="block transition duration-500 ease-out transform hover:scale-110 w-full">
              {page.feature_image && <img className="object-cover w-full shadow-sm max-h-56" src={GHOST_CONTENT_API_URL + page.feature_image} alt={page.title} />}
          </a>
      </Link>

      <div className="relative flex flex-col items-start px-6 bg-gray-700 border border-t-0 border-gray-800 py-7 rounded-b-sm">
          <div className="bg-red-800 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Inspiration</span>
          </div>

          <h2 className="text-base font-bold sm:text-lg md:text-xl">
              <Link href={href}>
                  <a>
                      { page.title }
                  </a>
              </Link>
          </h2>
          <p className="mt-2 text-sm text-gray-500" style={{ maxHeight: "250px" }}>
              { page.excerpt }
          </p>
      </div>

  </div>);
};

export default PageCard;
