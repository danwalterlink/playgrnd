/**
 * the mockingbird in javascript
 */

let mockingbird = fn => (...args) => fn(fn, ...args)
// cute, but does not compile.
// this should

let m;
m = (...le) => x => le.reduce((f, n) => f(n*n), x)

/*
 * the overall idea is to wrap a function in a higher-order function
 * that calls the function
 */

 export m;