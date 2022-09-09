function removeChars(string,chars){
let arrOfString=string.split("");
let arrOfChars=chars.split("");
let emptyArr=[];

//console.log(arrOfString);
for (let i = 0; i < arrOfString.length; i++) {
    let flag=false;
    for (let j = 0; j < arrOfChars.length; j++) {
        if(arrOfString[i]===arrOfChars[j]){
            flag=true;
        }
        
    }
    if(flag===false){
        emptyArr.push(arrOfString[i]);
    }
}
return emptyArr.join("");
}
console.log(removeChars("hello world","def"));