const myEach = (collection, callback) => {
    let arr = Object.values(collection);
    for (let element of arr) {
        callback(element);
    }
    return collection;
}

const myMap = (collection, callback) => {
    let arr = Object.values(collection);
    let newArr = [];
    for (let element of arr) {
        newArr.push(callback(element));
    }
    return newArr;
}

const myReduce = (collection, callback, acc) => {
    let currentCollection = [...collection]
    if (collection instanceof Array === false) {
      currentCollection = Object.values(collection)
    }
    let current = acc
    if(typeof acc !== "number"){
      current = currentCollection[0]
      for(let i = 1; i < currentCollection.length; i++) {
        current = callback(current, currentCollection[i], currentCollection)
      }
    } else { 
      for(let i = 0; i < currentCollection.length; i++) {
        current = callback(current, currentCollection[i], currentCollection)
      }
    }
    return current
}

const myFind = (collection, predicate) => {
    let arr = Object.values(collection);
    for (let element of arr) {
        if (predicate(element)) {
            return element;
        }
    }
}

const myFilter = (collection, predicate) => {
    let arr = Object.values(collection);
    let newArr = [];
    for (let element of arr) {
        if (predicate(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}

const mySize = (collection) => {
    return Object.values(collection).length;
}

// For Array
const myFirst = (arr, n = 0) => {
    let newArr = [];
    if (n == 0 ){
        return arr[n];
    }
    for (let i = 0; i < n; i++) {
        
        newArr.push(arr[i]);
    }
    return newArr;
}

const myLast = (arr, n=0) => {
    let newArr = [];
    if (n == 0 ){
        return arr[arr.length-1];
    }
    for (let i = n; i > 0; i--) {
        newArr.push(arr[arr.length-i]);
    }
    return newArr;
}

const mySortBy = (array, callback) => {}

const myFlatten = (array, [shallow], newArr = []) => {
    return [].concat(...arr, ...newArr);
}

// For Objects 
const myKeys = (object) => {
    let newArr = [];
    for (let key of Object.keys(object)){
        newArr.push(key);
    }
    return newArr;
}

const myValues = (object) => {
    let newArr = [];
    for (let key of Object.values(object)){
        newArr.push(key);
    }
    return newArr;
}