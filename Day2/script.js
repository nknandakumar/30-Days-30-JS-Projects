let todos=[]  ;
  let inputText = document.querySelector(".add-todo input");
  let submitbtn = document.querySelector(".add-todo button")
   let tasks  = document.querySelector(".todos ul");
function addTask(){
   let task = inputText.value ;
   if (inputText.value  === '') {
    alert('you must write something');
   }else{
let li = document.createElement("li");
li.innerHTML = inputText.value ;
tasks.appendChild(li);
   }
inputText.value = '';

}

submitbtn.addEventListener("click",()=>{
  addTask();
});