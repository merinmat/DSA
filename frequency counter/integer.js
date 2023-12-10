function sameFrequency(int1, int2){
    let num1 = int1.toString();
    let num2 = int2.toString();

  if(num1.length !== num2.length) {
      return false;
  }
  
  let counter1 = {};
  let counter2 = {};

    for(let val of num1){
        counter1[val] = (counter1[val] || 0) + 1
    }
  for(let val of num2){
        counter2[val] = (counter2[val] || 0) + 1
    }
console.log(counter1)
console.log(counter2)

  for(let key in counter1){
      if(counter1[key] !== counter2[key]) return false
  }
  return true
}

//sameFrequency(182,281) true
//sameFrequency(182,288) false