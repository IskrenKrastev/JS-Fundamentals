function integerAndFloat(firstNum , secondNum,thirdNum){
    let sum = firstNum + secondNum + thirdNum
   sum % 1 === 0
   ? console.log(`${sum} - Integer`)
   : console.log(`${sum} - Float`)
}
integerAndFloat(9,100,1)