//afisam lista d eposturi de la server


function createPostHTML(title, text) { // crearea obiectelor in html 
    const titleH1 = document.createElement('h1')
    titleH1.innerText = title;

    const textP = document.createElement('p')
    textP.innerText = text && text.length > 150 ? text.substring(0, 150) + "..." : text;

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


const titleInput = document.getElementById('titluInput');
const textInput = document.getElementById('textInput');
const butonAdd = document.getElementById('add-buton');

butonAdd.addEventListener("click", function() {

    addPostServer(titleInput.value, textInput.value)
        .then(post => {
            window.location.href = "./index.html"
        })
})


async function addPostServer(title, text) {
    // const post = { title: 'deliaaaaaaaaaaaaa', text: '12345' }
    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            text,
        })
    })
    return response.json();
}


displayPosts();