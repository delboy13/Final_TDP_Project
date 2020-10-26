
// window.onload = () => {
//     editTest()
//     alert("search loaded");
    
 
// };


function editTest(){    
    let employees = JSON.parse(sessionStorage.getItem("currentRecords"));
    let NiNumber= '';
    let FullName = '';
    let Phone= '';
    let Address= '';
    let Department= '';
    let searchVal = document.getElementById("searched");
    let result = [];
    const tableBody = document.getElementById('data');
    let dataHTML = '';

for (let i of employees){   
    
    if(i.ninumber == searchVal){
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
    dataHTML +=
   `<tr>
        <td id="NI${i}">${NiNumber}</td>
        <td id="fullname${i}">${FullName}</td>
        <td id="phone${i}">${Phone}</td>
        <td id="address${i}">${Address}</td>
        <td id="department${i}">${Department}</td>
        <td><input id="edit${i}" type="button" value="Edit" onclick=document.location="Edit.html"></td>
        <td><input id="delete${i}" type="button" value="Delete" onclick="singlePerson()"></td>
    </tr>`;
    }
    tableBody.innerHTML = dataHTML;
};




// <tr>
//             <td><label>Ni Number:</td>
//             <td><input  value="" type="text"  id="1"></label><br><br></td>
//             </tr>
//             <tr>
//                 <td><label>Full Name:</td>
//                 <td><input value="" type="text" id="2"></label><br><br></td>
//                 </tr>
//                 <tr>
//                     <td><label>Phone:</td>
//                     <td><input value="" type="text" id="3"></label><br><br></td>
//                     </tr>
//                     <tr>
//                         <td><label>Address:</td>
//                         <td><input value="" type="text" id="4"></label><br><br></td>
//                         </tr>
//                         <tr>
//                             <td><label>Department:</td>
//                             <td><input value="" type="text" id="5"></label><br></td>
//                             </tr>



