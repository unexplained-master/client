import React, { FunctionComponent } from 'react';
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import ImageHeader from "../../components/ImageHeader";
import {getEvents} from "lib/events";
import {PostsOrPages} from "@tryghost/content-api";
import EventsList from "components/EventsList";
import Container from "components/Container";
import Footer from "components/Footer";

export async function getStaticProps() {
  const events = await getEvents();

  if (!events) {
    return {
      notFound: true,
    }
  }

  return {
    props: { events }
  }
}

interface OwnProps {
  events: PostsOrPages;
}

type Props = OwnProps;

const index: FunctionComponent<Props> = ({ events }) => {
  return (<Page>
    <Navigation transparent/>

    <ImageHeader url={"https://theunexplained.academy/content/images/2020/01/_42G4839_new.jpg"}>
      <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
        <span className="block">EVENTS</span>
      </h1>
    </ImageHeader>

    <Container>
      <EventsList events={events} title="All Events"/>
    </Container>

    <Footer/>
  </Page>);
};

export default index;
