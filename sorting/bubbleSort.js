function bubbleSort(arr){
    let noswaps;
    for(let i=arr.length;i>0;i--){
        noswaps=true;
        for(let j=0; j<i-1;j++){
            console.log(arr[j], arr[j+1])
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // console.log('one swap done')
                noswaps=false;
            }
        }
        if(noswaps) break;
    }
    return arr;
}

//bubbleSort([2,3,4,5,6,7,1])