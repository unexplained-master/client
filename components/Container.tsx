import React, { FunctionComponent } from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Container: FunctionComponent<Props> = ({ children }) => {
  
  return (<div className="max-w-6xl py-32 mx-auto text-center sm:px-4">
    { children }
  </div>);
};

export default Container;
