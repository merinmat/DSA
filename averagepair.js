function averagePair(arr,tavg){
    let start = 0;
    let end = arr.length - 1;
    
    if(arr.length === 0) return false;
    
    while(start<end){
       let avg = arr[start] + arr[end] / 2;
        //console.log(arr[start], arr[end])
        //console.log(avg)

        if(avg === tavg) return true;
        else if(avg<tavg) start++;
        else end--;
     }
     return false
}

//averagePair([1,3,3,5,6,7,10,12,19],8) //true
//averagePair([1,2,3],2.5) // true
//averagePair([-1,0,3,4,5,6], 4.1) // false