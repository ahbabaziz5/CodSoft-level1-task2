let input= document.getElementById('input');
let list= document.getElementById('list');


function create(){
if(input.value == ''){
    alert("plz type something");
}
else{
    var div = document.createElement("div")
   var li = document.createElement('li');
        li.textContent = input.value;  

        list.appendChild(div)
div.appendChild(li)

var btn1 = document.createElement("button")
btn1.textContent = 'update'
var btn2 = document.createElement("button")
btn2.textContent = 'delete'



div.appendChild(btn1)
div.appendChild(btn2)


btn1.onclick = function(){
    let upd = prompt("enter updated list")
    li.textContent= upd
    alert('updated')
   
}
btn2.onclick = function(){
    list.removeChild(div)
    div.removeChild(li)
    div.removeChild(btn1)
    div.removeChild(btn2)
alert('deleted')


}
input.value= ''
}



}