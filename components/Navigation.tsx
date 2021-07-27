import React, {FunctionComponent} from 'react';
import Link from 'next/link';
import NavigationLink from "./NavigationLink";

interface OwnProps {
    transparent?: boolean;
}

type Props = OwnProps;

const Navigation: FunctionComponent<Props> = ({ transparent }) => {
    return (
        <nav className="flex items-center w-full h-24 select-none"
             style={{ position: transparent ? "absolute" : "relative"}}>
            <div
                className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">

                <Link href="/">
                    <a className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0 z-40">
                  <span className="p-1 text-xl font-black leading-none text-white select-none">
                      <span className="">THE UNEXPLAINED</span><span className="text-red-700">.</span></span>
                    </a>
                </Link>

                <div
                    className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">

                    <div
                        className="flex-col w-full h-auto h-full overflow-hidden select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <div
                            className="flex flex-col justify-end items-center w-full h-full mt-12 text-center text-red-700 md:text-red-700 md:mt-0 md:flex-row md:items-center pr-6">

                            <NavigationLink href="/about" >
                                Be Explained
                            </NavigationLink>
                            <NavigationLink href="/engagement" >
                                Be Engaged
                            </NavigationLink>

                            <NavigationLink href="/testimonies" >
                                Word of Mouth
                            </NavigationLink>

                            <NavigationLink href="/pages" >
                                Pages
                            </NavigationLink>
                            <NavigationLink href="/posts" >
                                Posts
                            </NavigationLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>);
};

export default Navigation;
