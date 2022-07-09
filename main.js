const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
    const onOff = toggle.parentNode.querySelector('.onoff')
    onOff.textContent = toggle.checked ? 'ON' : 'OFF'
    
})

//to disable radio buttons:
// if (onOff.textContent = 'OFF'){
//     var radio = onOff;
//     radio.checked = false;

// }



//

let toggleShow = document.querySelector(".toggle-1");
let isShow = true;

function showHide1(){
    isShow = !isShow;
    toggleShow.classList.toggle("hide", isShow);
}


//

let toggleShow2 = document.querySelector(".toggle-2");
let isShow2 = true;

function showHide2(){
    isShow2 = !isShow2;
    toggleShow2.classList.toggle("hide", isShow2);
}

//
let toggleShow3 = document.querySelector(".toggle-3");
let isShow3 = true;

function showHide3(){
    isShow3 = !isShow3;
    toggleShow3.classList.toggle("hide", isShow3);
}