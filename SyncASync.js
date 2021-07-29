//synchronous 

console.log("w1");
console.log("w2");
console.log("w3");


//Waiting for 5sec
function getWork(){
    const dt=Date.now()+3000;
    while(Date.now()<dt)
    {
        continue;
    }
    console.log("w2");
}
console.log("w1");
getWork();
console.log("w3");

//Asynchronous
console.log("w1");
setTimeout(()=>{ 
    console.log("w2");
},3000);
console.log("w3");

*/

//So as we can see the codes work in a sequence.Every line of code waits for its previous one to get executed first and then it gets executed.

//Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one
