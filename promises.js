function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
                resolve("success:data was saved");

    }   else{
                reject("failure: weak connection.");
    }
});
}

    

savetoDb("hello")
  .then(()=>{
     console.log(" data1 saved .promise was resolved");
     return savetoDb("helloworld");
    
})
  .then(()=>{
    console.log("data2 saved");
    return savetoDb("shradha");
  })
  .then(()=>{
    console.log("data3 saved");
  })
  .catch(()=>{
     console.log("promise was rejected");
  });

async function greet(){ //returns a promise 
    throw "some random error"; // this is err
    return "hello!"; // this is result 
}

greet()
  .then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ", result);
  })
  .catch((err)=>{
    console.log("promise was rejected with err:", err);
  });

function getNum(){ // defined the promise object 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){ // returns promise 
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        },delay);
    });
}
//to handle rejections , writing await code in try and catch is good
async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
}
