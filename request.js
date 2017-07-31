var Chat = (function(){
    var msg = [];
    return{
    loadmsg: function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           msg = JSON.parse(xhttp.responseText).messages;
            return Chat.loadmsg();
            //console.log('hello', msg);
        }
    };
    xhttp.open("GET", "messages.JSON", true);
    xhttp.send();
    },
    getmsg: function(){
//        console.log('hello', msg);
        return msg;
    }
}
})();



{
    Chat.loadmsg();
    Chat.addmsg = function(){
        let x = Chat.getmsg();
//        console.log("x", x[0].from);
        console.log("length", x.length);
        x.forEach(function(element){
            
            console.log(element.from);
        })
    }
};

