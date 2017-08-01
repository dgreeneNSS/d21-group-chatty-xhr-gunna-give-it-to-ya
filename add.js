var a = 1;

function show(a){
        

//        console.log("x", x[0].from);
        console.log("length", a);
        a.forEach(function(element){
            let from = element.from;
            let message = element.message;
            document.getElementById("messageBoard").innerHTML += 
                            `<div class="af card col-md-12">
                              <div class="card-block">
                                <h4 class="card-title">${from}</h4>
                                <p class="card-text">${message}</p>
                                <button class="btn aref btn-primary btn-sm">Delete</button>
                              </div>
                            </div>`

                        
        });

        for (var i = 0; i < a.length; i++) {
            document.getElementsByClassName("aref")[i].addEventListener("click",function() {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                checkIfEmpty(); 
            })
                

        }

            
    }
Chat.loadmsg(show);

var input = document.getElementById('inputMess');
var add = document.getElementById('add');
var kill = document.getElementById('kill')
input.onkeydown= enter;
input.onfocus = check;

add.onclick = printToDom;

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
	content.setAttribute("class", "af card col-md-12");
	let today = new Date
	let date = (today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date+' '+time;
	content.innerHTML = 
	`<div class='card-block'>
	<h4 class='card-title'>Post #${a} <br> ${dateTime}</h4>
	<p class='card-text'>${input.value}</p>
	<button class='are btn btn-primary btn-sm'>Delete</button>
	</div></div>`;

    document.getElementById("messageBoard").append(content);
    let y = document.getElementsByClassName("are");
    	                      
    document.getElementsByClassName("are")[y.length-1].addEventListener("click",function() {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        checkIfEmpty();                       	
    })         
    a+=1;
    checkIfEmpty()
};

var darkTheme = document.getElementById('tog1');
darkTheme.addEventListener('click', ()=>{
let body = document.getElementsByClassName('container')[0];
let div = document.getElementsByClassName('card');
console.log('div', div);

if (darkTheme.checked === true){
    body.classList.toggle('darkTheme');
        console.log('a', a);
    for (var i = 0; i < div.length; i++){
    div[i].classList.toggle('as');
    };
}else{
    body.classList.remove('darkTheme');
    for (var i = 0; i < div.length; i++){
    div[i].classList.remove('as');
    };
}
   
}
);
    
var bigTheme = document.getElementById('tog2');
bigTheme.addEventListener('click', ()=>{
let div = document.getElementById('messageBoard');
if (bigTheme.checked === true){
    div.classList.toggle('focused');  
}else{
    div.classList.remove('focused');
}  
}
);
  

kill.addEventListener('click',()=>{
    let div = document.getElementById('messageBoard');
    div.innerHTML = "";
    Chat.clearmsg();
    checkIfEmpty();
});

function checkIfEmpty() {
    let div = document.getElementById('messageBoard');
    if (div.innerHTML !== "") {
        kill.removeAttribute("disabled");
    }else if (div.innerHTML === "") {
        kill.setAttribute("disabled", true);
    };
}


function check20() {
    let div = document.getElementById('messageBoard').length;

}




//if (){};













    
    
    
    