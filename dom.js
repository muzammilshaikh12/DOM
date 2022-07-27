
//  Query Selector
 const second=document.querySelector('.list-group-item:nth-child(2)')
 second.style.backgroundColor="green"
 const third=document.querySelector('.list-group-item:nth-child(3)')
 third.style.display="none"

//  Query Selector all

let li = document.querySelectorAll('li')
li[1].style.color = "green"

let odd=document.querySelectorAll("li:nth-child(odd)")
for(let i=0;i<=odd.length;i++) {
    odd[i].style.backgroundColor = "green"
    }



 

