(function count(start, end){
console.log(start);

if(start<end) {
    count(start+1,end)
}
})(1,100)
