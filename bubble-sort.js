var bubbleSort = function(arr){

    for(let i = 0; i < arr.length; i++){
        let isSorted = true;
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                sorted = false;
            }
        }

        if(sorted) break;
    }

    return arr;
}

console.log(bubbleSort([6,3,9, 10, 12, -1, 0]));