let para1= document.createElement("p");
para1.innerText="Hey I'm red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3= document.createElement("h3");
h3.innerText ="I'm a blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1=document.createElement("h1");
let  para2 = document.createElement("para2");

h1.innerText="Im in a div";
para2.innerText="Me too";
div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);

//Q1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText ="Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Q2
button.setAttribute("placeholder","username");
input.setAttribute("id","btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);

let p=document.createElement("p");
p.innerHTML="<b>practice</b>";
document.querySelector("body").append(p);

let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event)){
    console.log("code=", event.code);
    if(event.code =="KeyU"){
        console.log("character moves up");
    }
    
    }
