const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 26
    });
    // reject('Something went wrong!');
  }, 5000);

});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return 'Some data';
}).then(() => {
  console.log('Does this run?');
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');
