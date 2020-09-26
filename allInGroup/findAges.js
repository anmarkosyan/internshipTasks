//=============== find Ages ===================
//Father said to his son, "When I was your age, you were 4 years old. When you will be my age,
// I will be 79 years old." How old both of them are now? *

const findCurrAges = (num1, num2) => {
    let x = (num2 + 8) / 3;
    let sonAge = x;
    let fatherAge = num2 - (x - num1)
    return [sonAge, fatherAge]

}
console.log(findCurrAges(4, 79));//[29, 54]