//=================================== sum of extract numbers ==============================
//Write a function, which receives a string, finds numbers in the string and returns their sum.

const sumOfNum = str => {
    //#1 way using loop
    let sum = 0;
    let res = '';
    for(let char of str) {
        if(parseInt(char) >= 0){
            res += char;
        }else res += ' ';
    }
    res = res.split(' ');
    for(let el of res){
        if(parseInt(el)){
            sum += +el
        }
    }
    return  sum;
    //#2 way
    //return str.replace(/[a-z]/gi, ' ').split(' ').reduce((sum, el) => sum + +el, 0);
    //#3 way
    //  let arr = str.match(/\d+/g)
    //  return arr.reduce((sum, el) => sum + +el, 0);


}
console.log(sumOfNum('FwrtY45KHL120mn10P'));// 45+120+10=175