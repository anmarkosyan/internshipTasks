//=================== find next number ===================================
//Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?


function findNextNum (num,  length){
    let newArr = [];
    for(let i = 0; i < length; i++){
        newArr.push(num, num + 3);
        num++;
    }
    return newArr.slice(0, length)[length -1];

}
console.log(findNextNum(2, 7));// 10


