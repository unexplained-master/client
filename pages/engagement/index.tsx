import { PostsOrPages } from "@tryghost/content-api";
import React, { FunctionComponent } from "react";
import Navigation from "../../components/Navigation";
import Page from "../../components/Page";
import ImageHeader from "../../components/ImageHeader";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";
import EventsSection from "../../components/EventsSection";
import {getEvents} from "../../lib/events";
import Footer from "../../components/Footer";

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

    return (
        <Page>
            <Navigation transparent/>

            <ImageHeader url="https://theunexplained.academy/content/images/2019/07/_42G2359_new.jpg">
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                    <span className="block">BE</span>
                    <span className="relative inline-block mt-3 text-transparent text-white">ENGAGED<span className="text-red-700">.</span></span>
                </h1>
            </ImageHeader>

            <Container>
                <Paragraph>
                    Our parties have thrived on being unique and unusual - no fantasy is too outrageous and no desire too devilish to receive the Unexplained treatment.
                </Paragraph>

                <ul>
                    <li>
                        we aim for everyone to feel safe and comfortable to unleash the full pleasure
                    </li>
                    <li>
                        we take care of the set-up, the location, the scenario
                    </li>
                    <li>
                        we aim for events to be unique and special for everyone involved. We do this by selecting participants who share a similar fantasy, and create an environment that feels safe and comfortable for everyone involved
                    </li>
                    <li>
                        no judgement, no pressure
                    </li>
                </ul>

                <Paragraph>
                    Past examples include hotel suites, penthouses, boxing rings, hot tub orgies, spa and swimming pool parties, superyacht parties, sex cinemas, dungeons and abductions (involving fields, cars, vans and sex motels) and we are always looking for new and exciting venues to christen with our debauchery. At the same time many smaller fantasies need just a room with a bed that is relatively central for people to get to. Some of the parties are open to the larger public community whilst others are invite only. Broadly speaking we categorise the parties on location and have arranged them from Berlin, Germany to Auckland, NZ.
                </Paragraph>

                <Paragraph>
                    Often the themes are based on the desires and fantasies of the women involved. In truth the only limiting factor is your imagination - we will take care of the rest...
                </Paragraph>

                <Paragraph color="red">
                    So close your eyes, take a deep breath and take the plunge...
                </Paragraph>
            </Container>
            <Container>
                <EventsSection events={events} title="Upcoming Events"/>
                <EventsSection events={events} title="Past Events"/>
            </Container>
            <Footer/>
        </Page>
    )
};

export default index;
