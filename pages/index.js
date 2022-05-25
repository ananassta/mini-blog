// import DefaultLayout from "../_layouts/default.js";
// import Link from "next/link";
// import { getConfig, getAllPosts } from "./api";

// export default function Blog(props) {
//   return (
//     <DefaultLayout title={props.title} description={props.description}>
//       <p>List of all posts:</p>
//       <ul>
//         {props.posts.map(function (post, idx) {
//           return (
//             <li key={idx}>
//               <Link href={"/" + post.slug}>
//               {/* <Link href={"/posts/" + post.slug}> */}
//                 <a>{post.title}</a>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//       <Link href="./all_categories">
//         <a>All categories</a>
//       </Link>
//       <Link href="./search">
//       <a>Search</a>
//       </Link>
//     </DefaultLayout>
//   );
// }

// export async function getStaticProps() {
//   const config = await getConfig();
//   // console.log('1');
//   const allPosts = await getAllPosts();
//   // console.log(config);

//   return {
//     props: {
//       posts: allPosts,
//       title: config.title,
//       description: config.description,
//     },
//   };
// }

import { DatePicker } from "../node_modules/antd";
import React, {useRef, useEffect, useState} from "../node_modules/react";
export default function Home(){
  // const navRef = useRef(null);
  // const [refVisible, setRefVisible] = useState(false);

  // useEffect(() => {
  // if (!refVisible) {
  // return
  // }
  // // detected rendering
  // }, refVisible);
  return (
        // <div ref={navRef}>
    // <DatePicker ref={navRef}/>
    <div>
      <DatePicker/>

    </div>
  );
}
