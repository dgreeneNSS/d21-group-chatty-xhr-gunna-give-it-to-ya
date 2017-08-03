var Chat = (function(){
    let msg = [];
    return{
        loadmsg: function(y){
            let myFiles = ["message1.json", "message2.json", "message3.json", "message4.json", "message5.json"];
            Chat.loadJSON(myFiles,y);
        },
        getmsg: function(){
            return msg;
        },
        clearmsg: function() {
             msg =[];
        }
    }
})();

{
    let msg = Chat.getmsg();
    Chat.loadJSON = function(file,callback) {

        file.forEach(function(item){
            let mypromise = new Promise((resolve,reject)=>{
                var xttp = new XMLHttpRequest();
                xttp.open('GET', item);
                xttp.onload= ()=> resolve(xttp.responseText);
                xttp.onerror = ()=> reject(console.log("error"));
                xttp.send();  
            });
            mypromise.then((x)=>{
                Chat.getmsg().push(JSON.parse(x).messages);
                callback(msg[msg.length-1]) 
            })
        }) 
    };
}