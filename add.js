var count = 1;
var users = {
  names: ["Guest","DMX"]
};
var username;

function show(a){

        a.forEach(function(element){
            let from = element.from;
            let message = element.message;
            document.getElementById("messageBoard").innerHTML += 
                            `<div class="af card col-md-12 fades">
                              <div class="card-block">
                                <h4 class="card-title">${from}</h4>
                                <p class="card-text">${message}</p>
                                <button class="btn aref btn-danger btn-sm">Delete</button>
                                <button class="btn edit btn-primary btn-sm">Edit</button>
                              </div>
                            </div>`

                        
        });

        for (var i = 0; i < a.length; i++) {
            document.getElementsByClassName("aref")[i].addEventListener("click",function() {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                checkIfEmpty(); 
            })
                

        }

        for (var i = 0; i < document.getElementsByClassName("edit").length; i++) {
            document.getElementsByClassName("edit")[i].addEventListener("click", edit)
                function edit(){
                    let say = document.getElementById("inputMess");
                    say.focus();
                    let guy = event.target.parentNode.children[1].innerHTML
                    var x = this;
//                    console.log('d', x);
                    say.value = guy;
//                    console.log('eee', say.value);
                    say.addEventListener("keydown", function(event){
                        console.log('hi');
                        if(event.keyCode == 13) {
                            console.log('hi');
                            x.parentNode.children[1].innerHTML = document.getElementById('inputMess').value;
                            
                        }});
                    }}

            
    }
Chat.loadmsg(show);

var input = document.getElementById('inputMess');
var add = document.getElementById('add');
var kill = document.getElementById('kill')
input.onkeydown= enter;
input.onfocus = check;

add.addEventListener("click",()=>{
    check();
    printToDom();
    
});

function check() {
	if(document.getElementsByClassName("are").length===0){
	count=1;
	}
}

function enter(e){
		if(e.keyCode == 13) {
		 printToDom();
		}
};

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function checkname() {
    if (document.getElementById("radio1").checked===true) {
        username = users.names[0];
        return username
    }
    else {
        username = users.names[1];
        return username
    }
}

function printToDom(){
    let name = checkname();
	let content = document.createElement("div");
	content.setAttribute("class", "af card col-md-12 fades");
	let today = new Date

	let date = monthNames[today.getMonth()]+' '+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date+`-`+time;
	content.innerHTML = 
	`<div class='card-block'>
	<h4 class='card-title'>Post #${count} <br> ${dateTime}<br> <strong>BY: ${name}</strong></h4>
	<p class='card-text'>${input.value}</p>
	<button class='are btn btn-danger btn-sm'>Delete</button>
    <button class="btn edit btn-primary btn-sm">Edit</button>
	</div></div>`;

    document.getElementById("messageBoard").prepend(content);
    let y = document.getElementsByClassName("are");
    	                      
    document.getElementsByClassName("are")[0].addEventListener("click",function() {          
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        checkIfEmpty();                       	
    })
    for (var i = 0; i < document.getElementsByClassName("edit").length; i++) {
            document.getElementsByClassName("edit")[i].addEventListener("click", edit)
                function edit(){
                    let say = document.getElementById("inputMess");
                    say.focus();
                    let guy = event.target.parentNode.children[1].innerHTML
                    var x = this;
//                    console.log('d', x);
                    say.value = guy;
//                    console.log('eee', say.value);
                    say.addEventListener("keydown", function(event){
                        console.log('hi');
                        if(event.keyCode == 13) {
                            console.log('hi');
                            x.parentNode.children[1].innerHTML = document.getElementById('inputMess').value;
                            
                        }});
                    }}         
    count+=1;
    checkIfEmpty();
    check20();
    input.value='';
    input.focus();
};






var darkTheme = document.getElementById('tog1');
darkTheme.addEventListener('click', ()=>{
let msgbrd = document.getElementById('messageBoard');
let div = document.getElementsByClassName('card');

if (darkTheme.checked === true){
    document.getElementsByClassName("body")[0].classList.toggle('darkTheme');
        
    msgbrd.classList.toggle('grey');
    for (var i = 0; i < div.length; i++){
    div[i].classList.toggle('as');
    };
}else{
    document.getElementsByClassName("body")[0].classList.remove('darkTheme');
    msgbrd.classList.remove('grey');

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
var oldpost=[];
function check20() {
    let content;
    let div = document.getElementsByClassName('card');
    let readmore=document.createElement("div");
    readmore.innerHTML = `<button type="button">press</button>`;
    for (var i = div.length-1;i<=div.length; i++){
        if (i > 20){
            content = div[i-1];
            for (var j =i; j<i+1;j++) {
                document.getElementById("messageBoard").removeChild(document.getElementById("messageBoard").lastChild)
            }
            
            oldpost.push(content);
                
            
            // document.getElementById("messageBoard").appendChild(content);
            // oldmsgs.addEventListener("click", function(){
                
            //         document.getElementById("messageBoard").removeChild(document.getElementById("messageBoard").lastChild);
                
            //     oldpost.forEach((a)=>{
            //         console.log("", a);
                        
            //         // document.getElementById("messageBoard").appendChild(a);
            //     }) 


                
            
                    
            };
            // document.getElementById("messageBoard").appendChild(oldpost[oldpost.length-1]);
            
         };           
    





};

///////////////////Modal JS///////////////////////////
document.getElementById("themechange").addEventListener("click",()=> {
    var bgcolor;
    var fontcolor;
    var cardcolor;
    bgcolor = document.getElementById("bgcolor").value;
    fontcolor = document.getElementById("fontcolor").value;
    cardcolor = document.getElementById("cardcolor").value;     
    document.getElementById("body").style.backgroundColor=bgcolor;
    document.getElementById("messageBoard").style.color=fontcolor;
    document.getElementById("messageBoard").childNodes.forEach((a)=>{
        a.style.backgroundColor=cardcolor;
    });                             
    document.getElementById("themechange").setAttribute("data-dismiss","modal");   
})
    






















