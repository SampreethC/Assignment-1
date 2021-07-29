//NPM package to check eve or odd
module.exports={
    eve:function(a){
    if(a%2==0)
    {
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
};


//Using that package
var app=require('self-eve-odd');

var result=app.eve(4);
