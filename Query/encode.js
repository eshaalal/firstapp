var a=require('url')
var b=require('querystring')
let obj={
    name:'localhost',
    page:'admin',
    month:'feb',
    year:'2024'
};
// let querystring=b.encode(obj);
let str="itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=courses"
let output=b.decode(str);
console.log("Output: ",output);
// console.log(querystring);