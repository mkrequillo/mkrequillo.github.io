function runValidate(form){

    validateName(form);
    validateREstate(form);

    processData(form);

    return false;
} 

function validateName(form){
    var name = form.elements["name"];

    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your name here");
        return false;
    }

    else{
        name.setCustomValidity("");
        return true;
    }
}

function validateLoc(form){
    var estate = form.elements["estate"];

    if(estate.validity.valueMissing){
        estate.setCustomValidity("Please select");
        return false;
    }

    else{
        estate.setCustomValidity("");
        return true;
    }

}

function validateREstate(form){
    var radio = form.elements["status"];
    var status;

    for(let i =0; i < radio.length; i++){
        if(radio[i].checked){
            status = radio[i].value;
            break;
        }
    }

    if(status == "undefined"){
        radio.setCustomValidity("Please select real estate");
        console.log("hi");
    }
}

function processData(form){

    var name = document.getElementById("name").value;

    // var name = form.elements.["name"].value;
    var radio = form.elements["status"];
    var status;

    for(let i =0; i < radio.length; i++){
        if(radio[i].checked){
            status = radio[i].value;
            break;
        }
    }

    var checkboxes = form.elements["location"];
    var location = "";

    for(let i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            location += checkboxes[i].value + " ";
        }
    }

    var parking = document.querySelector('#parking_id').value;

    if(status == "Rental"){
        var estateText = "You may navigate through the Rental tab to see all available units for Rent. <br> <br> Agencies: Peaceful Rental Homes, Downtown Suites Rental, Student Rooms";
    } else if(status == "Housing"){ 
        var estateText = "You may navigate through the Housing tab to see all available units for purchase. <br> <br> Agencies: Mountain Housing, Downtown Homes, Burnaby Subdivision";
    } else { 
        var estateText = "You may navigate through the Rental or Housing tab to see all available units for purchase.";
    }

    console.log("Name: " + name + "Status: " + status + "Location: " + location + parking);

    var target = document.getElementById('output');
    var text = "Full Name: " + name  + "<br>";
    text += "Real Estate Inquiry: " + status + "<br>";
    text += "Areas Interested: " + location + "<br>";
    text += "Parking: " + parking + "<br><br><br>";
    text += estateText;

    target.innerHTML = text;

    return false;

}
