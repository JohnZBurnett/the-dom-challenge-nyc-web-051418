// get the counter element for manipulation

// getting elements of +/-/<3, adding event listeners.
var likes = {

}

var counter = document.getElementById("counter");

var interval = setInterval(function() {
++counter.innerText}, 1000);

var likeButton = document.getElementById("<3");
likeButton.addEventListener("click", addLikes);

var plus = document.getElementById("+")
plus.addEventListener('click', addToCounterOnClick);

var minus = document.getElementById("-")
minus.addEventListener('click', subtractFromCounterOnClick);

var pause = document.getElementById('pause');
pause.addEventListener('click', pauseButtonClick);

var commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', addComment);
commentForm.addEventListener('submit', preventDefault);

var commentList = document.getElementById('list')

function preventDefault(event) {
  event.preventDefault();
}

function addComment(event) {
  var commentListItem = document.createElement("p")
  commentListItem.innerText = document.getElementById('comment-text').value
  commentList.appendChild(commentListItem);
  document.getElementById('comment-text').value = ""
}

function addToCounterOnClick() {
  ++counter.innerText
}

function subtractFromCounterOnClick() {
  --counter.innerText
}

function addLikes() {
  if (likes[counter.innerText]) {
    var currentListItem = document.getElementById(`${counter.innerText}`);
    likes[counter.innerText] += 1;
    currentListItem.innerText = `${counter.innerText} has ${likes[counter.innerText]} likes`;
  } else {
    likes[counter.innerText] =1;
    var likesListItem = `<li id='${counter.innerText}'>${counter.innerText} has ${likes[counter.innerText]} likes</li>`;
    var ul = document.querySelector("ul.likes");
    ul.innerHTML += likesListItem;
  }
}

function pauseButtonClick() {
  if (pause.innerText === 'pause') {
    pauseChallenge();
    pause.innerText = 'resume';
  } else {
    resumeChallenge();
    pause.innerText = 'pause';
  }
}

function pauseChallenge() {
  clearInterval(interval);
  plus.removeEventListener('click', addToCounterOnClick);
  minus.removeEventListener('click', subtractFromCounterOnClick);
  likeButton.removeEventListener("click", addLikes);
  commentForm.removeEventListener('submit', addComment);

}

function resumeChallenge() {
  plus.addEventListener('click', addToCounterOnClick);
  minus.addEventListener('click', subtractFromCounterOnClick);
  likeButton.addEventListener("click", addLikes);
  commentForm.addEventListener('submit', addComment);
  interval = setInterval(function() {
  ++counter.innerText}, 1000);
}
