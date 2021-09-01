var text = document.querySelector("input");
var button = document.querySelector(".btn");
var trashBtn = document.getElementsByClassName("trash-btn");
var backBtn = document.getElementsByClassName("back-btn");
var li = document.getElementsByTagName("li");
var i = document.querySelector("i");
var iBack = document.getElementsByClassName("fas fa-backspace");
var ul = document.querySelector("ul");
var p = document.getElementsByClassName("list");

function textAdder() {
  var li = document.createElement("li");
  var p = document.createElement("p");
  var trashBtn = document.createElement("button");
  var backBtn = document.createElement("button");
  var i = document.createElement("i");
  var iBack = document.createElement("i");

  p.appendChild(document.createTextNode(text.value));
  li.appendChild(p);
  li.appendChild(backBtn);
  li.appendChild(trashBtn);
  backBtn.appendChild(iBack);
  trashBtn.appendChild(i);
  ul.appendChild(li);

  backBtn.classList.add("back-btn");
  iBack.classList.add("fas");
  iBack.classList.add("fa-backspace");

  trashBtn.classList.add("trash-btn");
  i.classList.add("fas");
  i.classList.add("fa-trash-alt");
}

function mouseAdder() {
  if (text.value.length >= 1) {
    textAdder();
    text.value = "";
  }
}

function enterAdder(event) {
  if (text.value.length > 1 && event.which === 13) {
    textAdder();
    text.value = "";
  }
}

function complete(e) {
  if (e.target.classList.contains("back-btn")) {
    e.target.parentNode.classList.add("strike");
  } else if (e.target.classList.contains("fa-backspace")) {
    e.target.parentNode.parentNode.classList.add("strike");
  }
  //   console.log(e.target);
}
function remove(e) {
  if (e.target.classList.contains("trash-btn")) {
    var li = e.target.parentNode;
    li.style.display = "none";
  } else if (e.target.classList.contains("fa-trash-alt")) {
    var li = e.target.parentNode.parentNode;
    li.style.display = "none";
  }
}

button.addEventListener("click", mouseAdder);
text.addEventListener("keypress", enterAdder);

ul.addEventListener("click", complete);
ul.addEventListener("click", remove);
