/**
 * testing implementation of a new keyword
 *    retain(functionClosure)
 * 
 * that keeps a parameter of a functinon callable through lower traces of the closure
 * use: saves intermediare variable declaration by making a variable callable as declared in related closures
 */

 // generate closure
 (closingParam, ...rest) => {
  // closure generated
  console.log(closingParam); // just logs the closingParam interpolated as String

  // basically lenses for closures?
  // not quite -> have to forward declare it.
  // what if check in sister (and deeper) closure> -< use
  () => {
    console.log(closingParam); // logs the same value without redeclaring it, also would work with:
    console.log(this.closingParm); // is the same, since the context has not been rebound. Since this is a disccussion on closures, the context-declaration is not needed.

    addToHigherClosure = (someDeeperNestedParam) => {
      {arguments}.keys
      args
    }

    useSisterClosureVariableWithoutDeclaration = () => {

    }
  }
 }

const argsSplatter = (...rest) => {
  console.log({rest});
 }
 argsSplatter('first', 'second');

/**
 * how ccan a variable be made accessible in a context?
 * 
 * declared in scope : general definition
 * statement (as declaration)
 * passed as argument to a function
 * available in an object as named method/property
 * passing to context
 * opening a subclosure of another, thus merging the closure variables (only semantically different of what I'm trying to do)
 * 
 * fringe cases:
 * rest-allocation of collected arguments and spreading them with their values-as-names
 * duck-typing (redeclaring variable in scope)
 * static methods
 * 
 * what happens if parameter names can be used as declaration?
 * 
 * why cant we have expressions as parameters?
 *  well, it defeats the purpose of having a parameter! while we can just have a name for the variable that
 *  can very well be the result of an expression. but we would maybe pass something other than that expression into the function?
 *  you can, however, invoke a function with any expression as their parameter, which in turn includes functions.
 *  as a general pattern, this is called composition.
 * 
 * we can also just forgo the whole experiment and just use parameters and variables anyway.
 * Moreso parameters in this case. It also creates overly complex and convoluted programs, whereby
 * the content cannot even be statically analysed, because the state of a variable is mutable, even when it is unmutable, simply because of a closure-change
 * also, this has minor issues with grabage collecting. Every parameter acts as a potentially globally declared variable and cannot be collected, together with parts of its context.
 * in short, just make a function as pass parameters, that will generate multiple distinct closures, without having to declare any variable either, and is truly immutable if treated that way.
 * 
 * it violates several dogma of functional programming as it treats the closure as a mutable object, which can 
 * 
 */
