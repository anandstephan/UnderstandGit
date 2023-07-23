function test(){
    console.log("hello")
}
test()
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
//Form Submit Even


//Add Item
function addItem(e){
	e.preventDefault();

	// Get input Value
	var newItem = document.getElementById('item');

	// Create new li item
	var li = document.createElement("li");
	
	// Add the class in li tags
	li.className = "list-group-item";
	
	//Add text node with input value
	li.appendChild(document.createTextNode(newItem.value));
	
	//Add the delete button 
	var deleteBtn = document.createElement("button");
	
	//Add the class in the deletebtn Element
	deleteBtn.className = "btn btn-danger btn-sm float-right delete";
	
	//Add the text node in the button
	deleteBtn.appendChild(document.createTextNode('X'));
	
	//Add the deleteBtn in the li
	
	li.appendChild(deleteBtn);
	//Add the li item in the ul list
	itemList.appendChild(li);
	
}
// removeItem
function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm("Are You Sure ?")){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}


	