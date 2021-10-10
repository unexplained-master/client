import { PostOrPage } from "@tryghost/content-api";
import React, { FunctionComponent } from 'react';
import {getPost, getPosts} from "lib/posts";
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import Container from "../../components/Container";
import ImageHeader from "../../components/ImageHeader";
import Article from "components/Article";
import Footer from "components/Footer";

export const getStaticPaths = async () => {
  const posts = await getPosts();
  
  if (posts) {
    const paths = posts.map(post => ({params: {slug:
        post.slug}}))
    
    return {paths, fallback: true}
  }
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string }}) => {
  const post = await getPost({ slug })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { ...post }
  }
};

interface OwnProps {
}

type Props = OwnProps & PostOrPage;

const Post: FunctionComponent<Props> = ({ html, feature_image, title }) => {
  
  return (
      <Page>
        <Navigation transparent/>

        <ImageHeader url={feature_image!}>
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight">
            { title }
          </h1>
        </ImageHeader>

        <Container>
            <section className="flex flex-col items-center">
                {html && <Article html={html}/>}
            </section>
        </Container>

        <Footer/>
      </Page>
  );
};

export default Post;
