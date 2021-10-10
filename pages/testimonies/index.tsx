import React, { FunctionComponent } from 'react';
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Page from "components/Page";
import ImageHeader from "components/ImageHeader";
import {getPage} from "lib/pages";
import Container from "components/Container";
import Article from "components/Article";
import {PostOrPage, PostsOrPages} from "@tryghost/content-api";
import TestimoniesList from "components/TestimoniesList";
import {getTestimonies} from "lib/testimonies";

export const getStaticProps = async () => {
    const page = await getPage({ slug: "word-of-mouth" })
    const testimonies = await getTestimonies();

    if (!page) {
        return {
            notFound: true,
        }
    }

    return {
        props: { ...page, testimonies }
    }
};

interface OwnProps {
    testimonies: PostsOrPages;
}

type Props = OwnProps & PostOrPage;

const index: FunctionComponent<Props> = ({ html, testimonies }) => {
  
  return (
      <Page>
        <Navigation transparent/>

          <ImageHeader url="https://theunexplained.academy/content/images/2019/07/_42G2359_new.jpg">
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                  <span className="block">WORD OF</span>
                  <span className="relative inline-block mt-3 text-transparent text-white">MOUTH<span className="text-red-700">.</span></span>
              </h1>
          </ImageHeader>

          <Container>
              <div className="flex flex-col items-center">
                  {html && <Article html={html}/>}
              </div>
          </Container>

          <Container>
              <section>
                  {testimonies && <TestimoniesList testimonies={testimonies} title="Testimonies"/>}
              </section>
          </Container>
        <Footer/>
      </Page>
  );
};

export default index;
