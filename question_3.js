//destructuring assignment


///////////////////assign variables from objects//////////////////
var one={
    foo:"hello",
    bar:"goodbye",
    baz:"hello too"
}
 
var {foo,bar,baz}=one;
console.log(foo,bar,baz);

var {foo:a,bar:b,baz:c}=one;
console.log(b);


/////////////////assign variables from nested objects/////////////////////

const nest={
    start:{x:46,y:23},
    end:{x:-33,y:-55}
};
const{start:{x:startX,y:startY}}=nest;         //method used for destructuring the assignment done to the keys
console.log(startX);


/////////////////assign variables from arrays///////////////////
const [q,,,,r]=[1,2,3,4,5];// this is because comma will escape the index and reach at the desired index
console.log(q,r);    //1 5



