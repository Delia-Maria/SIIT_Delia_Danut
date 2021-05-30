/*var comment2 = {
    imgFile: 'caine.jpg',
    email: 'delia@gmail.com',
    comment: 'helllooo'
}

var commentsList = [

    comment2,
    {
        imgFile: 'caine.jpg',
        email: 'delia@gmail.com',
        comment: 'buna, cf ?'
    },
    {
        imgFile: 'caine.jpg',
        email: 'delia@gmail.com',
        comment: 'buna, cf ?'
    }
]

function createCommentDiv(comment) {
    var contentDivParent = document.createElement('div')
    var email = document.createElement('h3')
    email.innerText = comment2.email;
    var paragraf = document.createElement('p')
    paragraf.innerText = comment2.comment;

    contentDivParent.appendChild(email)
    contentDivParent.appendChild(paragraf)

    return contentDivParent;
}



for (var index = 0; index < commentsList.length; index++) {
    var commentItem = commentsList[index];

    var allCommentsContainer = document.querySelector('.all-comments');
    var commentDiv1 = contentDivParent(commentItem.comment)
    allCommentsContainer.appendChild(commentDiv1)

}
var btn = document.getElementById('btn-add');

var inputCom = document.getElementById('input-com')


btn.addEventListener('click', function(event) {

    console.log('Valoare din inputCom:', inputCom.value)

    var allCommentsContainer = document.querySelector('.all-comments');
    var commentDiv1 = contentDivParent(inputCom.value)
    allCommentsContainer.appendChild(commentDiv1)

})
*/


var comment = {
    imgFile: 'caine.jpg',
    email: "delia@gmail.com",
    comentariu: "helllooo, merge",
    id: 1
}

var commentList = [
    comment,
    {
        imgFile: 'caine.jpg',
        email: "delia@gmail.com",
        comentariu: "poijbkdsamndf,.s,mdf",
        id: 2
    },
    {
        imgFile: 'caine.jpg',
        email: "delia@gmail.com",
        comentariu: "poijbkdsamndf,.s,mdf",
        id: 3
    }
]


var commentDiv = document.createElement('div')
commentDiv.classList.add("comment")
var image = document.createElement('img')
image.src = 'caine.png'

var email = document.createElement('h3')
email.innerText = comment2.email;
var paragraf = document.createElement('p')
paragraf.innerText = comment2.comentariu;
var button = document.createElement('button')
button.innerHTML = "Delete";

commentDiv.appendChild(image)
commentDiv.appendChild(email)
commentDiv.appendChild(paragraf)
commentDiv.appendChild(button)

var commentContainer = document.querySelector('.all-comments');
commentContainer.appendChild(commentDiv)




console.log(document.querySelector(".all-comments"))