import React, { FunctionComponent } from 'react';
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import ImageHeader from "../../components/ImageHeader";

interface OwnProps {}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {
  
  return (<Page>
    <Navigation transparent/>

    <ImageHeader url={"https://theunexplained.academy/content/images/2020/01/_42G4839_new.jpg"}>
      <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
        <span className="block">EVENTS</span>
      </h1>
    </ImageHeader>
  </Page>);
};

export default index;
