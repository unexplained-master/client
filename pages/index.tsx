import React, { FunctionComponent } from 'react';
import Container from "components/Container";
import Navigation from "components/Navigation";
import Page from "components/Page";
import Footer from "../components/Footer";
import ImageHeader from "../components/ImageHeader";
import EventsList from "components/EventsList";
import {PostsOrPages} from "@tryghost/content-api";
import {getEvents} from "../lib/events";
import TestimoniesList from "components/TestimoniesList";
import {getTestimonies} from "lib/testimonies";

export async function getStaticProps() {
    const events = await getEvents();
    const testimonies = await getTestimonies();

    if (!events) {
        return {
            notFound: true,
        }
    }

    return {
        props: { events, testimonies }
    }
}

interface OwnProps {
    events: PostsOrPages;
    testimonies: PostsOrPages;
}

type Props = OwnProps;

const index: FunctionComponent<Props> = ({ events, testimonies }) => {
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
            <section className="flex flex-col items-center">
                <article className="prose text-center">
                    <h2>
                        A SOCIAL CLUB FOR THE ADVENTUROUS
                    </h2>
                    <p>
                        The Unexplained makes your sexual fantasies come true. We are free from judgement and prejudices with a no pressure environment. We are seasoned and experienced organisers whom you can trust and rely on.
                    </p>
                    <p>
                        We empower the female by being safe and consensual & respecting boundaries. We facilitate the creation of authentic interactions & unforgettable memories. We create erotic dreamscapes of unbridled desire and unimaginable joy. Our parties, your fantasies, our world, your journey, our alchemy, your destiny.
                    </p>
                    <p>
                        <strong>Prepare for a journey of self-discovery</strong>
                    </p>
                    <p>
                        <strong>Push back your limits</strong>
                    </p>
                    <p>
                        <strong>Your boundaries</strong>
                    </p>
                    <p>
                        <strong>Lose control</strong>
                    </p>
                    <p>
                        <strong>Let go</strong>
                    </p>
                </article>
            </section>
        </Container>

        <Container>
            <section>
                {events && <EventsList events={events}/>}
            </section>
            <section>
                {testimonies && <TestimoniesList testimonies={testimonies}/>}
            </section>
        </Container>
        <Footer/>
    </Page>
  );
};

export default index;
