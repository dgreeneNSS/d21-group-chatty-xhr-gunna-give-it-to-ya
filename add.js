let count = 6;
var users = {
  names: ["Guest","DMX"]
};
var isEditing = false;
var username;
var audio = new Audio('X.mp3');
let oldpost=[];
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

/////////////////Load Parsed Data////////////////////////
{
        Chat.show= function(a){
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
        for (var i = 0; i < document.getElementsByClassName('aref').length; i++) {
            document.getElementsByClassName("aref")[i].addEventListener("click",function() { this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                checkIfEmpty(); 
            })
        }
        for (var i = 0; i < document.getElementsByClassName("edit").length; i++) {
            document.getElementsByClassName("edit")[i].addEventListener("click", edit)
                function edit(){
                    say.focus();
                    let guy = event.target.parentNode.children[1].innerHTML
                    say.value = guy;
                    arr = this;
                    isEditing = true;
                } 
            say.addEventListener("keydown", edits);
        };     
    }
}
Chat.loadmsg(Chat.show);

/////////////////////////Print User Messages///////////////////////////////
var arr;
var say = document.getElementById("inputMess");
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
                    say.focus();
                    let guy = event.target.parentNode.children[1].innerHTML
                    say.value = guy;
                    arr = this;
                    console.log('we', arr.parentNode.children[1].innerHTML);
                    isEditing = true;
                } 
                say.addEventListener("keydown", edits);
            };               
    count+=1;
    checkIfEmpty();
    check20();
    input.value='';
    input.focus();
};

function edits(event){
//var arr = this
    if(event.keyCode == 13 && isEditing === true) {
        console.log('2', arr);
        arr.parentNode.children[1].innerHTML = document.getElementById('inputMess').value;
        isEditing = false;
        input.value='';
    input.focus();
    }}


/////////////////////ENTER KEY AND INPUT FOCUS///////////////////////////
var input = document.getElementById('inputMess');
var kill = document.getElementById('kill');
input.onkeydown = enter;
input.onfocus = check;
input.addEventListener("focus", function() {
    if (count>22) {
        readless();
    }
})
var add = document.getElementById('add');
add.addEventListener("click",()=>{
    readless();
    check();
    printToDom();
});

function check() {
    if(document.getElementsByClassName("card").length===0){
        count=1;
    }
}

function enter(e){
        if(e.keyCode == 13 && isEditing === false) {
            printToDom();
        }
};

function checkIfEmpty() {
    let div = document.getElementById('messageBoard');
    if (div.innerHTML !== "") {
        kill.removeAttribute("disabled");
    }else if (div.innerHTML === "") {
        kill.setAttribute("disabled", true);
    };
}

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

kill.addEventListener('click',()=>{
    let div = document.getElementById('messageBoard');
    div.innerHTML = "";
    Chat.clearmsg();
    checkIfEmpty();
    oldpost=[];
    document.getElementById("oldmsg").innerHTML='';
        
});

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
});
/////////////////////Theme Chooser/////////////////////////
var darkTheme = document.getElementById('tog1');
darkTheme.addEventListener('click', ()=>{
let msgbrd = document.getElementById('messageBoard');
let div = document.getElementsByClassName('card');

if (darkTheme.checked === true){
    document.getElementsByClassName("body")[0].classList.toggle('darkTheme');
    audio.play();
    msgbrd.classList.toggle('grey');
    for (var i = 0; i < div.length; i++){
    div[i].classList.toggle('as');
    };
}else{
    document.getElementsByClassName("body")[0].classList.remove('darkTheme');
    msgbrd.classList.remove('grey');
    audio.pause();

    for (var i = 0; i < div.length; i++){
    div[i].classList.remove('as');
    };
}});

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


////////////////////////Message Limit and Show Old Messages////////////////////////////////////

function check20() {
    let content;
    let div = document.getElementsByClassName('card');
    let readmore=document.createElement("div");
    readmore.innerHTML = `<button type="button" class="btn btn-success" onclick="readmore();">Read More....</button>`;
    for (var i = div.length-1;i<=div.length; i++){

        if (i > 20){
            content = div[i-1];
            
            document.getElementById("messageBoard").removeChild(document.getElementById("messageBoard").lastChild)
            oldpost.push(content); 
            document.getElementById("oldmsg").append(readmore);
                                                      
            };

    }; 
    if (count> 22) {
                document.getElementById("oldmsg").removeChild(document.getElementById("oldmsg").firstChild)
            }          
};

function readmore() {
    let readless=document.createElement("div");
    readless.innerHTML = `<button type="button" class="btn btn-danger" onclick="readless();">Read Less....</button>`;
    document.getElementById("oldmsg").removeChild(document.getElementById("oldmsg").firstChild)
    document.getElementById("oldmsg").append(readless);
        
    oldpost.forEach((a)=>{
        document.getElementById("oldmsg").append(a);

    })
}

function readless() {
    document.getElementById("oldmsg").innerHTML = '';
    let div = document.getElementsByClassName('card');
    let readmore=document.createElement("div");
    readmore.innerHTML = `<button type="button" class="btn btn-success" onclick="readmore();">Read More....</button>`;
    document.getElementById("oldmsg").append(readmore);
        
        
}
