function todolist(){
  var item = document.getElementById("todoInput").value
  var text = document.createTextNode(item)
  var newItem = document.createElement("li")
  var checkbox = document.createElement("input")
    checkbox.type = "checkbox";

  newItem.appendChild(text)
  newItem.appendChild(checkbox)
  document.getElementById("todolist", "finished").appendChild(newItem)

}


function isChecked(){
  var item = document.getElementById("todoInput").value
  var text = document.createTextNode(item)
  var newItem = document.createElement("li")
  var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
      newItem.removeChild(text)
      newItem.removeChild(checkbox)

  if (todolist == false){
      return false;
      
     }else {
      document.getElementById("todolist").removeChild(newitem)
      document.getElementById("finished").appendChild(newItem)
      alert("Thank you! You are not as stupid as I thought!");
      return true;
    }
  }
//
// Click-Me button onlcick, clear todoInput
// document.getElementById('todoInput').reset();


// newItem = [list]{
//   text.list
// }


// finishedItem = [list]{
//   text.list
// }