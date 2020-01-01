() => () => () => expression;

// is either:
() => { () => { () => expression } }
// which is equivalent to 
() => ( () => ( () => expression ))
// that has the signature:
// f -> f -> f -> v
// that is invoked by:
// func()()()()
// and it is the only interpertation, since the argument does not allow for expressions

// on an example:
let pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
// whereby x is the initial value of the pipe-chain(thus making the problem trivial)

// let's debug this beauty:
const helloworld = (string) => string;
pipe(
  helloworld,
  console.log
)('helloWorld')
