// бесполезно, позже удалить
import matter from 'gray-matter'

console.log("1")
const fs = require("fs")
const path = require("path");
const arrayOfFiles = fs.readdirSync(path.resolve(__dirname, "../../../_posts"))
const posts = []
// console.log("")
for (let i = 0; i < arrayOfFiles.length; i++) {
    const post = arrayOfFiles[i]
    const content = await import(`../../_posts/${post}`);
    const meta = matter(content.default);
    posts.push({
        "slug": post.replace('.json',''),
        "title": article.title
    })
}

export const postsFS = posts;