function show(a){
        

//        console.log("x", x[0].from);
        console.log("length", a);
        a.forEach(function(element){
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
        for (var i = 0; i < a.length; i++) {
            document.getElementsByClassName("btn")[i].addEventListener("click",function() {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            })
                

        }

            
    }
Chat.loadmsg(show);