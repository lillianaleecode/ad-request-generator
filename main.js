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