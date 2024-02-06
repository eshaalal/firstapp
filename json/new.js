var a= require('fs');
var b=a.readFileSync('new.json',{encoding:"utf8"})
var parsed=JSON.parse(b)
console.log(parsed)