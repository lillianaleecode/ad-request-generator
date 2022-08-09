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
function getData(){

    
    ptvOrSsptv = document.querySelector('input[name="ptv-ssptv"]:checked');
    member = document.querySelector('input[name="member"]:checked');
    idparam = document.getElementById("idparam");
    invcode = document.getElementById("invcode");
    vplaybackmethod = document.querySelector('input[name="vplaybackmethod"]:checked');
    vwidth = document.getElementById("vwidth");
    vheight = document.getElementById("vheight");
    gdpr = document.querySelector('input[name="gdpr"]:checked');
    gconsent = document.getElementById("gconsent");
    referrerparam = document.getElementById("referrerparam");
    appid = document.getElementById("appid");
    ifa = document.getElementById("ifa");
    ifa_type = document.querySelector('input[name="ifa_type"]:checked');
    ipparam = document.getElementById("ipparam");
    ua = document.getElementById("ua");

    //insert concatenated parameters to the page
    document.getElementById("ad-details").insertAdjacentHTML('afterend', (ptvOrSsptv ? ptvOrSsptv.value : "" ) + (member ? member.value : "") + (idparam ? idparam.value :"") + (invcode ? invcode.value :"") + (vplaybackmethod ? vplaybackmethod.value : "") + (vwidth ? vwidth.value :"") + (vheight ? vheight.value :"")+ (gdpr ? gdpr.value :"")+ (vheight ? vheight.value :"")+ (gconsent ? gconsent.value :"") + (referrerparam ? referrerparam.value :"") + (appid ? appid.value :"")  + (ifa? ifa.value :"")  + (ifa_type? ifa_type.value :"") + (ipparam? ipparam.value :"") + (ua ? ua.value :""));


    
}

function getDataDebug(){

    
    ptvOrSsptv = document.querySelector('input[name="ptv-ssptv"]:checked');
    member = document.querySelector('input[name="member"]:checked');
    idparam = document.getElementById("idparam");
    invcode = document.getElementById("invcode");
    vplaybackmethod = document.querySelector('input[name="vplaybackmethod"]:checked');
    vwidth = document.getElementById("vwidth");
    vheight = document.getElementById("vheight");
    gdpr = document.querySelector('input[name="gdpr"]:checked');
    gconsent = document.getElementById("gconsent");
    referrerparam = document.getElementById("referrerparam");
    appid = document.getElementById("appid");
    ifa = document.getElementById("ifa");
    ifa_type = document.querySelector('input[name="ifa_type"]:checked');
    ipparam = document.getElementById("ipparam");
    ua = document.getElementById("ua");

    //insert concatenated parameters to the page
    document.getElementById("ad-details-debug").insertAdjacentHTML('afterend', (ptvOrSsptv ? ptvOrSsptv.value : "" ) + (member ? member.value : "") + (idparam ? idparam.value :"") + (invcode ? invcode.value :"") + (vplaybackmethod ? vplaybackmethod.value : "") + (vwidth ? vwidth.value :"") + (vheight ? vheight.value :"")+ (gdpr ? gdpr.value :"")+ (vheight ? vheight.value :"")+ (gconsent ? gconsent.value :"") + (referrerparam ? referrerparam.value :"") + (appid ? appid.value :"")  + (ifa? ifa.value :"")  + (ifa_type? ifa_type.value :"") + (ipparam? ipparam.value :"") + (ua ? ua.value :"") + "&debug_member=7823&dongle=b3rl1n");


    
}

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

            //what I want to do:
            str += "<b>Type:</b>" + elem[i].type + " ";
                str += "<b>Name:</b>" + elem[i].name + " ";
                str += "<b>Value:</b><i>" + elem[i].value + " ";
                str += "<BR>"

           
           

            // //what i dont want to ignore and do something
            // if (elem[i].checked){
            //     str += "<b>Type:</b>" + elem[i].type + " ";
            //     str += "<b>Name:</b>" + elem[i].name + " ";
            //     str += "<b>Value:</b><i>" + elem[i].value + " ";
            //     str += "<BR>";

            // }
            

            
        } 
        document.getElementById('lblValues').innerHTML = str;
    }

function concatIdparam(){
    const x = document.getElementById("idparam");
    x.value = "id=" + x.value + "&"
}

function concatInvcode(){
    const x = document.getElementById("invcode");
    x.value = "inv_code=" + x.value + "&"
}

function concatvwidth(){
    const x = document.getElementById("vwidth");
    x.value = "vwidth=" + x.value + "&"
}

function concatvheight(){
    const x = document.getElementById("vheight");
    x.value = "vheight=" + x.value + "&"
}

function concatGdprconsent(){
    const x = document.getElementById("gconsent");
    x.value = "gdpr_consent=" + x.value + "&"
}

function concatreferrer(){
    const x = document.getElementById("referrerparam");
    x.value = "referrer=" + x.value + "&"
}

function concatappid(){
    const x = document.getElementById("appid");
    x.value = "appid=" + x.value + "&"
}
function concatifa(){
    const x = document.getElementById("ifa");
    x.value = "ifa=" + x.value + "&"
}
function concatipparam(){
    const x = document.getElementById("ipparam");
    x.value = "ip=" + x.value + "&"
}
function concatua(){
    const x = document.getElementById("ua");
    x.value = "ua=" + x.value 
    //as this is the last parameter, it doesnt end with the &
}

    
