console.log("hi there...");

type Combinable = number | string;
type ResultType = 'as-number'|'as-text';

function combine(input1:Combinable, input2:Combinable, resultType:ResultType){
    let result;
    if (resultType === 'as-number'){
        if (typeof input1 === 'number' && typeof input2 === 'number'){
            result= input1 + input2;
        } else{
            result= +input1 + +input2;
        }
    } else{
        result= input1.toString()+input2.toString();
    }
    return result;
}

let combinedAges = combine(30, 26, 'as-number'); // 56
console.log(combinedAges);

combinedAges = combine(30, 26, 'as-text'); // 3026
console.log(combinedAges);

combinedAges = combine('30', '26', 'as-number'); // 56
console.log(combinedAges);

let combinedNames = combine('Anakin', 'Skywalker', 'as-text');
console.log(combinedNames);
