import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Page: FunctionComponent<Props> = ({ children }) => {

  return (<div className="w-full antialiased">
    { children }
  </div>);
};

export default Page;
