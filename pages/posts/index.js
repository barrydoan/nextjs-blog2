import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";
import { Fragment } from 'react';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All my post</title>
        <meta name='description' value='A list of all programing'/>
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
    }
  };
}

export default AllPostsPage;