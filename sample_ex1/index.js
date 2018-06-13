var rect = {
    perimeter : (x,y) => [2*(x+y)],
    area : (x,y) => (x*y)
};

function solve(l,b){
    console.log("the length is "+l+" the breadth is "+b);
    if(l<=0 || b<=0)
    console.log("enter the correct length n breadth where l="+l+"and b="+b);
    else{
    console.log("perimeter is"+rect.perimeter(l,b));
    console.log("ares is"+rect.area(l,b));
        }
}

solve(4,5);
