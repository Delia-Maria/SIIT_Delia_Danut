// function getPosts() { // aducem posturile de la server
//     return fetch('http://localhost:3000/posts')
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
// }

async function getPosts() {
    try {

        const response = await fetch('http://localhost:3000/posts');
        return response.json();
    } catch (err) {
        console.log(err);
    }
}


const displayPostsInHTML = (posts) => { // functia displayPosts afiseaza in html o lista de posturi
    const containerListPost = document.getElementById('list-post');

    //.map = transfomra posts in posts html

    const postsHTML = posts.map((post) => {
        const postHTML = createPostHTML(post.id, post.title, post.text);
        return postHTML;
    })
    containerListPost.append(...postsHTML) // se aplica pe array (...) trimite pana la ultimul element si le ia pe rand

    // for (let index = 0; index < posts.length; index++) {
    //     const currentPost = posts[index]
    //     const postHtml = createPostHTML(currentPost.id, currentPost.title, currentPost.text)
    //     containerListPost.appendChild(postHtml);

    // }

}

async function showPosts() {
    const posts = await getPosts();
    displayPostsInHTML(posts);


}
showPosts();


// getPosts()
//     .then(displayPosts)
//     .catch((err) => {
//         console.log(err)
//     });


//creaza Html pt un singur post
function createPostHTML(id, title, text) {
    //v1
    // const p = document.createElement('p')
    // const h1 = document.createElement('h1')
    // const article = document.createElement('article')
    // const editLink = document.createElement('a');

    // article.appendChild(h1)
    // article.appendChild(p)

    // p.innerText = text && text.length > 150 ? text.substring(0, 150) + "..." : text
    // h1.innerText = title;

    // editLink.href = `./edit-post.html?id=${id}`;
    // editLink.innerText = 'Edit';
    // article.appendChild(editLink)

    //v2
    const article = document.createElement('article')
    const summaryText = text && text.length > 150 ? text.substring(0, 150) + "..." : text
    article.innerHTML = `
    <h1>${title}</h1>
    <p>${summaryText}</p>
    <a href = "./edit-post.html?id=${id}" >Edit</a>
    `
    return article;
}

// test code
function testCreatePostHtml() {
    const postDemoHTML = createPostHTML("titlu1", "descrierea postului")
    console.log("createPostHTML=", postDemoHTML)
}

function testDisplayPosts() {
    displayPosts([{ title: 'delia', text: ' test ' }])
}

// displayPosts()