let freqarr = new Array(101).fill(0);
let baseyear = 1950;
let prefixsum = [];

for(let [birth,death] of logs){
        freqarr[birth -baseyear]++
        freqarr[death -baseyear]--
    
}

prefixsum[0] = freqarr[0];
for(let i=1;i<freqarr.length;i++){
    prefixsum[i] = prefixsum[i-1] + freqarr[i-1];  
 }
let index = prefixsum.indexOf(Math.max(...prefixsum))
return index+baseyear-1