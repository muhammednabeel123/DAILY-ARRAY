

function Square(arr1,arr2){
    count = 0
    let arr3=[]
    for(let i=0;i<arr1.length;i++){
      
        for(let j=0;j<arr1.length;j++ ){
            if(arr1.length === arr2.length ){
                if ( arr1[i] * arr1[i] === arr2[j]) {
                    arr3.push(arr1[i])
                    arr2[j] = -1
                }
              
                
            }else{
                return false;
            }
        }
    }
    return arr3
}

//complexity O(n^2)

console.log(Square([1,2,3],[4,1,9]))

// using while loop

function Square2(arr1,arr2){
    let arr3 = []
    let i=0
    let j=0


    if(arr1.length === arr2.length){
        while(i < arr2.length && j < arr1.length){
            if(arr1[j] != -1 && arr1[i]*arr1[i] === arr2[j] ){
                arr3.push(arr1[i])
                arr1[j] = -1
                i++,j=0
            }
            else{
                j++
            }
        }
        return arr3
    }
    
}

