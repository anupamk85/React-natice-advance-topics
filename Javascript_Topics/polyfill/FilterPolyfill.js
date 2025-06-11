
// filter polyfill
// cb(this[i], i, this) — your callback function returns true or false.
// If it's true, push only this[i] (the element).
// hasOwnProperty(i) is optional but helps avoid issues with sparse arrays.

const arr = [1,2,3,4,5,6]
// const filterData = arr.filter((item,) => item > 4)
// console.log(filterData)

// create a polyfill
Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(this.hasOwnProperty(i)){
            if(cb(this[i],i,this)){
                result.push(this[i])
            }
        }
    }
    return result;
}

const newResult = arr.myFilter((item,index) => item > 2)
console.log(newResult)