var a=[1,2,3,4]
var b=[5,4,89,23]
var c=["344","ert","dfr"]
console.log(a.toString());                  //1
console.log(a.concat(b,c));                 //2
a.push(100)                                 //3
console.log(a);
a.pop();                                    //4
console.log(a);
a.unshift(100)
console.log(a);
a.shift()
console.log(a);
var sliceCreateNewArray=a.slice(2,4);   //sliceCreateNewArray doesn't original array
console.log(sliceCreateNewArray);
a.splice(2,1,"vimal");
//console.log(a.splice(2,1,"vimal"));
console.log(a);
console.log(a.reverse());
console.log(a.includes("vimal"))
console.log(a.length);
