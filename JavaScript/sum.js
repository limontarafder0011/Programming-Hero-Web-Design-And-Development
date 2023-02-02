function arrSum(a) {
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        let evNum = a[i];
        sum = sum + evNum ;

    }
    return sum;
}

let altr = [10,12,1,2,3,4,3,100,12,1114,14465,234]
// arrSum(a);
console.log(arrSum(altr));

