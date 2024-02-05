//create a event named play, register callback function, run the event.
//addlistener will call every call
//once will call once 
//on will call every time 
var write = require('events');
var obj=new write.EventEmitter;
obj.setMaxListeners(4);
for(i=0;i<4;i++){

obj.addListener("writing",function(msg)
{
    console.log(msg);
})}
obj.emit("writing","lets write");
