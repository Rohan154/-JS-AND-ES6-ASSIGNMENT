var regx=/[\w.+-_]\b@[^!#@%&*":;.-_][a-z]{4,}\.[a-z]{2,7}$/;

let s=require("readline");
var abd=s.createInterface(process.stdin,process.stdout);
// console.log("")
abd.question("enter email:",function(name){
    if(regx.test(name)){
        console.log("A valid email address");
    }
    else{
        console.log("Invalid email address");
    }
    process.exit();
});