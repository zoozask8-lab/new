

function submit(){
    let Name =
    document.getElementById("textName").value;
    if( Name === "Hello"){
        textName.style.border = "solid blue";
        la1.innerHTML = "Okay";
        la1.style.textShadow = "-2px 2px 5px blue";

    } else{
        
        textName.style.border = "solid red";
        la1.innerHTML = "I cracked your account!";
        la1.style.textShadow = "-2px 2px 5px red";
    }

    let Pass =
    document.getElementById("textPass").value;
    
    document.getElementById("la2");
    if( Pass === "Dev"){
        textPass.style.border = "solid blue";
        la2.innerHTML = "Hello junior";
        la2.style.textShadow = "-2px 2px 5px blue";

    } else {
        la2.innerHTML = "I gonna kill you";
        la2.style.textShadow = "-2px 2px 5px red";
        textPass.style.border = "solid red";
    }
}