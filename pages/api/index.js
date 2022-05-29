import matter from "gray-matter";
import marked from "marked";
import yaml from "js-yaml";

export async function getAllPosts() {
  const allPostsInOne = await import("../../_posts/posts.json");
  const posts = [];
  for (let i = 0; i < allPostsInOne.length; i++) {
    posts.push({
      slug: allPostsInOne[i].id, //id
      title: allPostsInOne[i].title,
    });
  }
  return posts;
}

export async function getAllPostsFiltered() {
    const allPostsInOne = await import("../../_posts/posts.json");
    let allPostsData = []
    for (let i = 0; i < allPostsInOne.length; i++) {
        // console.log(allPostsInOne[i].slug)
        allPostsData.push({slug: allPostsInOne[i].id, title: allPostsInOne[i].title});
    }
    // console.log(allPostsData)
    let c =  allPostsData.sort((b, a) => {
        if (a.title < b.title) {
        return 1;
        } else {
        return -1;
        }
    })
    console.log(c);
    return c;
}

//переделать логику slug
export async function getPostBySlug(slug) {
  const allPostsInOne = await import("../../_posts/posts.json");
  return {
    title: allPostsInOne[slug - 1].title,
    content: allPostsInOne[slug - 1].content,
    category: allPostsInOne[slug - 1].category,
    tags: allPostsInOne[slug - 1].tags,
  };

  // const fileContent = await import(`../../_posts/${slug}.json`)
  // const meta = matter(fileContent.default)
  // const content = meta.content
  // return {
  //     title: meta.title,
  //     content: content,
  //     category: meta.category,
  //     tags: meta.tags
  // }
}

export async function getAllCategories() {
  const allPostsInOne = await import("../../_posts/posts.json");
  let categories = [];
  for (let i = 0; i < allPostsInOne.length; i++) {
    const category = allPostsInOne[i].category;
    for (let j = 0; j < category.length; j++) {
      if (categories.indexOf(category[j]) === -1) {
        categories.push(category[j]);
      }
    }
  }
  const categ = [];
  categories = categories.sort();
  for (let i = 0; i < categories.length; i++) {
    categ.push({
      category: categories[i],
      title: categories[i],
    });
  }
  return categ;
}

//а нужна ли нам эта функция???
export async function getAllCategoriesForCategory() {
  const allPostsInOne = await import("../../_posts/posts.json");
  let categories = [];
  for (let i = 0; i < allPostsInOne.length; i++) {
    const category = allPostsInOne[i].category;
    for (let j = 0; j < category.length; j++) {
      if (categories.indexOf(category[j]) === -1) {
        categories.push(category[j]);
      }
    }
  }
  const categ = [];
  categories = categories.sort();
  for (let i = 0; i < categories.length; i++) {
    categ.push({
      category: categories[i],
      title: categories[i],
    });
  }
  return categ;
}

export async function getAllPostsForCategory(category) {
  const allPostsInOne = await import("../../_posts/posts.json");
  const posts = [];
  for (let i = 0; i < allPostsInOne.length; i++) {
    const categ = allPostsInOne[i].category;
    for (let j = 0; j < categ.length; j++) {
      if (categ[j] === category) {
        posts.push({
          slug: allPostsInOne[i].id,
          title: allPostsInOne[i].title,
        });
      }
    }
  }
  return posts;
}

export async function getAllTags() {
  const allPostsInOne = await import("../../_posts/posts.json");
  let tags = [];
  for (let i = 0; i < allPostsInOne.length; i++) {
    const tag = allPostsInOne[i].tags;
    for (let j = 0; j < tag.length; j++) {
      if (tags.indexOf(tag[j]) === -1) {
        tags.push(tag[j]);
      }
    }
  }
  const all_tags = [];
  tags = tags.sort();
  for (let i = 0; i < tags.length; i++) {
    all_tags.push({
      tag: tags[i],
      title: tags[i],
    });
  }
  return all_tags;
}

//Нужна ли эта функция???
export async function getAllTagsForTag() {
  const allPostsInOne = await import("../../_posts/posts.json");
  let tags = [];
  for (let i = 0; i < allPostsInOne.length; i++) {
    const tag = allPostsInOne[i].tags;
    for (let j = 0; j < tag.length; j++) {
      if (tags.indexOf(tag[j]) === -1) {
        tags.push(tag[j]);
      }
    }
  }
  const all_tags = [];
  tags = tags.sort();
  for (let i = 0; i < tags.length; i++) {
    all_tags.push({
      tag: tags[i],
      title: tags[i],
    });
  }
  return all_tags;
}

export async function getAllPostsForTag(tag) {
  const allPostsInOne = await import("../../_posts/posts.json");
  const posts = [];
  for (let i = 0; i < allPostsInOne.length; i++) {
    const tages = allPostsInOne[i].tags;
    for (let j = 0; j < tages.length; j++) {
      if (tages[j] === tag) {
        posts.push({
          slug: allPostsInOne[i].id,
          title: allPostsInOne[i].title,
        });
      }
    }
  }
  return posts;
}

export async function getConfig() {
  return {
    title: "My mini-blog",
    description: "This blog is powered by Next.js",
  };
}
// export async function getConfig(){
//     const config = await import('../../config.yaml');
//     console.log(config[0])
//     return config
// const fs = require('fs');
// const path = require("path");
// try {
//     let config = fs.readFileSync(path.resolve(__dirname, "../../../config.yaml"), 'utf8');
//     return yaml.load(config)
// }
// catch {
//     let config = fs.readFileSync(path.resolve(__dirname, "../../../../config.yaml"), 'utf8');
//     return yaml.load(config)
// };

// }

export async function getConfigForCategory() {
  return {
    title: "My mini-blog",
    description: "This blog is powered by Next.js",
  };
}

// export async function getConfigForCategory(){
//     const fs = require('fs');
//     const path = require("path");
//     try { let config = fs.readFileSync(path.resolve(__dirname, "../../../../config.yaml"), 'utf8'); return yaml.load(config) }
//     catch{
//     let config = fs.readFileSync(path.resolve(__dirname, "../../../config.yaml"), 'utf8');
//     return yaml.load(config)
//     };
// }
