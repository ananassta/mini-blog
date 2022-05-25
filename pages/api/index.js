import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'

export async function getAllPosts(){
    const fs = require("fs")
    const path = require("path");
    try {
        const arrayOfFiles = fs.readdirSync(path.resolve(__dirname, "../../../_posts"))
    // console.log(arrayOfFiles)
    const posts = []
    for (let i = 0; i < arrayOfFiles.length; i++) {
        // console.log( arrayOfFiles[i] );

        //first variant
        // const article  = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../_posts/" + arrayOfFiles[i]), 'utf8'));

        const post = arrayOfFiles[i]

        //second variant
        const content = await import(`../../_posts/${post}`);
        const meta = matter(content.default)
        // console.log(meta)
        posts.push({
            slug: post.replace('.json',''),
            title: meta.title
        })

        // console.log(meta)
      }
    // for (let i in arrayOfFiles.length){
    //     console.log(arrayOfFiles[0])
    // }
    // const context = arrayOfFiles
    // console.log(path.resolve(__dirname, "../../../_posts"))
    // const direct = path.resolve(__dirname, "../../../_posts");
    // const context = require.context(direct, false, /\.json$/);
    // const context = require.context('../../_posts', false, /\.json$/)
    // const posts = []
    // console.log(posts)
    // for(const key of context.keys()){
        // console.log(key)
        // const post = key.slice(2);
        // const content = await import(`../../_posts/${post}`);
        // const meta = matter(content.default)
    //     posts.push({
    //         slug: post.replace('.json',''),
    //         title: meta.data.title
    //     })
    // }
    // const posts = [{
    //     slug: 'smt',
    //     title: 'idfn'
    // }]
    // console.log(posts)
    return posts;
    }
    catch {
        const arrayOfFiles = fs.readdirSync(path.resolve(__dirname, "../../../../_posts"))
    // console.log(arrayOfFiles)
    const posts = []
    for (let i = 0; i < arrayOfFiles.length; i++) {
        // console.log( arrayOfFiles[i] );

        //first variant
        // const article  = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../_posts/" + arrayOfFiles[i]), 'utf8'));

        const post = arrayOfFiles[i]

        //second variant
        const content = await import(`../../_posts/${post}`);
        const meta = matter(content.default)
        // console.log(meta)
        posts.push({
            slug: post.replace('.json',''),
            title: meta.title
        })
      }
    return posts;
    }
}

export async function getPostBySlug(slug){
    const fileContent = await import(`../../_posts/${slug}.json`)
    // console.log(fileContent)
    const meta = matter(fileContent.default)
    // console.log(meta)
    const content = meta.content
    // const content =  marked(meta.content)    
    return {
        title: meta.title,
        // title: meta.data.title, 
        content: content
    }
    // return {
    //     title: "idfn", 
    //     content: "kmp"
    // }
}

export async function getAllCategories(){
    const fs = require("fs")
    const path = require("path");
    const arrayOfFiles = fs.readdirSync(path.resolve(__dirname, "../../../_posts"))
    // console.log(arrayOfFiles)
    // const posts = []
    let categories = []
    for (let i = 0; i < arrayOfFiles.length; i++) {
        // console.log( arrayOfFiles[i] );

        //first variant
        const article  = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../_posts/" + arrayOfFiles[i]), 'utf8'));

        // const post = arrayOfFiles[i]


        //second variant
        // const content = await import(`../../_posts/${post}`);
        // const meta = matter(content.default)
        // console.log(meta)
        const category = article.category
        // console.log(category)
        // console.log(categories.indexOf(category))
        for (let j = 0; j < category.length; j++){
            if (categories.indexOf(category[j]) === -1) {
                categories.push(category[j])
                // console.log('1')
                // Выполнение кода, если элемент в массиве найден
            }
        }
        // console.log(meta)
        // posts.push({
        //     slug: post.replace('.json',''),
        //     title: meta.title
        // })
    }
    // console.log(categories)
    let categ = []
    categories = categories.sort();
    for (let i = 0; i < categories.length; i++) {
        categ.push({
            category: categories[i],
            title: categories[i]
        })
    }
    // categ = categ.sort();
    // console.log(categ)
    // console.log(categ)
    return categ;
}

export async function getAllCategoriesForCategory(){
    const fs = require("fs")
    const path = require("path");
    const arrayOfFiles = fs.readdirSync(path.resolve(__dirname, "../../../../_posts"))
    // console.log(arrayOfFiles)
    // const posts = []
    let categories = []
    for (let i = 0; i < arrayOfFiles.length; i++) {
        // console.log( arrayOfFiles[i] );

        //first variant
        const article  = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../../_posts/" + arrayOfFiles[i]), 'utf8'));

        // const post = arrayOfFiles[i]


        //second variant
        // const content = await import(`../../_posts/${post}`);
        // const meta = matter(content.default)
        // console.log(meta)
        const category = article.category
        // console.log(category)
        // console.log(categories.indexOf(category))
        for (let j = 0; j < category.length; j++){
            if (categories.indexOf(category[j]) === -1) {
                categories.push(category[j])
                // console.log('1')
                // Выполнение кода, если элемент в массиве найден
            }
        }
        // console.log(meta)
        // posts.push({
        //     slug: post.replace('.json',''),
        //     title: meta.title
        // })
    }
    // console.log(categories)
    let categ = []
    categories = categories.sort();
    for (let i = 0; i < categories.length; i++) {
        categ.push({
            category: categories[i],
            title: categories[i]
        })
    }
    // categ = categ.sort();
    // console.log(categ)
    return categ;
}

export async function getAllPostsForCategory(category){
    // const fileContent = await import(`../../_posts/${slug}.json`)
    // // console.log(fileContent)
    // const meta = matter(fileContent.default)
    // // console.log(meta)
    // const content = meta.content
    // // const content =  marked(meta.content)    
    // return {
    //     title: meta.title,
    //     // title: meta.data.title, 
    //     content: content
    // }


    const fs = require("fs")
    const path = require("path");
    try {
    const arrayOfFiles = fs.readdirSync(path.resolve(__dirname, "../../../../_posts"))
    // console.log(arrayOfFiles)
    const posts = []
    // const categories = []
    for (let i = 0; i < arrayOfFiles.length; i++) {
        // console.log( arrayOfFiles[i] );

        //first variant
        const article  = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../../_posts/" + arrayOfFiles[i]), 'utf8'));

        const post = arrayOfFiles[i]


        //second variant
        // const content = await import(`../../_posts/${post}`);
        // const meta = matter(content.default)
        // console.log(meta)
        const categ = article.category
        // console.log(category)
        // console.log(categories.indexOf(category))
        for (let j = 0; j < categ.length; j++){
            if (categ[j] === category) {
                posts.push({
                    slug: post.replace('.json',''),
                    title: article.title
                })
                // categories.push(category[j])
                // console.log('1')
                // Выполнение кода, если элемент в массиве найден
            }
        }
        // console.log(meta)
        // posts.push({
        //     slug: post.replace('.json',''),
        //     title: meta.title
        // })
    }
    
    return posts;
    }
    catch {
        const arrayOfFiles = fs.readdirSync(path.resolve(__dirname, "../../../_posts"))
        // console.log(arrayOfFiles)
        const posts = []
        // const categories = []
        for (let i = 0; i < arrayOfFiles.length; i++) {
            // console.log( arrayOfFiles[i] );
    
            //first variant
            const article  = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../_posts/" + arrayOfFiles[i]), 'utf8'));
    
            const post = arrayOfFiles[i]
    
    
            //second variant
            // const content = await import(`../../_posts/${post}`);
            // const meta = matter(content.default)
            // console.log(meta)
            const categ = article.category
            // console.log(category)
            // console.log(categories.indexOf(category))
            for (let j = 0; j < categ.length; j++){
                if (categ[j] === category) {
                    posts.push({
                        slug: post.replace('.json',''),
                        title: article.title
                    })
                    // categories.push(category[j])
                    // console.log('1')
                    // Выполнение кода, если элемент в массиве найден
                }
            }
            // console.log(meta)
            // posts.push({
            //     slug: post.replace('.json',''),
            //     title: meta.title
            // })
        }
        
        return posts;
    }

}

// async function readFile(path) {
//     const fs = require('fs');
//     return new Promise((resolve, reject) => {
//       fs.readFile(path, 'utf8', function (err, data) {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       });
//     });
//   }

export async function getConfig(){
    const fs = require('fs'); 
    const path = require("path");
    // const strPath = require('../../config/config.yaml');
    // let config = fs.readFileSync("../../../config/config.yaml", 'utf8');
    // let config = await readFile(path.resolve(__dirname, "../../../config.yaml"))
    try {
        let config = fs.readFileSync(path.resolve(__dirname, "../../../config.yaml"), 'utf8');
        return yaml.load(config)
    }
    catch {
        let config = fs.readFileSync(path.resolve(__dirname, "../../../../config.yaml"), 'utf8');
        return yaml.load(config)
    };
    
    // const config = await import(`../../config.yaml`);
    // console.log(config.default)
    // return yaml.load(config)
    // return yaml.load(config.default);
}

export async function getConfigForCategory(){
    const fs = require('fs'); 
    const path = require("path");
    // const strPath = require('../../config/config.yaml');
    // let config = fs.readFileSync("../../../config/config.yaml", 'utf8');
    try { let config = fs.readFileSync(path.resolve(__dirname, "../../../../config.yaml"), 'utf8'); return yaml.load(config) }
    catch{
    let config = fs.readFileSync(path.resolve(__dirname, "../../../config.yaml"), 'utf8');
    return yaml.load(config)
    };
    // const config = await import(`../../config.yaml`);
    // console.log(config)
    // return yaml.load(config)
}