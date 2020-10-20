// When window opens the function is called and then looks at rest of code -- cannot find variables yet if not onloaded
window.onload = () => {
    loadEmployeeTable(records)
    addperson;
    // deleteperson;
};
//query can put this data in seperate file and refer to it and how?
//let records = [
  //  {ninumber: 'Zs05439A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
    //{ninumber: 'Zs05569B', fullname:'Jane Oscar-smith', phone:'0789965444',address:'167 ElLiot Hill',department:'HR'},
    //{ninumber: 'po805569E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'},
    //{ninumber: 'Zs05439A', fullname:'John Smith', phone:'07738484843',address:'123 ElLiot Hill',department:'IT'},
    //{ninumber: 'Zs05569B', fullname:'Jane Oscar-smith', phone:'0789965444',address:'167 ElLiot Hill',department:'HR'},
    //{ninumber: 'po805569E', fullname:'Sarah Oscar', phone:'0089967644',address:'17 Poi Hill',department:'Security'}
//]; 




//A Function to add data to <tbody> -- creating the table reactive to the records.
//tablebody is a variable get <tbody> and append the string variable of each record
function loadEmployeeTable(anythingArray) {
var test = currentRecord;
    const tableBody = document.getElementById('data');
    let dataHTML = '';
let newNum = 0;
// Converts the data into a string and places into the variable dataHTML
    for (let i of anythingArray){   
        dataHTML += 
       `<tr>
            <td onclick="addperson()" id="NI${i}">${i.ninumber}</td>
            <td id="fullname${i}">${i.fullname}</td>
            <td id="phone${i}">${i.phone}</td>
            <td id="address{i}">${i.address}</td>
            <td id="department{i}">${i.department}</td>
            <td><input type="button" value="Edit" onclick=document.location="Edit.html"></td>
            <td><input type="button" value="Delete" onclick="deleteperson()"></td>
        </tr>`;
        }
// console.log(dataHTML);
        tableBody.innerHTML = dataHTML;
 
      
};


