
const display = document.getElementById("display");

const buttons = document.querySelectorAll(
    ".buttons button"
);

const themeBtn = document.getElementById("theme");





// =====================
// BUTTONLAR
// =====================


buttons.forEach(button=>{


button.onclick = ()=>{


let value = button.innerText;



if(value === "C"){

    display.value = "";

    return;

}




if(value === "⌫"){

    display.value =
    display.value.slice(0,-1);

    return;

}





if(value === "="){


    calculate();


    return;

}




if(value === "%"){


    display.value =
    Number(display.value)/100;


    return;

}





display.value += value;



};



});








// =====================
// HISOBLASH
// =====================


function calculate(){


try{


let result =
eval(display.value);



display.value =
result;



}


catch{


display.value =
"Xato";


}



}








// =====================
// KLAVIATURA
// =====================


document.addEventListener(
"keydown",
(e)=>{


let key = e.key;



if(
"0123456789+-*/.".includes(key)
){

display.value += key;


}




if(key === "Enter"){


calculate();


}





if(key === "Backspace"){


display.value =
display.value.slice(0,-1);


}





if(key === "Escape"){


display.value="";


}



});








// =====================
// DARK MODE
// =====================


themeBtn.onclick = ()=>{


document.body.classList.toggle(
"dark"
);



localStorage.setItem(

"theme",

document.body.classList.contains(
"dark"
)

?
"dark"
:
"light"

);


};







// SAQLANGAN TEMA


if(
localStorage.getItem("theme")
==="dark"
){

document.body.classList.add(
"dark"
);

}