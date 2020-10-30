
// window.onload = () => {
//     editTest()
//     alert("search loaded");
    
 
// };


function search2(){    
    let employees = JSON.parse(sessionStorage.getItem("currentRecords"));
    let NiNumber= '';
    let FullName = '';
    let Phone= '';
    let Address= '';
    let Department= '';
    let searchVal = document.getElementById('searched');
    
    const tableBody = document.getElementById('EDITBODY');
    let dataHTML = '';

for (let i of employees){   
    
    if(i.ninumber == searchVal.value){
        NiNumber = i.ninumber;
        FullName = i.fullname;
        Phone = i.phone;
        Address = i.address;
        Department = i.department;
    }else {
        NiNumber = '';
        FullName = '';
        Phone = '';
        Address = '';
        Department = '';
    };
    dataHTML =
    `<body>

    <h1><u>Edit test</u></h1><br>
    



<table class="center">
    <thead>
        <tr>
            <th>NI Number</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Department</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody id="data">
            <!-- <td ></td> -->
 
    </tbody>
</table>
    <tr>
    <td id="NI${i}">${i.ninumber}</td>
    <td id="fullname${i}">${i.fullname}</td>
    <td id="phone${i}">${i.phone}</td>
    <td id="address${i}">${i.address}</td>
    <td id="department${i}">${i.department}</td>
    <td><input id="edit${i}" type="button" value="Edit" onclick=document.location="Edit.html"></td>
    <td><input id="delete${i}" type="button" value="Delete" onclick="singlePerson()"></td>
</tr>`
    ;
    }
    tableBody.innerHTML = dataHTML;
    sessionStorage.setItem("currentRecords", JSON.stringify(employees));
};






