var a = 1;

function show(a){
        

//        console.log("x", x[0].from);
        console.log("length", a);
        a.forEach(function(element){
            let from = element.from;
            let message = element.message;
            document.getElementById("messageBoard").innerHTML += 
                            `<div class="card col-md-3">
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
input.onfocus = check;

function check() {
	if(document.getElementsByClassName("are").length===0){
		a=1;
	}
}

function enter(e){

		if(e.keyCode == 13) {
		    console.log('hi');
		 printToDom();
		}
}


function printToDom(){
	let content = document.createElement("div");
	content.setAttribute("class", "card col-md-3");
	let today = new Date
	let date = (today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date+' '+time;
	content.innerHTML = 
	`<div class='card-block'>
	<h4 class='card-title'>Post #${a} <br> ${dateTime}</h4>
	<p class='card-text'>${input.value}</p>
	<button class='are btn btn-primary'>Delete</button>
	</div></div>`;

    document.getElementById("messageBoard").append(content);
    let y = document.getElementsByClassName("are");
    	                      
    document.getElementsByClassName("are")[y.length-1].addEventListener("click",function() {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    })         
    a+=1;                        	
};

var darkTheme = document.getElementById('tog1');
darkTheme.addEventListener('click', ()=>{
let body = document.getElementsByClassName('container')[0];
let div = document.getElementById('XX');

if (darkTheme.checked === true){
    body.classList.toggle('darkTheme'); 
    div.classList.toggle('darkTheme')
}else{
    body.classList.remove('darkTheme');
    div.classList.remove('darkTheme');
}  
}
);
    
var bigTheme = document.getElementById('tog2');
bigTheme.addEventListener('click', ()=>{
let div = document.getElementById('XX');
if (bigTheme.checked === true){
    div.classList.toggle('focused');  
}else{
    div.classList.remove('focused');
}  
}
);
    

    
    
    
    
    