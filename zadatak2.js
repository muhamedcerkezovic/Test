function change(money) {
    let one = 1;
    let three = 3;
    let five = 5;
    let emptyArr = [];
    let total = 0;
    let count = 0;

    for ( total; total < money; ) {
        if (total < money) {
            emptyArr.push(5);
            total += 5
            count++;
            if (total > money) {
                emptyArr.pop(5);
                total -= 5;
                count--;
                break;
            }
        }
    }
    for (total; total < money;) {
        if (total < money) {
            emptyArr.push(3);
            total += 3
            count++;
            if (total > money) {
                emptyArr.pop(3);
                total -= 3;
                count--;
                break;
            }
        }
    }
    for (total; total < money; ) {
        if (total < money) {
            emptyArr.push(1);
            total += 1
            count++;
            if (total > money) {
                emptyArr.pop(1);
                total -= 1;
                count--;
                break;
            }
        }
    }


return console.log(count,emptyArr);
}

change(11);