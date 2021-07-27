import React, { FunctionComponent } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

interface OwnProps {
    href: string;
}

type Props = OwnProps;

const NavigationLink: FunctionComponent<Props> = ({ href, children }) => {
    const router = useRouter();

    const isActive = (href: string) => router.pathname.startsWith(href) ? "text-white" : "";

    return (<Link href={href}>
      <a className={"inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-red-700 md:hover:text-white lg:mx-3 md:text-center " + isActive(href)}>
          { children }
      </a>
  </Link>);
};

export default NavigationLink;
