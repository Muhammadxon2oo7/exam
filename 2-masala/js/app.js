//2.

var add = 0;
function sumOfNegatives(n){
    for (var i = 0; i < n.length; ++i) {
        if (n[i] < 0) {
            add += n[i]
        }
    }
    return add
}
console.log(sumOfNegatives([-1, -100,3,41]));
