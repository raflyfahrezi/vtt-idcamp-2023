const inputName = document.getElementById('input-name')
const buttonSend = document.getElementById('button-send')
const showComment = document.getElementById('show-comment')
const inputComment = document.getElementById('input-comment')

const loadComment = () => {
  const personJSON = localStorage.getItem('comment')
  const person = JSON.parse(personJSON)

  if (person) {
    showComment.innerHTML = `
            <p><b>${person.name}</b></p>
            <p>${person.comment}</p>
        `
  } else {
    showComment.innerHTML = '<p>There is no comment</p>'
  }
}

buttonSend.addEventListener('click', () => {
  const inputNameValue = inputName.value
  const inputCommentValue = inputComment.value

  const person = {
    name: inputNameValue,
    comment: inputCommentValue,
  }

  const personJSON = JSON.stringify(person)

  localStorage.setItem('comment', personJSON)

  inputComment.value = ''

  loadComment()
})

document.addEventListener('DOMContentLoaded', () => {
  loadComment()
})
