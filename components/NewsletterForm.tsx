import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const NewsletterForm: FunctionComponent<Props> = (props) => {

  return (<>
      <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
          <input type="text" name="email" placeholder="Email Address"
                 className="w-full h-12 px-6 py-2 font-medium text-red-800 focus:outline-none" />
          <span className="relative top-0 right-0 block">
                    <button type="button"
                            className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-red-700 border border-transparent hover:bg-red-700 focus:outline-none active:bg-red-700">
                        Sign Up
                    </button>
                </span>
      </div>
      <div className="mt-8 text-sm text-red-700">By signing up, you agree to the terms and conditions.</div>
  </>);
};

export default NewsletterForm;
