import React, { FunctionComponent } from 'react';
import PostCard from "./PostCard";
import {PostsOrPages} from "@tryghost/content-api";

interface OwnProps {
    title?: string;
    events: PostsOrPages;
}

type Props = OwnProps;

const EventsSection: FunctionComponent<Props> = ({ events, title = "Events" }) => {

  return (<section>
      <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white text-left uppercase">
          { title }
      </h2>
      <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16 text-white">
          <div className="grid grid-cols-12 col-span-12 gap-7">
              {events.slice(0, 3).map(event => (
                  <PostCard page={event} key={event.slug}/>
              ))}
          </div>
      </div>
  </section>);
};

export default EventsSection;
