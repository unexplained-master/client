import React, { FunctionComponent } from 'react';
import Container from "components/Container";
import Navigation from "components/Navigation";
import Page from "components/Page";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";
import ImageHeader from "../components/ImageHeader";
import EventsSection from "../components/EventsSection";
import {PostsOrPages} from "@tryghost/content-api";
import {getEvents} from "../lib/events";

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

        <ImageHeader url="https://theunexplained.academy/content/images/2019/07/P1070183.jpg">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                <span className="block">THE</span>
                <span className="relative inline-block mt-3 text-transparent text-white">UNEXPLAINED<span className="text-red-700">.</span></span>
            </h1>
        </ImageHeader>

        <Container>
            <h2 className="text-4xl font-bold leading-10 tracking-tight text-white">
                A SOCIAL CLUB FOR THE ADVENTUROUS
            </h2>
            <Paragraph>
                The Unexplained makes your sexual fantasies come true. We are free from judgement and prejudices with a no pressure environment. We are seasoned and experienced organisers whom you can trust and rely on.
            </Paragraph>
            <Paragraph>
                We empower the female by being safe and consensual & respecting boundaries. We facilitate the creation of authentic interactions & unforgettable memories. We create erotic dreamscapes of unbridled desire and unimaginable joy. Our parties, your fantasies, our world, your journey, our alchemy, your destiny.
            </Paragraph>
            <Paragraph>
                <strong>Prepare for a journey of self-discovery</strong>
            </Paragraph>
            <Paragraph>
                <strong>Push back your limits</strong>
            </Paragraph>
            <Paragraph>
                <strong>Your boundaries</strong>
            </Paragraph>
            <Paragraph>
                <strong>Lose control</strong>
            </Paragraph>
            <Paragraph>
                <strong>Let go</strong>
            </Paragraph>
        </Container>
        <Container>
            <EventsSection events={events}/>
        </Container>
        <Footer/>
    </Page>
  );
};

export default index;
