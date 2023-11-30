const inputComment = document.getElementById('input-comment')
const buttonSend = document.getElementById('button-send')
const showComment = document.getElementById('show-comment')

const loadComponent = () => {
  const comment = localStorage.getItem('comment')

  if (comment) {
    showComment.innerHTML = '<p>' + comment + '</p>'
  } else {
    showComment.innerHTML = '<p>Tidak ada komentar</p>'
  }
}

buttonSend.addEventListener('click', () => {
  const inputCommentValue = inputComment.value

  localStorage.setItem('comment', inputCommentValue)

  inputComment.value = ''

  loadComponent()
})

document.addEventListener('DOMContentLoaded', () => {
  loadComponent()
})
