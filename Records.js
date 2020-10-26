// When window opens the function is called and then looks at rest of code -- cannot find variables yet if not onloaded

window.onload = () => {
    loadEmployeeTable()
    
 
};
//A Function to add data to <tbody> -- creating the table reactive to the records.
//tablebody is a variable get <tbody> and append the string variable of each record
function loadEmployeeTable() {   

var test = JSON.parse(sessionStorage.getItem("currentRecords"));

    const tableBody = document.getElementById('data');
    let dataHTML = '';

// Converts the data into a string and places into the variable dataHTML
    for (let i of test){   
        dataHTML += 
       `<tr>
            <td id="NI${i}">${i.ninumber}</td>
            <td id="fullname${i}">${i.fullname}</td>
            <td id="phone${i}">${i.phone}</td>
            <td id="address${i}">${i.address}</td>
            <td id="department${i}">${i.department}</td>
            <td><input id="edit${i}" type="button" value="Edit" onclick=document.location="Edit.html"></td>
            <td><input id="delete${i}" type="button" value="Delete" onclick="singlePerson()"></td>
        </tr>`;
        }
        tableBody.innerHTML = dataHTML;
        
};


