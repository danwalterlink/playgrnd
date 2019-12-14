// general idea of using dispatch ptables in n-variadic functions
function method() {

}

function someFunction(param, ...rest) {
  //construct call object from params
  const dispatch = {
    /**
     * issues: 
     *  context passing
     *  pattern matcching?
     */
    method() {
      
    }
  }

  // depending on structure of method call: 
}

// pattern matching
function patternMatchingEvocation(param) {
  someObject = {
    anotherMethod(string) {
      return string;
    }
  }
}

const someeConst = patternMatchingEvocation['someObject'][anotherMethod]('string');

console.log(someConst);