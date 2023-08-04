const { readFileSync,writeFileSync } = require('fs')

const frist =readFileSync('./js/content/frist.txt','utf8')
const second =readFileSync('./js/content/second.txt','utf8')

//console.log(frist,second)

writeFileSync('./js/content/result-sync.txt',`Here is the result ${frist},${second}`,{flag:'a'})

