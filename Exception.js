//The try statement lets you test a block of code for errors.
//The catch statement lets you handle the error.
//The throw statement lets you create custom errors.
//The finally statement lets you execute code, after try and catch, regardless of the result.


//try…catch example


try{
    var a= ["34","32","5","31","24","44","67"]; //a is an array
    console.log(a);    // displays elements of a
    console.log(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked
    }catch(e){
    console.log("There is error which shows "+e.message); //Handling error
    }






//throw example with try…catch


    try {  
        throw "This is the throw keyword"; //user-defined throw statement.  
     }  
     catch (e) {  
       console.log(e); // This will generate an error message  
     } 







    //try…catch…finally example

    /*
    try{  
        var a=2;  
        if(a==2)  
        console.log("ok");  
        }  
        catch(e){  
        console.log("Error found"+e.message);  
        }  
        finally{  
        console.log("Value of a is 2 ");  
        }
        */