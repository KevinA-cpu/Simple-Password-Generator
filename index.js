const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let ALL = document.getElementById("box")
let boxOne = document.getElementById("box1");
let boxTwo = document.getElementById("box2");
let lenBox = document.getElementById("lenBox");
let signButton = document.getElementById("numSign");
let value = characters.length;
function passwords(){
    let pass1 = ""
    let pass2 = ""
    if(lenBox.value>=characters.length){
        return
    }
    for (let i = 0;i<lenBox.value;i++){
        pass1 += characters[(Math.floor(Math.random() * value))];
        pass2 += characters[(Math.floor(Math.random() * value))];  
    }
   
    boxOne.textContent = pass1;
    boxTwo.textContent = pass2;

    window.getSelection().selectAllChildren(ALL)
    document.execCommand("copy")
};

function bool(){
    
    if (signButton.value == "Number and Sign on"){
        
        signButton.value = "Number and Sign off"
        value = 52
    }
    else{
       
        signButton.value = "Number and Sign on"
        value = characters.length
    }
}


