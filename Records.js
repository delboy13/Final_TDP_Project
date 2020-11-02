window.onload = () =>
 {
    loadEmployeeTable()
};

function edit(dwarf)
    {
    document.location="Edit.html?id="+dwarf.id;  
    };

function loadEmployeeTable() {   
    
//     function edit(dwarf){
// console.log(dwarf.id);

// };
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
            <td><input data-ninumber="${i.ninumber}" id="delete${i.ninumber}"  type="button" value="Delete" onclick="DeleteMe(this)"></td>
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
