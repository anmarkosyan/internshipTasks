//============================ Print all even numbers between 1-79====

const allEvenNum = (start = 1, end = 79) => {
    let evenArr = [];
    //#1 using for loop
    // for(let x = start; x <= end; x++){
    //     if(x % 2 === 0) evenArr.push(x);
    // }
    //#2 using while loop;
    let x = start;
    while(x <= end){
        if(x % 2 === 0) evenArr.push(x);
        x++;
    }
    return evenArr;
}
console.log(allEvenNum());