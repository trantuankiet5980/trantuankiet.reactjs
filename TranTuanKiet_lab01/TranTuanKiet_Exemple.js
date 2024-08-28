//Map
Array.prototype.myMap = function(callbackMap) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        arr.push(callbackMap(this[i], i, this));
    }
    return arr;
}
let newArr = [1, 2, 3].myMap((el) => el * 2);
console.log(newArr);

//Filter
Array.prototype.myFilter = function(callbackFilter) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callbackFilter(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}
let newArrFilter = [1, 2, 3, 4, 5].myFilter((el) => el % 2 === 0);
console.log(newArrFilter);

//Find
Array.prototype.myFind = function(callbackFind) {
    for (var i = 0; i < this.length; i++) {
        if (callbackFind(this[i], i, this)) {
            return this[i];
        }
    }
}
let find = [1, 2, 3, 4, 5].myFind((el) => el === 3);
console.log(find);

//Every
Array.prototype.myEvery = function(callbackEvery) {
    for (var i = 0; i < this.length; i++) {
        if (!callbackEvery(this[i], i, this)) {
            return false;
        }
    }
    return true;
}
let every = [1, 2, 3, 4, 5].myEvery((el) => el > 0);
console.log(every);

//Some
Array.prototype.mySome = function(callbackSome) {
    for (var i = 0; i < this.length; i++) {
        if (callbackSome(this[i], i, this)) {
            return true;
        }
    }
    return false;
}
let some = [1, 2, 3, 4, 5].mySome((el) => el > 5);
console.log(some);

//Reduce
Array.prototype.myReduce = function(callbackReduce, initialValue) {
    var acc = initialValue;
    for (var i = 0; i < this.length; i++) {
        acc = callbackReduce(acc, this[i], i, this);
    }
    return acc;
}
let reduce = [1, 2, 3, 4, 5].myReduce((acc, el) => acc + el, 0);
console.log(reduce);


