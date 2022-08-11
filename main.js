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

// ****************** ACTIVATE OR DEACTIVATE TOGGLE ******************

function showHide(e){
    let toggleShow = document.querySelector(e)
    toggleShow.classList.toggle("hide");
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


    
