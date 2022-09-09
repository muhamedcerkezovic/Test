function first(string) {
    let arr = string.split("");
    for (let i = 0; i < arr.length; i++) {
        flag = true;
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            }
            if (arr[i] === arr[j]) {
                flag = false;
            }

        }
        if(flag==true) return arr[i];
    }

}

console.log(first("tooth"));