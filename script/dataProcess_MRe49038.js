function runValidate(form){

    validateName(form);
    validateREstate(form);
    validateLoc(form);
} 

function validateName(form){
    var name = form.elements["name"];

    if (name.validity.valueMissing){
        name.setCustomValidity("Please enter your name here");
        return false;
    }

    else {
        name.setCustomValidity("");
        //processData(form);
        return true;
    }
    
}



function validateREstate(form){
    var radio = form.elements['status'];
    var rental = document.getElementById('rental');
    var housing = document.getElementById('housing');

    if((!rental.checked && !housing.checked)){
        // radio.setCustomValidity("Please select real estate");
         alert("Please select real estate.");
         return false;
    }

    // else {
    //     // processData(form);
    // }
}

function validateLoc(form){
    var estate = form.elements["estate"];
    var van = document.getElementById('loc1');
    var bur = document.getElementById('loc2');
    var sur = document.getElementById('loc3');
    var con = document.getElementById('loc4');

    if(!van.checked && !bur.checked && !sur.checked && !con.checked){
        //estate.setCustomValidity("Please select location");
        alert("Please select preferred location.");
        return false;
    }

    else{
        processData(form);
        // estate.setCustomValidity("");
        return true;
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
