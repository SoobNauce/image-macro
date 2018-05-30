function updatetop(){
    let topin = document.getElementById("topin");
    let topout = document.getElementById("topout");
    topout.innerHTML = "";
    let nn = document.createTextNode(topin.value);
    topout.appendChild(nn);
}

function updatebottom(){
    let bottomin = document.getElementById("bottomin");
    let bottomout = document.getElementById("bottomout");
    bottomout.innerHTML = "";
    let nn = document.createTextNode(bottomin.value);
    bottomout.appendChild(nn);
}

updatetop();
updatebottom();