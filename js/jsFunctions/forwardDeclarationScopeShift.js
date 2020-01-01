const someConstant
  , otherConstant
  ;

otheConstant = {
  propertyTwo: 'world!'
}

function functionUsingConstant() {
  someConstant = {
    propertyOne: 'hello'
  }

  return `${someConstant.propertyOne} ${otherConstant.propertyTwo}`;
}

console.log(functionUsingConstant());

