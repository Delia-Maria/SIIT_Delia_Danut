var comment2 = {
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