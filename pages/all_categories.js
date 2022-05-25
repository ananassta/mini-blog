import DefaultLayout from "../_layouts/default.js";
import Link from "next/link";
import { getConfig, getAllCategories } from "./api";

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <p>List of all categories:</p>
      <ul>
        {props.categories.map(function (categ, idx) {
          return (
            <li key={idx}>
                {/* <Link href="./"> */}
              <Link href={"/categories/" + categ.category}>
              {/* <Link href={"/posts/" + post.slug}> */}
                <a>{categ.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="./">
      <a>All posts</a>
      </Link>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
//   console.log('1');
  const allCategories = await getAllCategories();
//   console.log(allCategories);

  return {
    props: {
      categories: allCategories,
      title: config.title,
      description: config.description,
    },
  };
}
