var a=require('url')
var b=require('querystring')
let exampleUrl='https://www.geeksforgeeks.org/courses/dsa-to-development-coding-guide?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=courses'
let parsed_Url=a.parse(exampleUrl);
let parsed_queryString=b.parse(parsed_Url.query);
console.log("This is parsed URL: ",parsed_Url);
console.log("This is parsed Query String :",parsed_queryString);
const q2=b.stringify({
    itm_source: 'geeksforgeeks',
  itm_medium: 'main_header',
  itm_campaign: 'courses'
});
console.log(q2);