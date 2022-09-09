function checkUni(arr){
    let arrUni=[];


    for (let i = 0; i < arr.length; i++) {
        if(!arrUni.includes(arr[i])){
            arrUni.push(arr[i])
        }
        
    }
    return arrUni;
}
console.log(checkUni([4,3,1,5,6,8,4,2,1,4,3,5,6]))
