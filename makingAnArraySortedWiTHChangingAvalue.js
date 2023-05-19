function sort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<=arr.length;j++ ){
            if(a[i] > a[j] ){
                continue;
            }
            else{
                a[j] = a[i]+1
            }
        }
    }
}