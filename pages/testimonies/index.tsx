import React, { FunctionComponent } from 'react';
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Page from "components/Page";
import ImageHeader from "components/ImageHeader";

interface OwnProps {}

type Props = OwnProps;

const index: FunctionComponent<Props> = ({}) => {
  
  return (
      <Page>
        <Navigation transparent/>

          <ImageHeader url="https://theunexplained.academy/content/images/2019/07/_42G2359_new.jpg">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                  <span className="block">WORD OF</span>
                  <span className="relative inline-block mt-3 text-transparent text-white">MOUTH<span className="text-red-700">.</span></span>
              </h1>
          </ImageHeader>

        <Footer/>
      </Page>
  );
};

export default index;
