import React, { FunctionComponent } from 'react';

interface OwnProps {
  color?: "red" | "white"
}

type Props = OwnProps;

const Paragraph: FunctionComponent<Props> = ({ children, color = "white" }) => {
  return (<p
      className={`max-w-lg mx-auto mt-3 text-sm text-center ${color === "red" ? "text-red-700" : "text-white"} sm:text-base md:max-w-xl md:text-lg xl:text-xl whitespace-pre-wrap`}>
    { children }
  </p>);
};

export default Paragraph;
