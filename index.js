function test(){
    console.log("hello")
}
test()
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
//Form Submit Even

//Filter Event
filter.addEventListener('keyup',filterItem);



//FilterItem
function filterItem(e){
	//convert text to lowercase
	var text = e.target.value.toLowerCase();
	
	//Get List item
	var items = document.getElementsByTagName("li");
	
	//Convert to an array
	
	Array.from(items).forEach(function(item){
	var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text)!= -1){
			item.style.display = 'block';
		}
		else
		{
			item.style.display = 'none';
		}
	});
}

	