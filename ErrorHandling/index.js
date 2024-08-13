// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or estabishing a connection

//         (SyntaxError, TypeError, RangeError, ReferenceError, etc.)

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Erros from try { }
// finally { } = (optional) Always executed. Used mostly for clean up
//               ex. close files, close connections, release resources

try {
  const dividend = window.prompt("Enter a dividend");
  const divisor = window.prompt("Enter a divisor");

  const result = dividend / divisor;
  console.log(result);
} catch (err) {
  console.error(err);
}
