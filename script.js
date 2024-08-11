function addTask() {
    var Input = document.getElementById("Input");
    var List = document.getElementById("List");
    
    if (Input.value === "") {
        alert("enter your list......");
    } else {
        var li = document.createElement("li");
        li.textContent = Input.value;
        List.appendChild(li);
        Input.value = "";
    }
}
function deleteItem() {
    var itemToDelete = document.getElementById("List");

    if (itemToDelete.children.length>0) {
        itemToDelete.removeChild(itemToDelete.children[0]);
    } else {
        console.log("no task to delete.");
    }
}
