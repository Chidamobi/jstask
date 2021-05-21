function convertFahrToCelsius(val){
    if(typeof val === "string" || typeof val === "number"){
        var num = parseInt(val);
        var answer = ((num - 32)/1.8);
        var answerDec = answer.toFixed(4);
        return `'${answerDec}'`
    };
    if(Array.isArray(val)){return `[${val}] is not a valid number but a/an array.`};
    if(typeof val === "object"){
        var value = JSON.stringify(val);
        return `${value} is not a valid number but a/an object.`
    }
};

console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius(212));
console.log(convertFahrToCelsius([32,212,392]));


//Second function
function checkYuGiOh(n){
    if(!Number(n)){
        var content = JSON.stringify(n);
        return `invalid parameter: "${content}"`
    }
    else{
        var arr = [];
        for(var i=1; i<= n; i++){
            if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
                arr.push("yu-gi-oh");
            }
            else if(i % 2 === 0 && i % 3 === 0){
                arr.push("yu-gi");
            }
            else if(i % 2 === 0 && i % 5 === 0){
                arr.push("yu-oh");
            }
            else if(i % 3 === 0 && i % 5 === 0){
                arr.push("gi-oh");
            }
            else if(i % 2 === 0){
                arr.push("yu");
            }
            else if(i % 3 === 0){
                arr.push("gi");
            }
            else if(i % 5 === 0){
                arr.push("oh");
            }
            else{arr.push(i)}
        }
        return arr;
    }
};


console.log(checkYuGiOh(15));
console.log(checkYuGiOh("15"));
console.log(checkYuGiOh("Chidi"));
console.log(checkYuGiOh([5,6,7,8]));
console.log(checkYuGiOh({name: "Chidi", age: 25}));