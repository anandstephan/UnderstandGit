function test(){
    console.log("hello")
}
test()
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");


//Delete Event
itemList.addEventListener('click',removeItem);



// removeItem
function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm("Are You Sure ?")){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}


	