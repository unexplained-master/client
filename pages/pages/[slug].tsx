import { PostOrPage } from "@tryghost/content-api";
import { getPage, getPages } from "lib/pages";
import React, { FunctionComponent } from 'react';
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import Container from "../../components/Container";
import styled from "styled-components";

const HtmlContainer = styled.div`
  white-space: pre-wrap;
  
  .kg-card .kg-image-card {
    
  }
`;

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

const GhostPage: FunctionComponent<Props> = ({ html }) => {
  
  return (
      <Page>
        <Navigation/>

        <Container>
          {html && <HtmlContainer dangerouslySetInnerHTML={{__html: html}} className={"text-white"}/>}
        </Container>
      </Page>
  );
};

export default GhostPage;
