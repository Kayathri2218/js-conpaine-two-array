//6. Design a method to combine two arrays.

let a = [1,2,3,4,5];
let b = [6,7,8,9,10];
let c = [];
let d = 0;
for (i =0;i<a.length;i++){
    c[d] = a[i];
    d++;
}
for(j=0;j<b.length;j++){
    c[d] = b[j];
    d++;
}
console.log(c);