//Q1
let number1=287152;
let count=0;

let copy=number1;
while(copy>0){
    count++;
    copy=Math.floor(copy/10)
}
console.log(count)

//Q2
let number2=287152;
let sum =0;
let copy2 = number2;
while(copy2>0){
    digit=copy%10;
    sum+= digit;
    copy=Math.floor(copy/10);
}

console.log(sum);

//Q3
let n = prompt("enter number:")
let intn= parseInt(n);
let prod=1;
for(let i=1;i<intn+1;i++){
    prod= prod*i;

}
console.log(prod);

//Q4
let arr1=[1,2,3,4,5,8,10,9];
let largest = arr1[0];
let largeint = parseInt(largest);
for(let i =0;i<arr1.length;i++){
    if(arr1[i]>=largeint){
        largeint=arr1[i];
    }

}
console.log(largeint);
//Q5

function unique(str){
    let ans="";
    for(let i =0;i<str.length;i++){
        let currchar=str[i]
        if(ans.indexOf(currchar)==-1){
            ans+=currchar;

        }
    }
    return ans;
}
unique(str);
//Q6
let country=["Australia","Germany","India",'Canada"']
function longestname(country){
    ansIdx=0;
    for(let i=0;i<country.length;i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];
}
longestname(country);
//Q7
let str="Prakriti"
function countVowels(str){
    let count =0;
    for(let i =0;i<str.length;i++){
        let char=str[i];
        if(
            char=="a"||
            char=="u"||
            char=="i"||
            char=="e"||
            char=="o"

        ){
            count++;
        }
    }
    return count;

}
//Q8
let start=100;
let end =200;
function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start
}
//Q9
let id=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);
//Q10
let nums =[1,2,3,4,5];
const square=nums.map((num)=>num*num);
console.log(square);

let sum1=square.reduce((acc,curr)=>acc+curr,0);
let avg=sum/nums.length;
console.log(avg);
//Q11
let nums2=[10,20,30,40,50];
const plus5=nums2.map((num)=>num+5);
console.log(plus5);

let chars=['a','b','c','d'];
const upperCase=chars.map((char)=>char.toUpperCase());

const doubleAndReturnArgs = (arr, ...args) =>[
    ...arr,
    ...args.map((v)=>v*2),
];

const mergeObjects =(obj1,obj2)=> ({...obj1,...obj2});
mergeObjects({a:1,b:2},{c:3,d:4});
