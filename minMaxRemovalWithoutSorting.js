function Remove(arr){
 max=0
 min=arr[0]
 sum = 0

 for(let i=0;i<=arr.length-1;i++){
    if(arr[i] > max ){
        max = arr[i]
    }
    if(arr[i] < min ){
        min = arr[i]
    }
    sum=sum+arr[i]



 }
 let sum2 = sum - (min + max)

    let avg = sum2/(arr.length-2)
   
 return avg
}


console.log(Remove([20,10,40,50,90]))