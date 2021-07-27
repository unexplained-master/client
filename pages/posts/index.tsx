import { PostsOrPages } from "@tryghost/content-api";
import React, { FunctionComponent } from "react";
import { getPosts } from "lib/posts";
import Navigation from "../../components/Navigation";
import Page from "../../components/Page";
import PostCard from "../../components/PostCard";
import Footer from "../../components/Footer";

export async function getStaticProps() {
  const posts = await getPosts()
  
  if (!posts) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { posts }
  }
}

interface OwnProps {
  posts: PostsOrPages;
}

type Props = OwnProps;

const index: FunctionComponent<Props> = ({ posts }) => {
  
  return (
      <Page>
    <Navigation />
    <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">

      <h1 className="mb-1 text-4xl font-extrabold leading-none text-red-800 lg:text-5xl xl:text-6xl sm:mb-3">
        Posts
      </h1>

      <p className="text-lg font-medium text-gray-500 sm:text-2xl">
        All the pages in Ghost.
      </p>

      <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16 text-white">
        <div className="grid grid-cols-12 col-span-12 gap-7">
          {posts.map(post => (
              <PostCard page={post} key={post.slug}/>
          ))}
        </div>
      </div>
    </div>
        <Footer/>
  </Page>
  )
};

export default index;
