//=================== Reproduce the following output (use loops)=========
//*
//**
//***
//****
//*****
const starTriangle = n => {
    let str = '';
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            str += '*';
        }
        if(i < n){
            str+= '\n';
        }
    }
    return str;
}
console.log(starTriangle(5));