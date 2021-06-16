import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostdata(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // remove file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  console.log(filePath)
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);



  const postData = {
    slug: postSlug,
    ...data,
    content
  };

  return postData;
}

export function getPostFiles() {
  const postFiles = fs.readdirSync(postsDirectory);
  return postFiles;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostdata(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB ? -1 : 1) ;

  return sortedPosts;
}

export function getFeauturedPosts() {
  const allPosts = getAllPosts();
  console.log('all post', allPosts);
  const featuredPosts = allPosts.filter(post => post.isFeatured);
  return featuredPosts;
}
