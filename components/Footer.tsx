import Link from 'next/link';
import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = () => {

  return (<footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          For the curious
        </div>

        <Link href="/pages/faq">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          FAQ
        </a>
        </Link>
        <Link href="/pages/our-mission">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Our mission
        </a>
        </Link>
        <Link href="/pages/code-of-conduct">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Code of Conduct
        </a>
        </Link>
        <Link href="/pages/press-inquiries">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Press Inquiries
        </a>
        </Link>
      </div>

      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          For brands
        </div>

        <Link href="/pages/submit-a-perk">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Submit a perk
        </a>
        </Link>
        <Link href="/pages/submit-an-event">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Submit an event
        </a>
        </Link>
        <Link href="/pages/contact-us">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Contact us
        </a>
        </Link>
      </div>

      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          For members
        </div>

        <Link href="/pages/become-a-nymph">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Become a Nymph
        </a>
        </Link>
        <Link href="/pages/become-a-muse">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Become a Muse
        </a>
        </Link>
        <Link href="/pages/contact-reservations">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          Contact reservations
        </a>
        </Link>
        <Link href="/pages/report-a-creeper">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Report a Creeper
          </a>
        </Link>
      </div>

      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          For all
        </div>

        <Link href="/posts">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
          The Unexplained Archive
        </a>
        </Link>

        <Link href="/pages/pics">
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Pixxxels
          </a>
        </Link>
      </div>
    </div>

    <div className="pt-2">
      <div className="flex pb-5 px-3 m-auto pt-5
            border-t border-gray-500 text-gray-400 text-sm
            flex-col md:flex-row max-w-6xl">
        <div className="mt-2">
          © Copyright 2021. All Rights Reserved.
        </div>

        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <Link href={"/"}>
            <a className="w-6 mx-1">
            <i className="uil uil-instagram"></i>
          </a>
          </Link>
        </div>
      </div>
    </div>
  </footer>);
};

export default Footer;
