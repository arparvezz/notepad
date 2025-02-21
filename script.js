let noteBox = document.querySelector('.note-box')
let fontSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size');
let increaseFontSizeBtn = document.querySelector('.plus-btn');
let decreaseFontSizeBtn = document.querySelector('.minus-btn');
let darkModeBtn = document.querySelector('.dark-mode-btn')
window.onload = function(){
  noteBox.value = noteBox.value.trim();
}


// set and get localstorage value of the notebox area
noteBox.addEventListener('input',function(e){
  window.localStorage.setItem("notepadValue", e.target.value)
})

document.addEventListener("DOMContentLoaded", (event) => {
  if(window.localStorage.getItem("notepadValue") != null){
    noteBox.value = window.localStorage.getItem("notepadValue")
  }
});



// increase or decrease the font size

increaseFontSizeBtn.addEventListener('click',function(e){
  let currentFontValue = parseInt(fontSize);
  let newFontValue = currentFontValue + 2;
  console.log(newFontValue + 'px')
  // set new value 
  document.documentElement.style.setProperty('--font-size', newFontValue + 'px');
})



darkModeBtn.addEventListener('click',function(e){
  document.querySelector('body').classList.toggle('dark-mode')



  if(document.querySelector('body').classList.contains('dark-mode')){
    // Get the current color value
    let currentBodyColor = getComputedStyle(document.documentElement).getPropertyValue('--body-bg-color').trim();
    let currentContentBgColor = getComputedStyle(document.documentElement).getPropertyValue('--content-bg-color').trim();
    let currentContentColor = getComputedStyle(document.documentElement).getPropertyValue('--content-color').trim();
    let currentBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();
  
    // Toggle between two colors
    let newBodyColor = currentBodyColor === '#efefef' ? '#121212' : '#efefef';
    let newContentBgColor = currentContentBgColor === '#fff' ? '#292929' : '#fff';
    let newContentColor = currentContentColor === '#000' ? '#e2e2e2' : '#000';
    let newBorderColor = currentBorderColor === '#efefef' ? '#5f5f5f' : '#efefef';
  
    // Update the CSS variable
    document.documentElement.style.setProperty('--body-bg-color', newBodyColor);
    document.documentElement.style.setProperty('--content-bg-color', newContentBgColor);
    document.documentElement.style.setProperty('--content-color', newContentColor);
    document.documentElement.style.setProperty('--border-color', newBorderColor);
  }else{
     // Get the current color value
     let currentBodyColor = getComputedStyle(document.documentElement).getPropertyValue('--body-bg-color').trim();
     let currentContentBgColor = getComputedStyle(document.documentElement).getPropertyValue('--content-bg-color').trim();
     let currentContentColor = getComputedStyle(document.documentElement).getPropertyValue('--content-color').trim();
     let currentBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();
   
     // Toggle between two colors
     let newBodyColor = currentBodyColor === '#121212' ? '#efefef' : '#121212';
     let newContentBgColor = currentContentBgColor === '#292929' ? '#fff' : '#292929';
     let newContentColor = currentContentColor === '#e2e2e2' ? '#000' : '#e2e2e2';
     let newBorderColor = currentBorderColor === '#5f5f5f' ? '#efefef' : '#5f5f5f';
   
     // Update the CSS variable
     document.documentElement.style.setProperty('--body-bg-color', newBodyColor);
     document.documentElement.style.setProperty('--content-bg-color', newContentBgColor);
     document.documentElement.style.setProperty('--content-color', newContentColor);
     document.documentElement.style.setProperty('--border-color', newBorderColor);
  }
   
})




