
window.onload = () => {
    URLQueury();
    search();
 
};
var id;
function URLQueury(){
    
    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
};

function search(){  
  
    let employees = JSON.parse(sessionStorage.getItem("currentRecords"));
    let NiNumber= '';
    let FullName = '';
    let Phone= '';
    let Address= '';
    let Department= '';
    let searchVal = id;
    
    const tableBody = document.getElementById('EDITBODY');
    // let dataHTML = '';
    // 
// (let i = 0;employees.length;i++){
    
// };
for (let i of employees){  
    
    if(i.ninumber == searchVal){
        NiNumber = i.ninumber;
        FullName = i.fullname;
        Phone = i.phone;
        Address = i.address;
        Department = i.department;

    document.getElementById('NI').value=i.ninumber;
    document.getElementById('Name').value=i.fullname;
    document.getElementById('Phone').value=i.phone;
    document.getElementById('Address').value=i.address;
    document.getElementById('Dept').value=i.department;


//         var dataHTML =
//    `<tr>
//         <td >NI Number: </td>
//         <td id="NI${i}" ><input type="text" value="${NiNumber}"></td>
//         </tr>
//         <tr>
//         <td >Name: </td>
//         <td id="NI${i}"s><input type="text" value="${FullName}"></td>
//         </tr>
//         <td >Phone: </td>
//         <td id="NI${i}" ><input type="text" value="${Phone}"></td>
//         </tr>
//         <td >Address: </td>
//         <td id="NI${i}" ><input type="text" value="${Address}"></td>
//         </tr>
//         <td >Department: </td>
//         <td id="NI${i}"><input type="text" value="${Department}"></td>
// //         </tr>`
//     ;
    
//     tableBody.innerHTML = dataHTML;
    }

}
};