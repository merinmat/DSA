function maxSubarraySum(arr,num){
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length<num) return null;

    for(let i = 0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;

    for(let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
    }

//maxSubarraySum([100,200,300,400], 2) // 700
//maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
//maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
