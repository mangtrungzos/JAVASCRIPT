// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or estabishing a connection

//         (SyntaxError, TypeError, RangeError, ReferenceError, etc.)

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Erros from try { }
// finally { } = (optional) Always executed connections, release resources

try {
  console.log(x);
} catch (error) {
  console.log(error);
}
