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

let toggleShowPtvSsptv = document.querySelector(".toggle-ptv-ssptv");
let isShowPtvSsptv = true;

function showHidePtvSsptv(){
    isShowPtvSsptv = !isShowPtvSsptv;
    toggleShowPtvSsptv.classList.toggle("hide", isShowPtvSsptv);
}

//
let toggleShowId = document.querySelector(".toggle-Id");
let isShowId = true;

function showHideId(){
    isShowId = !isShowId;
    toggleShowId.classList.toggle("hide", isShowId);
}


//
let toggleShowInvCode = document.querySelector(".toggle-InvCode");
let isShowInvCode = true;

function showHideInvCode(){
    isShowInvCode = !isShowInvCode;
    toggleShowInvCode.classList.toggle("hide", isShowInvCode);
}

//


let toggleShowMember = document.querySelector(".toggle-member");
let isShowMember = true;

function showHideMember(){
    isShowMember = !isShowMember;
    toggleShowMember.classList.toggle("hide", isShowMember);
}

//

let toggleShow = document.querySelector(".toggle-1");
let isShow = true;

function showHide1(){
    isShow = !isShow;
    toggleShow.classList.toggle("hide", isShow);
}


//

let toggleShowvplaybackmethod = document.querySelector(".toggle-vplaybackmethod");
let isShowvplaybackmethod = true;

function showHidevplaybackmethod(){
    isShowvplaybackmethod = !isShowvplaybackmethod;
    toggleShowvplaybackmethod.classList.toggle("hide", isShowvplaybackmethod);
}

//
let toggleShow3 = document.querySelector(".toggle-3");
let isShow3 = true;

function showHide3(){
    isShow3 = !isShow3;
    toggleShow3.classList.toggle("hide", isShow3);
}

//submit button: get form data after the submit button

function generateData(){
    Array.from(document.querySelectorAll('#generatorForm')).reduce((acc, input) =>({
        ...acc, [input.id]: input.value }), {})
    
        console.log(Array.from(document.querySelectorAll('#generatorForm')).reduce((acc, input) =>({
            ...acc, [input.id]: input.value }), {})
        )
    }