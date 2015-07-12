function ArithGeo(arr) { 
    var add = arr[1] - arr[0];
    var multiply = arr[1] / arr[0];
    var addy = true;
    var multy = true;

    for (var i = 0; i < arr.length - 1; i++) {
        var addTest = arr[i + 1] - arr[i];
        var multTest = arr[i + 1] / arr[i];
        console.log("add " + add + " addTest " + addTest);
        if (addTest != add) {
            addy = false;
        }
        if (multTest != multiply) {
            multy = false;
        }
    }
    if (addy) {
        return "Arithmetic";
    }
    if (multy) {
        return "Geometric";
    }
    return -1;
} 

var myArr = [5, 10, 15];
console.log(ArithGeo(myArr));
