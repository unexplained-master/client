import React, { FunctionComponent } from 'react';
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Page from "components/Page";
import Container from "components/Container";

interface OwnProps {}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {

  return (<Page>
      <Navigation/>

      <Container>
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
              <span className="block">CONTACT</span>
              <span className="relative inline-block mt-3 text-transparent text-white">US<span className="text-red-700">.</span></span>
          </h1>
      </Container>

      <Footer/>
  </Page>);
};

export default index;
