//afisam lista d eposturi de la server

function createPostHTML(title, text) {
    const titleH1 = document.createElement('h1')
    titleH1.innerText = title;

    const textP = document.createElement('p')
    textP.innerText = text;

    const article = document.createElement('article')

    article.appendChild(titleH1)
    article.appendChild(textP)


    return article;

}

function displayPosts() {
    const response = fetch('http://localhost:3000/posts').then(
            (response) => {
                return response.json();
            })
        .then(posts => {
            console.log(posts)

            const postListHtml = document.getElementById('post-list')
            for (let index = 0; index < posts.length; index++) {
                const currentPost = posts[index];

                const postHtml = createPostHTML(currentPost.title, currentPost.text)
                postListHtml.appendChild(postHtml)

            }
        })
}

function createPost() {
    const post = { title: 'dela', text: '12345' }
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })

}

displayPosts();