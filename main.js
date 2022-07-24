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

//

let toggleShowvwidth = document.querySelector(".toggle-vwidth");
let isShowvwidth = true;

function showHideVwidth(){
    isShowvwidth = !isShowvwidth;
    toggleShowvwidth.classList.toggle("hide", isShowvwidth);
}

//

let toggleShowvheight = document.querySelector(".toggle-vheight");
let isShowvheight = true;

function showHideVheight(){
    isShowvheight = !isShowvheight;
    toggleShowvheight.classList.toggle("hide", isShowvheight);
}

//

let toggleGdprConsent = document.querySelector(".toggle-gdpr_consent");
let isGdprConsent = true;

function showHideGdprConsent(){
    isGdprConsent = !isGdprConsent;
    toggleGdprConsent.classList.toggle("hide", isGdprConsent);
}

//


let toggleReferrer = document.querySelector(".toggle-referrer");
let isReferrer = true;

function showHideReferrer(){
    isReferrer = !isReferrer;
    toggleReferrer.classList.toggle("hide", isReferrer);
}
//

let toggleAppid = document.querySelector(".toggle-appid");
let isAppid = true;

function showHideAppid(){
    isAppid = !isAppid;
    toggleAppid.classList.toggle("hide", isAppid);
}

//

let toggleIfa = document.querySelector(".toggle-ifa");
let isIfa = true;

function showHideIfa(){
    isIfa = !isIfa;
    toggleIfa.classList.toggle("hide", isIfa);
}

//

//

let toggleIp = document.querySelector(".toggle-ip");
let isIp = true;

function showHideIp(){
    isIp = !isIp;
    toggleIp.classList.toggle("hide", isIp);
}

//

let toggleUa = document.querySelector(".toggle-ua");
let isUa = true;

function showHideUa(){
    isUa = !isUa;
    toggleUa.classList.toggle("hide", isUa);
}

//

//

let toggleIfaType = document.querySelector(".toggle-ifa_type");
let isIfaType = true;

function showHideIfaType(){
    isIfaType = !isIfaType;
    toggleIfaType.classList.toggle("hide", isIfaType);
}

//

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

function getData(){

    
    ptvOrSsptv = document.querySelector('input[name="ptv-ssptv"]:checked');
    member = document.querySelector('input[name="member"]:checked');
    idparam = document.getElementById("idparam")

    // console.log ( y.value + x.value)

    // if (ptvOrSsptv.value == null){
    //     ptvOrSsptv == "";
    //     console.log(ptvOrSsptv.value)
    // }else{
        
    // }

    document.getElementById("ad-details").insertAdjacentHTML('afterend', ptvOrSsptv.value + member.value + "&" + "id=" + idparam.value + "&" );


            
    
    }

    