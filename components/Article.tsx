import React, { FunctionComponent } from 'react';

interface OwnProps {
  html: string;
}

type Props = OwnProps;

const Article: FunctionComponent<Props> = ({ html }) => {

  return (
      <article dangerouslySetInnerHTML={{__html: html}} className="prose"/>
  );
};

export default Article;
