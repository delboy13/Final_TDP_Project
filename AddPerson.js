
function addperson(){
    
var getRecords = JSON.parse(sessionStorage.getItem("currentRecords"));

    const ninumber1 = document.getElementById('1').value;
    const fullname1 = document.getElementById('2').value;
    const phone1 = document.getElementById('3').value;
    const address1 = document.getElementById('4').value;
    const department1 = document.getElementById('5').value;

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
                    getRecords.push({ninumber:ninumber1, fullname:fullname1,phone:phone1,address:address1,department:department1});
                    document.location="Index.html";
                    sessionStorage.setItem("currentRecords", JSON.stringify(getRecords));
                    // console.log(sessionStorage.setItem("currentRecords", JSON.stringify(getRecords)));
                   
                    // alert("WORKING");
                }
            }
        }
    }
}
}