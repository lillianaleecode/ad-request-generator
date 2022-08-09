//TOGGLES and RADIO BUTTONS

const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
    const onOff = toggle.parentNode.querySelector('.onoff')
    onOff.textContent = toggle.checked ? 'ON' : 'OFF'
    
})

//
let toggleShowId = document.querySelector(".toggle-Id");
let isShowId = true;

function showHideId(){
    isShowId = !isShowId;
    toggleShowId.classList.toggle("hide", isShowId);

    idtoggle = document.getElementById("idtoggle");
    idOnOff = document.getElementById("idOnOff");
    invCodetoggle = document.getElementById("invCodetoggle");
    invCodeOnOff = document.getElementById("invCodeOnOff");
    invcode = document.getElementById("invcode");
    idparam = document.getElementById("idparam");

 //if toggle is in show:
    if (! document.querySelector(".toggle-Id").classList.contains("hide")){
        invCodetoggle.setAttribute('disabled', '')
        
    }
   //if toggle is clicked again to hide:
    if ( document.querySelector(".toggle-Id").classList.contains("hide")){
        invCodetoggle.removeAttribute('disabled')
        idparam.value = ''
    }
    ;
    //si tiene texto, el otro se disable.
    if (document.getElementById("idparam") && document.getElementById("idparam").value) {
        invCodetoggle.setAttribute('disabled', '')
    }
    //si no tiene texto, quitar el disabled del otro.
    if (! document.getElementById("idparam") && ! document.getElementById("idparam").value) {
        invCodetoggle.removeAttribute('disabled')
    }
  
   
    // if (idOnOff.textContent = "ON"){
    //     invCodetoggle.setAttribute('disabled', '');
    // }
    // if(idOnOff.textContent = "OFF"){
    //     idparam.value = "";
    //     invCodetoggle.setAttribute('disabled', '');
    // }
    // if (idOnOff.textContent = "OFF" && invcode.textContent != ""){
    //     idtoggle.removeAttribute('disabled');
    // }



    
    
}


//
let toggleShowInvCode = document.querySelector(".toggle-InvCode");
let isShowInvCode = true;

function showHideInvCode(){
    isShowInvCode = !isShowInvCode;
    toggleShowInvCode.classList.toggle("hide", isShowInvCode);

    idtoggle = document.getElementById("idtoggle");
    idOnOff = document.getElementById("idOnOff");
    invCodetoggle = document.getElementById("invCodetoggle");
    invCodeOnOff = document.getElementById("invCodeOnOff");
    invcode = document.getElementById("invcode");
    idparam = document.getElementById("idparam");

     //if toggle is in show:
    if (! document.querySelector(".toggle-InvCode").classList.contains("hide")){
        idtoggle.setAttribute('disabled', '')
    }
    //if toggle is clicked again to hide:
    if ( document.querySelector(".toggle-InvCode").classList.contains("hide")){
        idtoggle.removeAttribute('disabled')
        invcode.value = ''
    }

    //si tiene texto, el otro se disable.
    if (document.getElementById("invcode") && document.getElementById("invcode").value) {
        idtoggle.setAttribute('disabled', '')
    }
    //si no tiene texto, quitar el disabled del otro.
    if (! document.getElementById("invcode") && ! document.getElementById("invcode").value) {
        idtoggle.removeAttribute('disabled')
    }

    // if (invCodeOnOff.textContent = "ON"){
    //     idtoggle.setAttribute('disabled', '');
    // }
    // if(invCodeOnOff.textContent = "OFF"){
    //     invcode.value = "";
    //      idtoggle.setAttribute('disabled', '');
    // }
    // if (invCodeOnOff.textContent = "OFF" && idparam.textContent != ""){
    //     invCodetoggle.removeAttribute('disabled');
    // }



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
let toggleIfaType = document.querySelector(".toggle-ifa_type");
let isIfaType = true;

function showHideIfaType(){
    isIfaType = !isIfaType;
    toggleIfaType.classList.toggle("hide", isIfaType);
}

//
let toggleDescription = document.querySelector(".toggle-description");
let isDescription = true;

function showHideDescription(){
    isDescription = !isDescription;
    toggleDescription.classList.toggle("hide", isDescription);
}

//concatenate

function DisplayFormValues()
    {
        var str = '';
        var elem = document.getElementById('frmMain').elements;
        for(var i = 0; i < elem.length; i++)
        {
             //what i want to ignore
             if (elem[i].type == "checkbox" || elem[i].type == "button"  ){
                continue;
            };

            if (elem[i].type == "radio" && elem[i].checked == false ){
                continue;
            }

            //concatenate
            str +=  elem[i].value;
            
        } 
        document.getElementById('lblValues').innerHTML = str;
        document.getElementById('lblValuesDebug').innerHTML = str + "&debug_member=7823&dongle=b3rl1n" ;
    }


    
