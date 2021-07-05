//afisam id-ul din url

const postId = window.location.search.substring(4);

const btnUpdate = document.getElementById('btn-update');
const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');

btnUpdate.addEventListener('click', function() {

    const post = {
        title: titleInput.value,
        text: textInput.value,
    }
    console.log(post)
})

function getPost() {

}