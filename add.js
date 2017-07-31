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
                                <a class="btn aref btn-primary">Delete</a>
                              </div>
                            </div>`

                        
        });

        for (var i = 0; i < a.length; i++) {
            document.getElementsByClassName("aref")[i].addEventListener("click",function() {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            })
                

        }

            
    }
Chat.loadmsg(show);

var input = document.getElementById('inputMess');
var add = document.getElementById('add');
var kill = document.getElementById('kill')
input.onkeydown = enterpressalert;
function enterpressalert(e){

		if(e.keyCode == 13) {
		    console.log('hi');
		 printToDom();
		}
}
function printToDom(){
	let content = document.createElement("div");
	content.setAttribute("class", "card col-md-3");
	content.innerHTML = 
	`<div class='card-block'>
	<h4 class='card-title'>Random Guy</h4>
	<p class='card-text'>${input.value}</p>
	<a href='#' class='btn are btn-primary'>Delete</a>
	</div></div>`;

    document.getElementById("messageBoard").append(content);
            document.getElementsByClassName("are")[0].addEventListener("click",function() {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            })
                

        
                            	
}


















