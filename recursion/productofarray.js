function productOfArray(arr){
    let total = 1;

    function helper(helperInput){
        if(helperInput.length === 0) return total;
            
        else{
        total *= helperInput[0];
        }
        helper(helperInput.slice(1))
        
    }
    helper(arr);
    return total;
}

//productOfArray([1,2,3])