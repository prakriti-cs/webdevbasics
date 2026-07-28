let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    console.dir(form);
    
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(pass.value);
    console.log(user.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value=", this.value);
});

user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value=", this.value);
});
//Q1
let button = document.querySelector("#btn");
button.addEventListener("click", function(){
    button.style.backgroundColor = "green";
});
//Q2
 let input = document.querySelector("#nameInput");
 let heading = document.querySelector("#heading");

 input.addEventListener("input",function(){
    let filteredName = input.value.replace(/[^a-zA-Z]/g,"");
    input.value=filteredName; //removes invalid char from input box 
    heading.innerText=filteredName; //updates the h2
 });