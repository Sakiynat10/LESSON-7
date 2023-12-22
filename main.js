//Array1
// function getLevel2(n){
//     let res = []
//     for(i = 0; i < n; i++ ){
//         res = 2 ** (i+1);
//         console.log(res)
//     }
//     return res;
// }

// let n = [4]

// let res = getLevel2(n);




//Array2--

// let arr = [2 , 3 ]
// let sum = 0;
// for(let i  in arr ){
//     // console.log(arr[i])
//     A = 2;
//     B = 3;
//     sum += 3 + arr[arr.length]
//     let push = arr.push(sum)
//     console.log(arr[i])
// }



//Array3
// let arr = [3,2,7,4,8,9,]

// let reverse = arr.reverse();
// console.log(reverse);


//Array4
// let arr = [4 , 5, 7, 8, 6, 9];

// let oddArray = [];

// for(let el of arr){
//     if(el % 2 === 1){
//         oddArray.push(el);
//         leng = oddArray.length;
//     }
    
// }
// console.log(oddArray); 
// console.log(leng , "ta")



//Array5
// let arr = [4 , 5, 7, 8, 6, 9];

// let oddArray = [];
// let evenArray = [];

// for(let el of arr){
//     if(el % 2 === 0){
//         oddArray.push(el);
//     }else{
//         evenArray.push(el);
//         reverse = evenArray.toReversed();
//     }
    
// }

// console.log(oddArray.concat(reverse))



//Array6
// let arr = [2,3,4,65,90,7,3,1,8,4,0,5]

// let arr1 = arr.slice(0, arr.length);

// console.log(arr1)


//Array7
// let arr = [4,5,2,8,3,9,6,1]

// for(i in arr){
//     if(i % 2 === 0){
//         console.log(arr[i])
//     }
// }



//Array7
// let arr = [4,5,2,8,3,9,6,1]

// for( i in arr){
//     if(i % 2 === 1){
//         console.log(arr[arr.length-i-1])
//     }
// }




//Array8
// let arr = [4,5,2,8,3,9,6,1];

// let evenArray = []
// let oddArray = []

// for( i in arr){
//      if(i % 2 === 0){
//         console.log(arr[i])
//      }else{
//         console.log(arr[i])
//      }
// }




//Array9

// let arr = [4,5,2,8,3,9,6,1];

// let oddArr = []
// let evenArr = []


// for(i in arr){
//     if(i % 2 === 1){
//         evenArr.push(arr[i])
        
//     }else{
//         oddArr.push(arr[i])
//         reverse = oddArr.toReversed();
        
//     }
// }


// console.log(evenArr.concat(reverse))


//Array10

// let arr = [4 ,5 ,7 ,8, 6, 9]

// let leng = arr.length;

// for (let i in arr){
//     res = i + 1
//     console.log(arr[i] , arr[i - 1] , arr[leng - i -1] , arr[leng- i - 2])
// }


//Array11

// function rangeOutSum(arr, K , L){
//     let res = arr.fill(K , L+1)
//     console.log(arr);
//     let sum = 0;
//     for(let el of res){
//         sum += el;
//     }
//     // return sum;
// }

// let arr = [1 , 6, 9 ,5 ,8 ,10 ,15]
// let s = rangeOutSum(arr, 0 ,2 , 5)
// console.log(s);





//Array12

