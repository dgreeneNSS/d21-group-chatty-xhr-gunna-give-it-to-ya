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
            let from = element.from;
            let message = element.message;
            document.getElementById("messageBoard").innerHTML += 
                            `<div class="card col-md-3" style="width: 20rem;">
                              <div class="card-block">
                                <h4 class="card-title">${from}</h4>
                                <p class="card-text">${message}</p>
                                <a href="#" class="btn btn-primary">Delete</a>
                              </div>
                            </div>`

                        
        });
        for (var i = 0; i < x.length; i++) {
            document.getElementsByClassName("btn")[i].addEventListener("click",function() {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            })
                

        }
    }
};

window.addEventListener("load",Chat.addmsg);
