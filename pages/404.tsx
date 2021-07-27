import React, { FunctionComponent } from 'react';
import Page from "components/Page";
import Navigation from "components/Navigation";
import ImageHeader from "components/ImageHeader";

interface OwnProps {}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {

  return (<Page>
      <Navigation transparent/>
      <ImageHeader url="https://theunexplained.academy/content/images/2019/11/_42G5963_meet-up.jpg">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
              <span className="block">404<span className="text-red-700">.</span></span>
          </h1>
      </ImageHeader>


  </Page>);
};

export default index;
