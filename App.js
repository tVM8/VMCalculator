let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let str = "";
// for store results

let arr = Array.from(buttons);
// Array.from() method is used to convert string or set or values into array

arr.forEach((button) => {
    // this is arrow funtion not callback function
    button.addEventListener("click",(e) => 
    {
        // addeventlistener because after clicking do the things write in function on every value in array
        if(e.target.innerText == "=")
        {
            str = eval(str);
            // eval is js inbuilt function which is evaluate all operations
            input.value = str;
        } 
        
        else if(e.target.innerText == "AC")
        {
            str = ""; 
            input.value = str;
        }

        else if(e.target.innerText == "DEL")
        {
            str = str.substring(0,str.length-1);
            // substring is same as slice method
            input.value  = str;
        }
        else{
            str += e.target.innerText;
            input.value = str;
        }
    })
})