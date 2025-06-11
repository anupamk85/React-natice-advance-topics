// example of closures
function outerFunc(){
    let count=0;
    return function innerFunc(){
        count++
        console.log("count",count)
    }
}
const counter=outerFunc()
counter();
counter();

//Real life example


