// When window opens the function is called and then looks at rest of code -- cannot find variables yet if not onloaded

window.onload = () => {
    loadEmployeeTable()
   

 
};
function edit(dwarf){
    document.location="Edit.html?id="+dwarf.id;
       
    };
//A Function to add data to <tbody> -- creating the table reactive to the records.
//tablebody is a variable get <tbody> and append the string variable of each record
function loadEmployeeTable() {   
function edit(drawf){
console.log(dwarf.id    );

};
var test = JSON.parse(sessionStorage.getItem("currentRecords"));

    const tableBody = document.getElementById('data');
    let dataHTML = '';

// Converts the data into a string and places into the variable dataHTML
    for (let i of test){ 
         
        dataHTML +=
       `<tr>
            <td >${i.ninumber}</td>
            <td >${i.fullname}</td>
            <td >${i.phone}</td>
            <td >${i.address}</td>
            <td >${i.department}</td>
            <td><input id="${i.ninumber}" type="button" value="Edit" onclick="edit(this)"></td>
            <td><input id="delete${i}" type="button" value="Delete" onclick="DeleteMe(this)"></td>
        </tr>`;
        }

    // var i;
    // for (i = 0; i < test.length; i++) {
    //   dataHTML += `<tr>
    //            <td id="NI' + i + '">'+test[i].ninumber+'</td>
    //            <td id="fullname' + i + '">'+test[i].fullname+'</td>
    //            <td id="phone' + i + '">'+test[i].phone+'</td>
    //            <td id="address' + i + '">'+test[i].address+'</td>
    //            <td id="department' + i + '">'+test[i].department+'</td>
    //            <td><input id="edit' + i + '" type="button" value="Edit" onclick=document.location="Edit.html"></td>
    //            <td><input id="delete' + i + '" type="button" value="Delete" onclick="singlePerson()"></td>
    //        </tr>`;
    // }

        tableBody.innerHTML = dataHTML;
        
};
