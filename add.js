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
            var created = "";
//            console.log('a', a);
                $("#messageBoard").append(`<div class="af card col-md-12 fades">
                                  <div class="card-block">
                                    <h4 class="card-title">${from}</h4>
                                    <p class="card-text">${message}</p>
                                    <button class="btn aref btn-danger btn-sm">Delete</button>
                                    <button class="btn edit btn-primary btn-sm">Edit</button>
                                  </div>
                                </div>` )  
//                console.log('created', created);
//                $("#messageBoard").append(created);

        });
        for (var i = 0; i < $('.aref').length; i++) {
            $(".aref").click(function() { this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                checkIfEmpty(); 
            })
        }
        for (var i = 0; i < $(".edit").length; i++) {
            $(".edit").click(function() {
                    say.focus();
                    let guy = event.target.parentNode.children[1].innerHTML
                    say.val = guy;
                    arr = this;
                    isEditing = true;
                });
            say.click;
        };     
    }
}
Chat.loadmsg(Chat.show);

/////////////////////////Print User Messages///////////////////////////////
var arr;
var say = $("#inputMess");
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
        <p class='card-text'>${input.val}</p>
        <button class='are btn btn-danger btn-sm'>Delete</button>
        <button class="btn edit btn-primary btn-sm">Edit</button>
    </div></div>`;

    $("#messageBoard").prepend(content);
    let y = $(".are");
                              
    $(".are").click(function() {          
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        checkIfEmpty();                         
    });
    
    for (var i = 0; i < $(".edit").length; i++) {
            $(".edit").click(function() {
                
                function edit(){
                    say.focus();
                    let guy = event.target.parentNode.children[1].innerHTML
                    say.val = guy;
                    arr = this;
                    console.log('we', arr.parentNode.children[1].innerHTML);
                    isEditing = true;
                } 
                say.addEventListener("keydown", edits);
            });
         };               
    count+=1;
    checkIfEmpty();
    check20();
    input.val='';
    input.focus();
};

function edits(event){
//var arr = this
    if(event.keyCode == 13 && isEditing === true) {
        console.log('2', arr);
        arr.parentNode.children[1].innerHTML = $('#inputMess').val();
        isEditing = false;
        input.val='';
    input.focus();
    }}


/////////////////////ENTER KEY AND INPUT FOCUS///////////////////////////
var input = $('#inputMess');
var kill = $('#kill');
input.onkeydown = enter;
input.onfocus = check;
input.focus(function() {
    if (count>21) {
        readless();
    }
});
var add = $('#add');
add.click(function() {
    input.focus();
    check();
    printToDom();
});

function check() {
    if($(".card").length===0){
        count=1;
    }
}

function enter(e){
        if(e.keyCode == 13 && isEditing === false) {
            printToDom();
        }
};

function checkIfEmpty() {
    let div = $('#messageBoard');
    if (div.innerHTML !== "") {
        kill.removeAttr("disabled");
    }else if (div.innerHTML === "") {
        kill.setAttribute("disabled", true);
    };
}

function checkname() {
    if ($("#radio1").checked===true) {
        username = users.names[0];
        return username
    }
    else {
        username = users.names[1];
        return username
    }
}

kill.click(function() {
    let div = $('#messageBoard');
    div.innerHTML = "";
    Chat.clearmsg();
    checkIfEmpty();
    oldpost=[];
    $("#oldmsg").html('');
        
});

///////////////////Modal JS///////////////////////////
$("#themechange").click(function() {
    var bgcolor;
    var fontcolor;
    var cardcolor;
    bgcolor = $("#bgcolor").val;
    fontcolor = $("#fontcolor").val;
    cardcolor = $("#cardcolor").val;     
    document.getElementById("body").style.backgroundColor=bgcolor;
    document.getElementById("messageBoard").style.color=fontcolor;
    document.getElementById("messageBoard").childNodes.forEach((a)=>{
        a.style.backgroundColor=cardcolor;
    });                             
    document.getElementById("themechange").setAttribute("data-dismiss","modal");   
});
/////////////////////Theme Chooser/////////////////////////
var darkTheme = $('#tog1');
darkTheme.click (function(){
let msgbrd = $('#messageBoard');
let div = $('.card');

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

var bigTheme = $('#tog2');
bigTheme.click (function() {
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
