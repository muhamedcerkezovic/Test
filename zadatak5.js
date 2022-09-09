function removeRep(string){
    let arrOfstring=string.split("");
    let emptyArr=[];

    for (let i = 0; i < arrOfstring.length;
         i++) {
        if(arrOfstring[i]!==arrOfstring[i+1]){
            emptyArr.push(arrOfstring[i]);
        }
        
    }
    return emptyArr.join("");
}

console.log(removeRep("Shellless mollusk lives in walless house in wellness."));