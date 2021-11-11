var arr= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function createArray(){
    for(let i = 0; i < arr.length; i++){
        arr[i] = Math.floor(Math.random()* 100 + 1);
    }
}


function yeet (){
    createArray();
    document.getElementById("button").innerHTML = arr[9].toString();
}

function loadVisuals(){
    createArray();
    for(let i = 0; i < arr.length; i++){
        var b = document.createElement("button");
        changeButtonGraphics(b, i);
        b.classList.className = "worker";
        b.id = "button" + i.toString();
        document.body.appendChild(b);
    }
}

function changeButtons(){
    createArray();
    for(let i = 0; i < arr.length; i++){
        var b = document.getElementById("button"+i.toString());
        changeButtonGraphics(b, i);
    }
}

function changeButtonGraphics(button, buttonid){
    button.innerHTML = arr[buttonid.toString()];
    button.style.minHeight = (arr[buttonid].toString() * 5) + "px";
}