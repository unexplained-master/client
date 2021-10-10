import React, { FunctionComponent } from 'react';
import {getEvents} from "lib/events";
import EventsList from "components/EventsList";
import Container from "components/Container";
import {PostsOrPages} from "@tryghost/content-api";

export async function getStaticProps() {
    const events = await getEvents();

    return {
        props: { events }
    }
}

interface OwnProps {
    events?: PostsOrPages;
}

type Props = OwnProps;

const EventsSection: FunctionComponent<Props> = ({ events }) => {

  return (<section>
      {events && <Container>
          <EventsList events={events} title="Upcoming Events"/>
          <EventsList events={events} title="Past Events"/>
      </Container>}
  </section>);
};

export default EventsSection;
