import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeauturedPosts} from "../lib/posts-util";


function HomePage(props) {
  return (
    <Fragment>
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