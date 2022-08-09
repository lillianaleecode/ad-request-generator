//****************** TOGGLES and RADIO BUTTONS ******************

idtoggle = document.getElementById("idtoggle");
idOnOff = document.getElementById("idOnOff");
invCodetoggle = document.getElementById("invCodetoggle");
invCodeOnOff = document.getElementById("invCodeOnOff");
invcode = document.getElementById("invcode");
idparam = document.getElementById("idparam");

// ****************** function showHideId() ******************
let toggleShowId = document.querySelector(".toggle-Id");
function showHideId(){
    toggleShowId.classList.toggle("hide");

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
}

// ****************** function showHideId() ******************
let toggleShowInvCode = document.querySelector(".toggle-InvCode");
function showHideInvCode(){
    toggleShowInvCode.classList.toggle("hide");
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
}


//
let toggleShow = document.querySelector(".toggle-gdpr");
function showHide1(){
    toggleShow.classList.toggle("hide");
}


//
let toggleShowvplaybackmethod = document.querySelector(".toggle-vplaybackmethod");
function showHidevplaybackmethod(){
    toggleShowvplaybackmethod.classList.toggle("hide");

}

//
let toggleShowvwidth = document.querySelector(".toggle-vwidth");
function showHideVwidth(){
    toggleShowvwidth.classList.toggle("hide");
}

//
let toggleShowvheight = document.querySelector(".toggle-vheight");
function showHideVheight(){
    toggleShowvheight.classList.toggle("hide");
}

//
let toggleGdprConsent = document.querySelector(".toggle-gdpr_consent");
function showHideGdprConsent(){
    toggleGdprConsent.classList.toggle("hide");
}

//
let toggleReferrer = document.querySelector(".toggle-referrer");
function showHideReferrer(){
    toggleReferrer.classList.toggle("hide");
}

//
let toggleAppid = document.querySelector(".toggle-appid");
function showHideAppid(){
    toggleAppid.classList.toggle("hide");
}

//
let toggleIfa = document.querySelector(".toggle-ifa");
function showHideIfa(){
    toggleIfa.classList.toggle("hide");
}

//
let toggleIp = document.querySelector(".toggle-ip");
function showHideIp(){
    toggleIp.classList.toggle("hide");
}

//
let toggleUa = document.querySelector(".toggle-ua");
function showHideUa(){
    toggleUa.classList.toggle("hide");
}

//
let toggleIfaType = document.querySelector(".toggle-ifa_type");
function showHideIfaType(){ 
    toggleIfaType.classList.toggle("hide");
}

//
let toggleDescription = document.querySelector(".toggle-description");
function showHideDescription(){
    toggleDescription.classList.toggle("hide");
}

// ****************** CONCATENATE generate URL ******************

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


    
