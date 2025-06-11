// Array.prototype.myMap: You’re adding a new method to all array objects.
// cb(this[i], i, this): Just like the regular .map() method, it passes (item, index, array) to the callback.
// hasOwnProperty: Ensures the index exists on the array (safety for sparse arrays).


// const arr = [1,2,3,4,5]
// const map = arr.map((item,index) => {
//     return item*2
// })
// console.log(map)
// map function

// Array.prototype.myMap = function 


Array.prototype.myMap = function (cb) {
    let result = [];
    for(let i=0; i<this.length; i++){
        
        if(this.hasOwnProperty(i)){
            result.push(cb(this[i],i,this))
        }
    }
    return result;
}

const newResult = arr.myMap((item,index,value) => item*2)
console.log('tee',newResult)