var Chat = (function(){
    var msg = [];
    return{
    loadmsg: function(x){
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load", function() {
        if (this.readyState == 4 && this.status == 200) {
           msg = JSON.parse(xhttp.responseText).messages;
            x(msg)
            //console.log('hello', msg);
        }
    });
    xhttp.open("GET", "messages.JSON", true);
    xhttp.send();
    },
    getmsg: function(){
//        console.log('hello', msg);
        return msg;
    }
    // clearmsg: function() {
    //     msg =[];
    // }
}
})();




    



