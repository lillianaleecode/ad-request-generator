
// ****************** ACTIVATE OR DEACTIVATE TOGGLE ******************

function showHide(a,b,c){
    let toggleShow = document.querySelector(a);
    let inputAffected = document.getElementById(c);
    let oppositeToggle = document.getElementById(b);

    toggleShow.classList.toggle("hide");

    //if statements for Id and Inv_code Parameters:
    if (! toggleShow.classList.contains("hide")){
        oppositeToggle.setAttribute('disabled', '')}

    if ( toggleShow.classList.contains("hide")){
        oppositeToggle.removeAttribute('disabled')
        inputAffected.value = ''}

    if (inputAffected && inputAffected.value) {
        oppositeToggle.setAttribute('disabled', '')}

    if (! inputAffected && ! inputAffected.value) {
        oppositeToggle.removeAttribute('disabled') }  
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


    
