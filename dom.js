 let itemlist=document.querySelector('#items')

// 1-Parent node
itemlist.parentNode.style.backgroundColor="Green"

// 2-Last Element child
itemlist.lastElementChild.style.fontFamily="verdana"

// 3-last child
itemlist.lastChild.textContent="Hello World!!"

// 4-first Element child
itemlist.firstElementChild.style.border='3px solid green'

// 5-First child
console.log(itemlist.firstChild)

// 6-next sibling
console.log(itemlist.nextSibling)

// 7- next element sibling
itemlist.nextElementSibling.style.color="white"

// 8-previous sibling
console.log(itemlist.previousSibling)

// 9-previous element sibling
itemlist.previousElementSibling.style.color="white"
itemlist.previousElementSibling.style.border="3px solid white"

//  10-create new child
let newChild=document.createElement("div")
newChild.setAttribute('title','item2.0')

//  11-creating text node
let newchildtext=document.createTextNode('I am the new child')

// 12-appending child
newChild.append(newchildtext)
console.log(newChild)

// Now go head and add HEllo word before Item Lister
let task15 =  document.createElement('h4')
task15.className="Dom 15"
task15.id="Dom 15!!"
task15.setAttribute('title','Hello')

let task15text=document.createTextNode('Hello')
task15.append(task15text)

let head=document.querySelector('header .container')
let title=document.querySelector('header h1')

//Now go head and add HEllo word before Item 1 
let parentnode = document.getElementById('items')

parentnode.innerHTML='Hello' + parentnode.innerHTML

console.log(parentnode.innerHTML)



 

