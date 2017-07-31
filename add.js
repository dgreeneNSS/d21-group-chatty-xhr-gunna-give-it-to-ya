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
                                <button class="btn aref btn-primary">Delete</button>
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
input.onkeydown= enter;

function enter(e){

		if(e.keyCode == 13) {
		    console.log('hi');
		 printToDom();
		}
}

function printToDom(){
	let content = document.createElement("div");
	content.setAttribute("class", "card col-md-3");
	content.setAttribute("style", "width: 20rem");
	content.innerHTML = 
	`<div class='card-block'>
	<h4 class='card-title'>Random Guy</h4>
	<p class='card-text'>${input.value}</p>
	<button class='are btn btn-primary'>Delete</button>
	</div></div>`;

    document.getElementById("messageBoard").append(content);
    let y = document.getElementsByClassName("are");
    	                      
    document.getElementsByClassName("are")[y.length-1].addEventListener("click",function() {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    })                      	
}