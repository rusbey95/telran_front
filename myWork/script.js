// how to take error
const fnWithError = () => {
    throw new Error('Some error');
}

try {
    fnWithError()
} catch(error) {
    console.error(error);
    console.log(error.message);
}

console.log('some text');

