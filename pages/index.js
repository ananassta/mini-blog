import DefaultLayout from "../_layouts/default.js";
import Link from "next/link";
import { getConfig, getAllPosts } from "./api";
import { List } from "antd";

export default function Blog(props) {
  const data = props.posts.map(function (post, idx) {
    return (
        <Link href={"/" + post.slug} key={idx}>
          <a className="link-a">{post.title}</a>
        </Link>
    );
  })
  return (
    <DefaultLayout title={props.title} description={props.description} page="posts">
      <p></p>
      <h1 style={{textAlign: "center"}}>List of all posts:</h1>
      <p></p>
      <List 
      size="large"
      dataSource={data}
      renderItem={item => <List.Item style={{justifyContent:"center"}}>{item}</List.Item>}
      />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  // const allPostsInOne = await import('../_posts/posts.json');
  // const posts = []
  // for (let i = 0; i < allPostsInOne.length; i++) {
  //   posts.push({
  //     id: i+1,
  //     title: allPostsInOne[i].title,
  //     content: allPostsInOne[i].content,
  //     category: allPostsInOne[i].category,
  //     tags: allPostsInOne[i].tags
  //   })
  // }
  // console.log(posts);

  

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}