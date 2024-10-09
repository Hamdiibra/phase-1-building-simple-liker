// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const glyphStates = {
  [EMPTY_HEART]: FULL_HEART,
  [FULL_HEART]: EMPTY_HEART
}
//define state for heart colors
const colorStates = {
  "": "red", 
  "red": ""   
};

// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph");

function showerrorModal(errorMessage){
  const errorModal = document.getElementById('errorModal')
  const errorMessageElement = document.getElementById('errorMessage')
  errorMessageElement.textContent = errorMessage
  errorModal.classList.remove('hidden')
}

setTimeout(() => {
  errorModal.classList.add('hidden');
}, 3000);

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart')
    })
    .catch(function(error) {
      showerrorModal(error);
    });
}
//add click event listener to each heart
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
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
