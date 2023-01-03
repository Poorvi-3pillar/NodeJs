const{readFileSync,writeFileSync}=require('fs')
console.log('start');
const first=readFileSync('./content/first.txt','utf8')
// console.log(first);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result:${first}`,
    {flag:'a'}
)

console.log('Done with the task');
console.log('Starting the new one');
