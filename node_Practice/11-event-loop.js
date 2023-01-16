//started operating system process
console.log('first');
setInterval(()=>{
    console.log('second');
},2000)
console.log('third');
//completed and exited the operating system process

console.log(1);
setTimeout(function foo() {
    console.log('foo');
}, 0);
Promise.resolve()
    .then(function boo() {
        console.log('boo');
    });
console.log(2);
// Output:
// 1
// 2
// 'boo'
// 'foo'