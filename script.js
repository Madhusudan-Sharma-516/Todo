const inputBox = document.querySelector("#input");
const errMsg = document.querySelector("#err-msg");
const taskList = document.querySelector("ul");

function addTask() {

  if (inputBox.value === '') {
    errMsg.innerHTML = 'Please enter some thing';
  } else {
    errMsg.innerHTML = '';
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '&#10006;';
    li.appendChild(span);
    saveData()
  }
  inputBox.value = ''

}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask()
    event.preventDefault();
  }
});

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("check")
    saveData()
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
})


function saveData() {
  localStorage.setItem("itemList", taskList.innerHTML)
}
taskList.innerHTML = localStorage.getItem("itemList");
