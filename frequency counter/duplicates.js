function areThereDuplicates(...args) {

    let obj = {};
 
     for(let val of args){
         obj[val] = (obj[val] || 0 ) + 1;
     }
     for(let key in obj) {
         if(obj[key] > 1) return true
     }
     return false
 }
 
 //areThereDuplicates(1,2,2,1) true
 // areThereDuplicates('a', 'b', 'c') false
 