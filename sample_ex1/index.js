// var rect = {
//     perimeter : (x,y) => [2*(x+y)],
//     area : (x,y) => (x*y)
// };
var rect = require('./rectangle');

function solve(l,b){
    console.log("the length is "+l+" the breadth is "+b);
    rect(l,b,(err,rectangle) => {
        if(err){
            console.log("Error: "+err.message);
        }
        
        else
        {
            console.log("area is : "+rectangle.area());
            console.log("perimeter is :"+rectangle.perimeter());
        }
        console.log("after call to rect");
    
});
}

solve(4,5);
