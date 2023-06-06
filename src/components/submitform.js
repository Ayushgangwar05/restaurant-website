import React from "react";
function submitform(){
    let input1 = document.getElementById("text65");
    input1.addEventListener('input', (event) => {
        input1 = event.target.value;
        console.log(input1)
    })
}
