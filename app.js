// This is my function that sums two 

let oneEurols={
    "JPY": 156.5,
    "USD":1.07,
    "GBP":0.87,
}

function fromDollarToYen(dollars){
    return dollars * oneEurols.JPY
}

function fromEuroToDollar(euros){
    return euros * oneEurols.USD
}

function fromYenToPound(yen){
    return yen * oneEurols.GBP
}

const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
}
// This is my function that subtracts two numbers