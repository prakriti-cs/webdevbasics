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
