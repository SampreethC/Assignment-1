

let fruits=["apple","banana","mango"];

const getFruits=()=>{
  setTimeout(()=>{fruits.forEach(data=>{
    console.log(data);
  });},1000);
  
}

const postfruit=(fruit)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{fruits.push(fruit);
            let err=true;
            if(!err){
                    resolve();
            }
            else{
                    reject("something went wrong");
            }
        },2000);
    });
}

//postfruit("kiwi").then(getFruits).catch(err=>{
 //   console.log(err);
//});
const init=async()=>{
  try{
    await postfruit("kiwi");
      getFruits();
  }
  catch(err){
    console.log(err);
  }
}

init();