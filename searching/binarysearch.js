function binarySearch(arr, num){

    let left = 0;
    let right = arr.length-1;
    let mid = Math.floor((left+ right)/2);
    

    while(left<=right){
        if(arr[mid] === num) return mid;
        else if(arr[mid] < num){
            left = mid + 1;
            mid = Math.floor((left+ right)/2);
        } else{
            right = mid - 1;
            mid = Math.floor((left+ right)/2);
        }

    }
    return -1;
 }

//binarySearch([1,2,3,4,5],5) // 1

//binarySearch([1,2,3,4,5],6) // -1
