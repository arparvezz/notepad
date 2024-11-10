let noteBox = document.querySelector('.note-box')







noteBox.addEventListener('input',function(e){
  window.localStorage.setItem("notepadValue", e.target.value)
  console.log(localStorage.getItem("notepadValue"))
})


document.addEventListener("DOMContentLoaded", (event) => {
  if(window.localStorage.getItem("notepadValue") != null){
    noteBox.value = window.localStorage.getItem("notepadValue")
  }
});