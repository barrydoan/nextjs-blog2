import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeauturedPosts} from "../lib/posts-util";
import Head from "next/head";


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Nhat Blog</title>
        <meta
          name='description'
          content='I post about programing and web development.'/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeauturedPosts();
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}
export default HomePage;