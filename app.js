// const path =require('path')
// console.log(path.sep)
// const filepath=path.join('/conten','subfolder','test.txt')
// console.log(filepath)

// const{ readFileSync, writeFileSync} = require('fs')
// // const first= readFileSync('./content/second.txt','utf8');
// // console.log(first)
// writeFileSync('./content/result.txt','Here is the result');

// const http=require('http')
// const server = http.createServer((req,res)=>{
//     res.write('Hello');
//     res.end()
// })
// server.listen(5000)

const _ = require('lodash')
const items= [1, [2, [3 , [4]]]]
const newitems= _.flattenDeep(items)
console.log(newitems)