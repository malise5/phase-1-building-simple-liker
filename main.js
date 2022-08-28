// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let error_tag = document.getElementById("modal");
error_tag.classList.add("hidden");

add_listeners(document.getElementsByClassName("like-glyph"));

function add_listeners(heart_glyphs){
  for (let heart_glyph of heart_glyphs){
    heart_glyph.addEventListener('click', (event) => {
      mimicServerCall()
      .then(response => response.json)
      .then(data => swap_hearts(event.target))
      .catch(error => {
        error_tag.classList.remove("hidden");
          error_tag.children[1].innerText = error;
          setTimeout(() => error_tag.classList.add("hidden"), 5000);
        })
    })
  }
}

function swap_hearts(current){
  if (current.innerText == EMPTY_HEART){
    current.innerText = FULL_HEART;
    current.classList.add("activated-heart"); 
  } else {
    current.innerText = EMPTY_HEART;
    current.classList.remove("activated-heart");
  }
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
