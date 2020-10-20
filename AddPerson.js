
function addperson(){
    
    let ninumber1 = document.getElementById('1').value;
    let fullname1 = document.getElementById('2').value;
    let phone1 = document.getElementById('3').value;
    let address1 = document.getElementById('4').value;
    let department1 = document.getElementById('5').value;

    if (ninumber1 == ""){

        alert("Missing NI Number");
    }else{
        if (fullname1 == ""){
            alert("Missing Name");
        }else {
            if (phone1 == ""){
                alert("Missing Number");
            }else{
                if(address1 == ""){
                alert("Missing Address");
            }else {
                if (department1 == ""){
                    alert("Missing department");
                }else {
                    records.push({ninumber:ninumber1, fullname:fullname1,phone:phone1,address:address1,department:department1});
                   currentRecords = records;
				   document.location="HR_Application.html";
                    alert("WORKING");
                }
            }
        }
    }
}
}
// function addperson(){

//     let newPerson = "";
//     let ninumber1 = document.getElementById('1').value;
//     let fullname1 = document.getElementById('2').value;
//     let phone1 = document.getElementById('3').value;
//     let address1 = document.getElementById('4').value;
//     let department1 = document.getElementById('5').value;
//     const tableBody1 = document.getElementById('data');

    // if(ninumber1 != null){

    // newPerson += `<tr><td>${document.getElementById('1').value}</td><td>${document.getElementById('2').value}</td><td>${document.getElementById('3').value}</td><td>${document.getElementById('4').value}</td><td>${document.getElementById('5').value}</td></tr>`;
    // }
    // if(fullname1 != null){

    //     newPerson += `<tr><td>${document.getElementById('1').value}</td><td>${document.getElementById('2').value}</td><td>${document.getElementById('3').value}</td><td>${document.getElementById('4').value}</td><td>${document.getElementById('5').value}</td></tr>`;
    //     }
    //     if(phone1 != null){

    //         newPerson += `<tr><td>${document.getElementById('1').value}</td><td>${document.getElementById('2').value}</td><td>${document.getElementById('3').value}</td><td>${document.getElementById('4').value}</td><td>${document.getElementById('5').value}</td></tr>`;
    //         }
    //         if(address1 != null){

    //             newPerson += `<tr><td>${document.getElementById('1').value}</td><td>${document.getElementById('2').value}</td><td>${document.getElementById('3').value}</td><td>${document.getElementById('4').value}</td><td>${document.getElementById('5').value}</td></tr>`;
    //             }
    //             if(department1 != null){

    //                 newPerson += `<tr><td>${document.getElementById('1').value}</td><td>${document.getElementById('2').value}</td><td>${document.getElementById('3').value}</td><td>${document.getElementById('4').value}</td><td>${document.getElementById('5').value}</td></tr>`;
    //                 }
//     tableBody1.innerHTML = newPerson;

//
