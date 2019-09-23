var array1=[1,2,3,4];
var array2=[5,6,7,8];

var array3=array2[Symbol.iterator]();
array2.map(v=>{
    array1=[...array1,array3.next().value];
  
})
console.log(array1);