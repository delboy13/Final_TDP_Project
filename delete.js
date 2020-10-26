
function deleteperson(){
    JSON.parse(sessionStorage.getItem("currentRecords"));
    erased = [];
    (sessionStorage.setItem("currentRecords",JSON.stringify(erased) ))
    // records = [];
    dataHTML = erased;
    // document.getElementById('data').innerHTML = dataHTML;
document.location='Index.html';
};






// function loadEmployeeTable() {   

//     var test1 = JSON.parse(sessionStorage.getItem("currentRecords"));
    
//         const tableBody = document.getElementById('data');
//         let dataHTML = '';
    
//     // Converts the data into a string and places into the variable dataHTML
//         for (let i of test1){ 
//             if(search =)  
//             dataHTML += 
//                `<tr>
//                 <td id="NI${i}">${i.ninumber}</td>
//                 <td id="fullname${i}">${i.fullname}</td>
//                 <td id="phone${i}">${i.phone}</td>
//                 <td id="address${i}">${i.address}</td>
//                 <td id="department${i}">${i.department}</td>
//                 <td><input id="edit${i}" type="button" value="Edit" onclick=document.location="Edit.html"></td>
//                 <td><input id="Edit${i}" type="button" value="Edit" onclick="singlePerson(this)"></td>
//                 <td><input id="delete${i} type="button" value="Delete" onclick="deleteperson()"></td>
//             </tr>`;
//             }
//             tableBody.innerHTML = dataHTML;
            
//     };