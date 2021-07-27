import { PostOrPage } from "@tryghost/content-api";
import React, { FunctionComponent } from 'react';
import {getPost, getPosts} from "../../lib/posts";
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import Container from "../../components/Container";
import styled from "styled-components";
import ImageHeader from "../../components/ImageHeader";

const HtmlContainer = styled.div`
  .kg-card .kg-image-card {
    
  }
`;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  
  if (posts) {
    const paths = posts.map(post => ({params: {slug:
        post.slug}}))
    
    return {paths, fallback: true}
  }
};

export async function getStaticProps({ params: { slug } }: { params: { slug: string }}) {
  const post = await getPost({ slug })
  
  if (!post) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { ...post }
  }
}

interface OwnProps {
}

type Props = OwnProps & PostOrPage;

const Post: FunctionComponent<Props> = ({ html, feature_image, title }) => {
  
  return (
      <Page>
        <Navigation transparent/>

        <ImageHeader url={feature_image!}>
          <h1 className={"text-4xl font-extrabold leading-10 tracking-tight"}>
            { title }
          </h1>
        </ImageHeader>

        <Container>
          {html && <HtmlContainer dangerouslySetInnerHTML={{__html: html}} className="text-white whitespace-pre-wrap"/>}
        </Container>
      </Page>
  );
};

export default Post;
