let btn = document.querySelector("button");
let  ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li"); //list item added
    item.innerText =inp.value; //value assigned, text shows on screen 

    let delbtn = document.createElement("button");
    delbtn.innerText="delete"; 
    delbtn.classList.add("delete");

    item.appendChild(delbtn);

    ul.appendChild(item); //list mein item added 
    inp.value="";//removes input from placeholder
});


ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }


});
