var url =require('url');
var adr='https://www.geeksforgeeks.org/courses/dsa-to-development-coding-guide?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=courses'
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata=q.query;
console.log(qdata.itm_medium);
