import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), '_posts')

export function getSortedPostsData() {
  let fileNames = fs.readdirSync(postsDirectory)
  let index = fileNames.indexOf('posts.json') // 1
  let postfileName = fileNames.splice(index, 1); 
  // let i = 1;
  
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.json$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
    const title = fileContents.title
    // const slug = i;
    // i++;

    return {
      slug,
      title
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

//   // const allPostsInOne = await import('../_posts/posts.json');
//   console.log(allPostsInOne);
//   let allPostsData = [];
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames.map(fileName => {
//     const slug = fileName.replace(/\.json$/, '')

//     const fullPath = path.join(postsDirectory, fileName)
//     const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
//     const title = fileContents.title

//     return {
//       slug,
//       title
//     }
//   })
//   for (let i = 0; i < allPostsInOne.length; i++) {
//     // console.log(allPostsInOne[i].slug)
//     allPostsData.push((allPostsInOne[i].slug, allPostsInOne[i].title));
//   }
//   // console.log(allPostsData)
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory)
//   return fileNames.map(fileName => {
//     return {
//       params: {
//         slug: fileName.replace(/\.json$/, '')
//       }
//     }
//   })
// }

// export async function getPostData(slug) {
//   const fullPath = path.join(postsDirectory, `${slug}.json`)
//   const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
//     const title = fileContents.title
//     const processedContent = fileContents.content
//   const contentHtml = processedContent.toString()

//   return {
//     slug,
//     contentHtml,
//     title
//   }
// }
