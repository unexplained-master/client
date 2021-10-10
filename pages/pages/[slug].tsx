import { PostOrPage } from "@tryghost/content-api";
import { getPage, getPages } from "lib/pages";
import React, { FunctionComponent } from 'react';
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import Container from "../../components/Container";
import Article from "components/Article";
import ImageHeader from "components/ImageHeader";
import Footer from "components/Footer";

export const getStaticPaths = async () => {
  const pages = await getPages();
  
  if (pages) {
    const paths = pages.map(page => ({params: {slug:
        page.slug}}))
    
    return {paths, fallback: true}
  }
};

export async function getStaticProps({ params: { slug } }: { params: { slug: string }}) {
  const page = await getPage({ slug })

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: { ...page }
  }
}

interface OwnProps {
}

type Props = OwnProps & PostOrPage;

const GhostPage: FunctionComponent<Props> = ({ html, title, feature_image }) => {
  
  return (
      <Page>
          <Navigation transparent/>

          {feature_image ? <ImageHeader url={feature_image}>
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                  <span className="relative inline-block mt-3 text-transparent text-white">{ title?.toUpperCase() }<span className="text-red-700">.</span></span>
              </h1>
          </ImageHeader> : <Container>
              <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                  <span className="relative inline-block mt-3 text-transparent text-white">{ title?.toUpperCase() }<span className="text-red-700">.</span></span>
              </h1>
          </Container>}


          <Container>
              <div className="flex flex-col items-center">
                  {html && <Article html={html}/>}
              </div>
          </Container>

          <Footer />
      </Page>
  );
};

export default GhostPage;
