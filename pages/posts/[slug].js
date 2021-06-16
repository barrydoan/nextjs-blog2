import PostContent from "../../components/posts/post-detail/post-content";
import {getPostdata, getPostFiles} from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostdata(slug);
  return {
    props: {
      post: postData
    },
    revalidate: 600
  };
}

export function getStaticPaths() {
  const postFiles = getPostFiles();

  const slugs = postFiles.map(fileName => fileName.replace(/\.md$/, ''));

  return {
    paths:slugs.map(slug => ({params: {slug: slug}})),
    fallback: false
  }
}

export default PostDetailPage;