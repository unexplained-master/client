import React, { FunctionComponent } from 'react';
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Page from "components/Page";

interface OwnProps {}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {
  
  return (<Page>
    <Navigation/>

    <Footer/>
  </Page>);
};

export default index;
