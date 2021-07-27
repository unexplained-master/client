import React, { FunctionComponent } from 'react';

interface OwnProps {
    url: string;
}

type Props = OwnProps;

const ImageHeader: FunctionComponent<Props> = ({ url, children }) => {

  return (<div className="w-full h-screen">
      <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center z-10 absolute">
          <div className="mx-4 text-center text-white">
              { children }
          </div>
      </div>
      <div className="w-full h-screen bg-center bg-no-repeat bg-cover filter grayscale z-0"
    style={{backgroundImage: `url('${url}')`}}/>
  </div>);
};

export default ImageHeader;
