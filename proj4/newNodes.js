// variables

var sButton = document.getElementById('itemButton')

var items = ["Product" , "About" , "Contact" , "History" , "Shopping Cart" , "Academics" , "Sports" , "Mental Health"]

var newStyle = ['hot','mild']

// evemt handlers
sButton.addEventListener('click',addItem)


// add item
function addItem(){

    var node1 = document.createElement("li");

   
    var textnode1 = document.createTextNode(items[Math.floor(Math.random()*items.length)]);

  
    node1.appendChild(textnode1);

    
    document.querySelector("#gList").appendChild(node1);

   
    let node2 = document.createElement("li");

   
	let textnode2 = document.createTextNode(items[Math.floor(Math.random()*items.length)]);

    
	node2.appendChild(textnode2);

    document.querySelector("#gList").appendChild(node2);



    let listItems = document.querySelectorAll('li');                

    let newRandomNumber = Math.floor(Math.random()*newStyle.length)                                                         
    for (let i = 0; i < listItems.length; i++) {            
        listItems[i].className = newStyle[newRandomNumber];                         
    }
    
}