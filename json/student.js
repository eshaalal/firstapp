//using parse
// const fs=require('fs')
// var b=fs.readFileSync('student.json', {encoding:"utf8"})
// var b=fs.readFileSync('student.json')
// var parsed =JSON.parse(b)
// console.log(parsed);


//using stringify
// const fs=require('fs')
// var b=fs.readFileSync('student.json')
// var parsed =JSON.parse(b)
// var str =JSON.stringify(parsed)
// console.log(str);

const fs = require ('fs');
fs.readFile('students.json',(err,data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(JSON.stringify(student,null,5));
    console.log(JSON.stringify(student,['Title'],10));
    console.log(student);
});

// const { error }= require('console')
// var fs =require('fs') 
