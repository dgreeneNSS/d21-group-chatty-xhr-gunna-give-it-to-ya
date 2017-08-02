
let msg = [];
var Chat = (function(){

    return{
    loadmsg: function(x){
        loadAllMessages(myFiles,x);
 
        
    },
    getmsg: function(){
//        console.log('hello', msg);
        return msg;
    },
    clearmsg: function() {
         msg =[];
    }
}
})();

var myFiles = ["message1.json", "message2.json", "message3.json", "message4.json", "message5.json"];

let loadAllMessages = (file,callback) => {
// console.log ("file", file[0]);
file.forEach(function(item){
    let mypromise = new Promise((resolve,reject)=>{
            
                var xttp = new XMLHttpRequest();
     
                xttp.open('GET', item);
                xttp.onload= ()=> resolve(xttp.responseText);
        
                xttp.onerror = ()=> reject(console.log("error"));
                xttp.send();  
            });
            mypromise.then((x)=>{
                   
                msg.push(JSON.parse(x).messages);
                callback(msg[msg.length-1]) 
            })
               // msg.forEach((a)=>{callback(a)})
}) 
};
