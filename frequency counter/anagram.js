function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for(let val of str1){
        counter1[val] = (counter1[val] || 0) + 1;
    }
    
    for(let val of str2){
        counter2[val] = (counter2[val] || 0) + 1;
    }

    for(let key in counter1){
        if(counter1[key] !== counter2[key]){
            return false;
        }
    }
    return true;
}

//anagram('aaz','zaa') true 
//anagram('aaz','zza') false 